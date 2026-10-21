import { farmData } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import { photos } from "@/lib/images";

export default function FarmStory() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .farm {
              padding: 0 0 100px;
            }
            .farm .inner {
              background: var(--color-bean);
              color: var(--color-cream);
              border-radius: 28px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              overflow: hidden;
            }
            .farm .farm-img {
              min-height: 420px;
            }
            .farm .farm-body {
              padding: 56px;
            }
            .farm .farm-body h2 {
              font-family: var(--font-display);
              font-size: clamp(34px, 3.8vw, 52px);
              font-weight: 600;
              line-height: 1;
              letter-spacing: -0.02em;
              margin: 14px 0 22px;
            }
            .farm .farm-body h2 em {
              font-style: italic;
              font-weight: 400;
              color: var(--color-mustard);
            }
            .farm .farm-body p {
              font-size: 15px;
              line-height: 1.7;
              color: rgba(255,255,255,.72);
              margin-bottom: 14px;
            }
            .farm .farm-meta {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 22px 40px;
              margin-top: 28px;
            }
            .farm .farm-meta-item {
              border-top: 1px solid rgba(255,255,255,.14);
              padding-top: 14px;
            }
            .farm .farm-meta-label {
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 0.14em;
              color: var(--color-mustard);
              margin-bottom: 4px;
              font-weight: 600;
            }
            .farm .farm-meta-value {
              font-size: 15px;
              font-weight: 500;
            }
            @media (max-width: 1024px) {
              .farm .inner {
                grid-template-columns: 1fr;
              }
              .farm .farm-img {
                min-height: 300px;
              }
            }
            @media (max-width: 720px) {
              .farm .farm-body {
                padding: 30px 22px;
              }
              .farm .farm-meta {
                grid-template-columns: 1fr;
              }
            }
          `,
        }}
      />

      <section className="farm">
        <div className="wrap">
          <div className="inner dark">
            {/* Image */}
            <div className="farm-img ph dk">
              <Photo
                photo={photos.farmDryingBeds}
                sizes="(max-width: 1024px) 100vw, 610px"
              />
            </div>

            {/* Body */}
            <div className="farm-body">
              <Eyebrow variant="mustard">From the farm</Eyebrow>
              <h2>
                {farmData.stationName}, <em>{farmData.region}.</em>
              </h2>

              {farmData.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="farm-meta">
                {farmData.meta.map((item) => (
                  <div key={item.label} className="farm-meta-item">
                    <div className="farm-meta-label">{item.label}</div>
                    <div className="farm-meta-value">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
