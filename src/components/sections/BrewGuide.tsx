import { brewGuide } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";

export default function BrewGuide() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .brew {
              padding: 0 0 100px;
            }
            .brew .brew-head {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              gap: 30px;
              margin-bottom: 34px;
            }
            .brew .brew-head h2 {
              font-family: var(--font-display);
              font-size: clamp(34px, 3.8vw, 52px);
              font-weight: 600;
              line-height: 1;
              letter-spacing: -0.02em;
              margin-top: 14px;
            }
            .brew .brew-head h2 em {
              font-style: italic;
              font-weight: 400;
              color: var(--color-terra);
            }
            .brew .brew-head p {
              max-width: 380px;
              color: var(--color-bean-2);
              font-size: 15px;
              line-height: 1.65;
            }
            .brew .brew-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
            .brew .brew-card {
              background: var(--color-paper);
              border: 1px solid var(--color-line);
              border-radius: 18px;
              padding: 26px;
            }
            .brew .brew-card h3 {
              font-family: var(--font-display);
              font-size: 24px;
              font-weight: 600;
              margin-bottom: 14px;
            }
            .brew .brew-card dl {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px 14px;
              font-size: 14px;
            }
            .brew .brew-card dt {
              color: var(--color-muted);
            }
            .brew .brew-card dd {
              font-weight: 600;
              text-align: right;
            }
            .brew .brew-card .brew-tip {
              margin-top: 16px;
              padding-top: 14px;
              border-top: 1px solid var(--color-line);
              font-size: 13.5px;
              color: var(--color-bean-2);
              line-height: 1.55;
            }
            @media (max-width: 1024px) {
              .brew .brew-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 720px) {
              .brew .brew-grid {
                grid-template-columns: 1fr;
              }
              .brew .brew-head {
                flex-direction: column;
                align-items: flex-start;
              }
            }
          `,
        }}
      />

      <section className="brew">
        <div className="wrap">
          <div className="brew-head">
            <div>
              <Eyebrow>Brew guide</Eyebrow>
              <h2>
                How we brew <em>this one.</em>
              </h2>
            </div>
            <p>
              Three tested recipes for this coffee. Adjust grind and dose to taste,
              but these are our starting points after weeks on the cupping table.
            </p>
          </div>

          <div className="brew-grid">
            {brewGuide.map((method) => (
              <div key={method.name} className="brew-card">
                <h3>{method.name}</h3>
                <dl>
                  {method.params.map((p) => (
                    <div key={p.label} style={{ display: "contents" }}>
                      <dt>{p.label}</dt>
                      <dd>{p.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="brew-tip">{method.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
