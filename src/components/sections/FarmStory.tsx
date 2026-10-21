import { farmData } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import { photos } from "@/lib/images";
import "./FarmStory.css";

export default function FarmStory() {
  return (
    <>

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
