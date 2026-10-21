import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct page title and meta description", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Ember & Oak Coffee Roasters | Small-batch specialty coffee, roasted in Portland"
    );
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute(
      "content",
      /Ember & Oak roasts single-origin/
    );
  });

  test("has Open Graph image", async ({ page }) => {
    const og = page.locator('meta[property="og:image"]');
    await expect(og).toHaveAttribute("content", /\/opengraph-image/);
    const res = await page.request.get(new URL((await og.getAttribute("content"))!).pathname);
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toBe("image/png");
  });

  test("has Store and FAQPage JSON-LD schemas", async ({ page }) => {
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    expect(count).toBeGreaterThanOrEqual(2);

    const texts = await scripts.allTextContents();
    const schemas = texts.map((t) => JSON.parse(t));
    expect(schemas.some((s: { "@type": string }) => s["@type"] === "Store")).toBe(true);
    expect(schemas.some((s: { "@type": string }) => s["@type"] === "FAQPage")).toBe(true);
  });

  test("has exactly one h1", async ({ page }) => {
    const h1s = page.locator("h1");
    await expect(h1s).toHaveCount(1);
  });

  test.describe("Announcement Bar", () => {
    test("shows free shipping message", async ({ page }) => {
      await expect(page.locator("text=Free US shipping on orders over $40")).toBeVisible();
      await expect(page.locator("text=Roasted Monday to Thursday, shipped within 48h")).toBeVisible();
    });
  });

  test.describe("Navigation", () => {
    test("shows logo text", async ({ page }) => {
      await expect(
        page.locator("a.hdr-logo").filter({ hasText: "Ember" })
      ).toBeVisible();
    });

    test("has 5 nav links", async ({ page, viewport }) => {
      if (viewport && viewport.width <= 720) return;
      const links = page.locator(".hdr-links a");
      await expect(links).toHaveCount(5);
    });

    test("cart button shows count of 2", async ({ page }) => {
      const cartBtn = page.locator("button[aria-label='Cart, 2 items']");
      await expect(cartBtn).toBeVisible();
      await expect(cartBtn.locator(".cart-count")).toHaveText("2");
    });
  });

  test.describe("Hero", () => {
    test("shows eyebrow text", async ({ page }) => {
      await expect(page.locator("text=Roasted this week in Portland, OR")).toBeVisible();
    });

    test("shows h1 heading", async ({ page }) => {
      const h1 = page.locator("h1");
      await expect(h1).toContainText("Coffee that tastes like");
      await expect(h1).toContainText("someone cared.");
    });

    test("shows two CTA buttons", async ({ page }) => {
      await expect(page.locator("text=Shop fresh roasts")).toBeVisible();
      await expect(page.locator("text=Start a subscription")).toBeVisible();
    });

    test("shows trust row", async ({ page }) => {
      const trust = page.locator(".hero .trust-row");
      await expect(trust).toContainText("4.9 from 2,100+ reviews");
      await expect(trust.getByText("Free shipping over $40")).toBeVisible();
      await expect(trust.getByText("Roasted to order")).toBeVisible();
    });

    test("bag visual has aria-label", async ({ page }) => {
      const bag = page.locator("[aria-label='Bag of Ember and Oak Guji Natural coffee']");
      await expect(bag).toBeVisible();
    });
  });

  test.describe("Ticker", () => {
    test("is aria-hidden and contains items", async ({ page }) => {
      const ticker = page.locator("[aria-hidden='true']").filter({ hasText: "Direct trade" });
      await expect(ticker.first()).toBeVisible();
      await expect(page.locator("text=Carbon-neutral shipping").first()).toBeVisible();
      await expect(page.locator("text=Q Grader on staff").first()).toBeVisible();
    });
  });

  test.describe("Values", () => {
    test("shows 4 value cards", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Direct trade" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Roasted to order" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Scored, not guessed" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Low-impact bags" })).toBeVisible();
    });
  });

  test.describe("Shop Grid", () => {
    test("shows 6 filter chips with All selected", async ({ page }) => {
      const chips = page.locator("[role='group'][aria-label='Filter by roast'] button");
      await expect(chips).toHaveCount(6);
      await expect(chips.first()).toHaveAttribute("aria-pressed", "true");
      await expect(chips.first()).toContainText("All coffees");
    });

    test("shows 8 product cards", async ({ page }) => {
      const cards = page.locator("article h3");
      await expect(cards).toHaveCount(8);
    });

    test("filter chips work", async ({ page }) => {
      const lightChip = page.locator("[role='group'][aria-label='Filter by roast'] button", { hasText: "Light" });
      await lightChip.click();
      await expect(lightChip).toHaveAttribute("aria-pressed", "true");

      const allChip = page.locator("[role='group'][aria-label='Filter by roast'] button", { hasText: "All coffees" });
      await expect(allChip).toHaveAttribute("aria-pressed", "false");

      await expect(page.locator("article").filter({ hasText: "Guji Natural" }).first()).toBeVisible();
      const hearth = page.locator("article").filter({ hasText: "Hearth Blend" }).first();
      await expect(hearth).toBeHidden();
    });

    test("add to cart increments count and shows toast", async ({ page }) => {
      const addBtn = page.locator("button[aria-label='Add Guji Natural to cart']");
      await addBtn.click();

      await expect(page.locator("button[aria-label='Cart, 3 items']")).toBeVisible();
      await expect(page.locator("text=Guji Natural added to cart")).toBeVisible();

      // toast auto-hides after 2.6s + 0.3s transition
      await expect(page.locator("text=Guji Natural added to cart")).toBeHidden({ timeout: 5000 });
    });
  });

  test.describe("Bundle", () => {
    test("shows bundle pricing", async ({ page }) => {
      const bundle = page.locator("#bundle");
      await expect(bundle.getByText("Save 10%", { exact: true })).toBeVisible();
    });
  });

  test.describe("Subscription", () => {
    test("shows cadence options", async ({ page }) => {
      const section = page.locator("#subscribe");
      await expect(section.locator("text=Weekly")).toBeVisible();
      await expect(section.locator("text=Every 2 weeks")).toBeVisible();
      await expect(section.locator("text=Monthly")).toBeVisible();
    });
  });

  test.describe("Story", () => {
    test("shows 3 stats", async ({ page }) => {
      await expect(page.locator("text=Partner farms")).toBeVisible();
      await expect(page.locator("text=Above commodity price")).toBeVisible();
      await expect(page.locator("text=Average cupping score")).toBeVisible();
    });
  });

  test.describe("Reviews", () => {
    test("shows 3 review cards", async ({ page }) => {
      await expect(page.locator("text=Lena P.")).toBeVisible();
      await expect(page.locator("text=Marcus D.")).toBeVisible();
      await expect(page.locator("text=Priya N.")).toBeVisible();
    });
  });

  test.describe("Cafe + FAQ", () => {
    test("shows address", async ({ page }) => {
      await expect(page.locator("text=2214 SE Division St")).toBeVisible();
    });

    test("has 4 FAQ items with first open", async ({ page }) => {
      const details = page.locator("details");
      await expect(details).toHaveCount(4);

      await expect(
        page.locator("text=We roast Monday to Thursday and ship within 48 hours")
      ).toBeVisible();
    });

    test("FAQ accordion opens on click", async ({ page }) => {
      const secondSummary = page.locator("summary", {
        hasText: "How does the subscription work?",
      });
      await secondSummary.click();
      await expect(
        page.locator("text=Pick a coffee or let us choose")
      ).toBeVisible();
    });
  });

  test.describe("Footer", () => {
    test("shows newsletter form", async ({ page }) => {
      await expect(page.locator("footer input[type='email']")).toBeVisible();
    });

    test("shows payment badges", async ({ page }) => {
      for (const method of ["VISA", "MC", "AMEX", "APPLE PAY", "PAYPAL"]) {
        await expect(page.locator(`text=${method}`).last()).toBeVisible();
      }
    });

    test("shows copyright", async ({ page }) => {
      await expect(
        page.locator("text=© 2026 Ember & Oak Coffee Roasters")
      ).toBeVisible();
    });

    test("shows social links", async ({ page }) => {
      await expect(page.locator("a[aria-label='Instagram']")).toBeVisible();
      await expect(page.locator("a[aria-label='TikTok']")).toBeVisible();
    });
  });
});

test.describe("Homepage Responsive (720px)", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("burger menu is visible", async ({ page }) => {
    await expect(page.locator("button[aria-label='Menu']")).toBeVisible();
  });

  test("product cards still visible at mobile", async ({ page }) => {
    const firstCard = page.locator("article").filter({ hasText: "Guji Natural" }).first();
    await expect(firstCard).toBeVisible();
  });
});
