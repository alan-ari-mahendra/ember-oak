import { test, expect } from "@playwright/test";

test.describe("Product Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/coffee/guji-natural");
  });

  test("has correct page title and meta description", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Guji Natural, Ethiopia | Ember & Oak Coffee Roasters"
    );
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute("content", /Ethiopia Guji Natural/);
  });

  test("has Open Graph image", async ({ page }) => {
    const og = page.locator('meta[property="og:image"]');
    await expect(og).toHaveAttribute("content", /\/coffee\/guji-natural\/opengraph-image/);
    const res = await page.request.get(new URL((await og.getAttribute("content"))!).pathname);
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toBe("image/png");
  });

  test("has Product JSON-LD schema", async ({ page }) => {
    const scripts = page.locator('script[type="application/ld+json"]');
    const texts = await scripts.allTextContents();
    const schemas = texts.map((t) => JSON.parse(t));
    const product = schemas.find((s: { "@type": string }) => s["@type"] === "Product");
    expect(product).toBeDefined();
    expect(product.name).toBe("Guji Natural, Ethiopia");
    expect(product.aggregateRating.ratingValue).toBe("4.9");
    expect(product.aggregateRating.reviewCount).toBe("312");
    expect(product.offers.lowPrice).toBe("16.15");
    expect(product.offers.highPrice).toBe("48.00");
  });

  test("has exactly one h1", async ({ page }) => {
    const h1s = page.locator("h1");
    await expect(h1s).toHaveCount(1);
    await expect(h1s).toContainText("Guji");
    await expect(h1s).toContainText("Natural");
  });

  test.describe("Breadcrumb", () => {
    test("shows 4 breadcrumb items", async ({ page }) => {
      const crumbs = page.locator("[aria-label='Breadcrumb']");
      await expect(crumbs).toBeVisible();
      await expect(crumbs).toContainText("Home");
      await expect(crumbs).toContainText("Coffee");
      await expect(crumbs).toContainText("Ethiopia");
      await expect(crumbs).toContainText("Guji Natural");
    });
  });

  test.describe("Gallery", () => {
    test("shows badge and cupping score", async ({ page }) => {
      await expect(page.locator(".gbadge")).toHaveText("New harvest");
      await expect(page.locator(".gscore-val")).toHaveText("88.5");
    });

    test("has 5 thumbnails with first selected", async ({ page }) => {
      const thumbs = page.locator("[role='group'][aria-label='Product images'] button");
      await expect(thumbs).toHaveCount(5);
      await expect(thumbs.first()).toHaveAttribute("aria-pressed", "true");
    });

    test("thumbnail toggle works", async ({ page }) => {
      const thumbs = page.locator("[role='group'][aria-label='Product images'] button");
      await thumbs.nth(1).click();
      await expect(thumbs.nth(1)).toHaveAttribute("aria-pressed", "true");
      await expect(thumbs.first()).toHaveAttribute("aria-pressed", "false");
    });

    test("photo thumbnail replaces the bag in the main slot", async ({ page }) => {
      const thumbs = page.locator("[role='group'][aria-label='Product images'] button");
      await expect(page.locator(".gmain .bag-gallery")).toBeVisible();
      await thumbs.nth(2).click();
      await expect(page.locator(".gmain .bag-gallery")).toHaveCount(0);
      await expect(page.locator(".gmain .gphoto")).toBeVisible();
      await thumbs.first().click();
      await expect(page.locator(".gmain .bag-gallery")).toBeVisible();
    });
  });

  test.describe("Product Info", () => {
    test("shows origin info", async ({ page }) => {
      const info = page.locator(".info");
      await expect(info.locator("text=Guji Zone")).toBeVisible();
      await expect(info.locator("text=Natural process")).toBeVisible();
    });

    test("shows rating and review link", async ({ page }) => {
      const info = page.locator(".info");
      await expect(info.locator("b", { hasText: "4.9" })).toBeVisible();
      await expect(info.locator("a", { hasText: "312 reviews" })).toBeVisible();
    });

    test("shows 3 tasting notes", async ({ page }) => {
      await expect(page.locator("[aria-label='Tasting notes']")).toBeVisible();
      await expect(page.locator(".tasting-pill").filter({ hasText: "Blueberry" })).toBeVisible();
      await expect(page.locator(".tasting-pill").filter({ hasText: "Jasmine" })).toBeVisible();
      await expect(page.locator(".tasting-pill").filter({ hasText: "Cocoa" })).toBeVisible();
    });

    test("shows 4 specs", async ({ page }) => {
      const specs = page.locator(".specs-grid .spec-value");
      await expect(specs).toHaveCount(4);
      await expect(specs.nth(0)).toContainText("Light");
      await expect(specs.nth(1)).toContainText("Natural");
      await expect(specs.nth(2)).toContainText("2,100 m");
      await expect(specs.nth(3)).toContainText("Heirloom");
    });
  });

  test.describe("Size Selector", () => {
    test("340g is selected by default", async ({ page }) => {
      const radio340 = page.locator("input[name='size'][value='340']");
      await expect(radio340).toBeChecked();
    });

    test("switching to 1kg updates prices", async ({ page }) => {
      const label1kg = page.locator("label").filter({ hasText: "1 kg" });
      await label1kg.click();

      const info = page.locator(".info");
      await expect(info.locator("text=$48.00").first()).toBeVisible();
      await expect(info.locator("text=$40.80")).toBeVisible();
    });
  });

  test.describe("Grind Selector", () => {
    test("whole bean is selected by default", async ({ page }) => {
      const radio = page.locator("input[name='grind'][value='whole']");
      await expect(radio).toBeChecked();
    });

    test("has 5 grind options", async ({ page }) => {
      const grinds = page.locator("input[name='grind']");
      await expect(grinds).toHaveCount(5);
    });
  });

  test.describe("Purchase Mode", () => {
    test("subscribe is selected by default", async ({ page }) => {
      const subRadio = page.locator("input[name='mode'][value='sub']");
      await expect(subRadio).toBeChecked();
    });

    test("subscribe shows cadence grid", async ({ page }) => {
      const cadenceGrid = page.locator(".cadence-grid");
      await expect(cadenceGrid).toBeVisible();
    });

    test("switching to one-time hides cadence and updates price", async ({ page }) => {
      const onceLabel = page.locator("label.mode-option").filter({ hasText: "One-time purchase" });
      await onceLabel.click();

      const cadenceGrid = page.locator(".cadence-grid");
      await expect(cadenceGrid).toBeHidden();

      const ctaBtn = page.locator("button[type='submit']");
      await expect(ctaBtn).toContainText("$19.00");
    });

    test("switching back to subscribe shows cadence", async ({ page }) => {
      await page.locator("label.mode-option").filter({ hasText: "One-time purchase" }).click();
      await page.locator("label.mode-option").filter({ hasText: "Subscribe" }).click();
      const cadenceGrid = page.locator(".cadence-grid");
      await expect(cadenceGrid).toBeVisible();
    });
  });

  test.describe("Quantity", () => {
    test("starts at 1", async ({ page }) => {
      const output = page.locator("output");
      await expect(output).toHaveText("1");
    });

    test("increment works", async ({ page }) => {
      await page.locator("button[aria-label='Increase quantity']").click();
      await expect(page.locator("output")).toHaveText("2");
    });

    test("decrement does not go below 1", async ({ page }) => {
      await page.locator("button[aria-label='Decrease quantity']").click();
      await expect(page.locator("output")).toHaveText("1");
    });
  });

  test.describe("Price Calculation", () => {
    test("1kg + subscribe + qty 2 = $81.60", async ({ page }) => {
      await page.locator("label").filter({ hasText: "1 kg" }).click();
      await page.locator("button[aria-label='Increase quantity']").click();

      const ctaBtn = page.locator("button[type='submit']");
      await expect(ctaBtn).toContainText("$81.60");
    });

    test("340g + one-time + qty 1 = $19.00", async ({ page }) => {
      await page.locator("label.mode-option").filter({ hasText: "One-time purchase" }).click();

      const ctaBtn = page.locator("button[type='submit']");
      await expect(ctaBtn).toContainText("$19.00");
    });
  });

  test.describe("Add to Cart", () => {
    test("form submit triggers toast", async ({ page }) => {
      await page.locator("button[type='submit']").click();

      await expect(page.locator("button[aria-label='Cart, 3 items']")).toBeVisible();
      await expect(page.locator("text=Guji Natural added to cart")).toBeVisible();
    });
  });

  test.describe("Accordion", () => {
    test("coffee details is open by default", async ({ page }) => {
      await expect(page.locator("text=Shakiso smallholders")).toBeVisible();
    });

    test("shipping accordion opens on click", async ({ page }) => {
      await page.locator("summary", { hasText: "Shipping" }).click();
      await expect(
        page.locator("text=We roast Monday through Thursday")
      ).toBeVisible();
    });
  });

  test.describe("Farm Story", () => {
    test("shows farm heading and meta", async ({ page }) => {
      const farm = page.locator(".farm");
      await expect(farm.locator("h2")).toContainText("Buku Abel");
      await expect(farm.locator("text=2.6x commodity")).toBeVisible();
      await expect(farm.locator("text=4th harvest")).toBeVisible();
    });
  });

  test.describe("Brew Guide", () => {
    test("shows 3 brew cards", async ({ page }) => {
      await expect(page.locator("text=V60 / pour over")).toBeVisible();
      await expect(page.locator("text=AeroPress").first()).toBeVisible();
      await expect(page.locator(".brew h3").filter({ hasText: "Espresso" })).toBeVisible();
    });
  });

  test.describe("Reviews", () => {
    test("shows summary with 4.9 rating", async ({ page }) => {
      await expect(page.locator("text=312 verified reviews")).toBeVisible();
    });

    test("shows 3 review cards", async ({ page }) => {
      await expect(page.locator("text=Jordan K.")).toBeVisible();
      await expect(page.locator("text=Sam R.")).toBeVisible();
      await expect(page.locator("text=Elena M.")).toBeVisible();
    });

    test("shows histogram", async ({ page }) => {
      await expect(page.locator("text=284")).toBeVisible();
    });
  });

  test.describe("Related Products", () => {
    test("shows 4 related product cards", async ({ page }) => {
      const related = page.locator(".related");
      await expect(related.locator("h3").filter({ hasText: "Kochere Washed" })).toBeVisible();
      await expect(related.locator("h3").filter({ hasText: "Nyeri AA" })).toBeVisible();
      await expect(related.locator("h3").filter({ hasText: "Huila Honey" })).toBeVisible();
      await expect(related.locator("h3").filter({ hasText: "Hearth Blend" })).toBeVisible();
    });
  });
});

test.describe("Product Page Responsive (720px)", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/coffee/guji-natural");
  });

  test("sticky bar is visible on mobile", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(200);
    const stickyBar = page.locator(".stickybar");
    await expect(stickyBar).toBeVisible();
    await expect(stickyBar.locator("text=Add to cart")).toBeVisible();
  });

  test("burger menu is visible", async ({ page }) => {
    await expect(page.locator("button[aria-label='Menu']")).toBeVisible();
  });
});
