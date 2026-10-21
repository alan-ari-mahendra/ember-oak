import { brewGuide } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import "./BrewGuide.css";

export default function BrewGuide() {
  return (
    <>

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
