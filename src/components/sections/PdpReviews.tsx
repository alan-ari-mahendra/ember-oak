import { pdpReviews, pdpReviewSummary } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import Stars from "@/components/ui/Stars";

export default function PdpReviews() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .prev {
              padding: 0 0 100px;
            }
            .prev .prev-top {
              display: grid;
              grid-template-columns: 0.8fr 1.2fr;
              gap: 50px;
              align-items: start;
              margin-bottom: 34px;
            }
            .prev .prev-top h2 {
              font-family: var(--font-display);
              font-size: clamp(34px, 3.8vw, 52px);
              font-weight: 600;
              line-height: 1;
              letter-spacing: -0.02em;
              margin-top: 14px;
            }
            .prev .prev-top h2 em {
              font-style: italic;
              font-weight: 400;
              color: var(--color-terra);
            }
            .prev .summary-card {
              background: var(--color-paper);
              border: 1px solid var(--color-line);
              border-radius: 18px;
              padding: 26px;
              display: grid;
              grid-template-columns: auto 1fr;
              gap: 26px;
              align-items: center;
            }
            .prev .summary-big {
              font-family: var(--font-display);
              font-size: 64px;
              font-weight: 600;
              line-height: 1;
              text-align: center;
            }
            .prev .summary-sub {
              font-size: 13px;
              color: var(--color-muted);
              margin-top: 4px;
              text-align: center;
            }
            .prev .histo-bar {
              display: grid;
              grid-template-columns: 28px 1fr 36px;
              gap: 10px;
              align-items: center;
              color: var(--color-muted);
              font-size: 13px;
              margin-bottom: 6px;
            }
            .prev .histo-bar:last-child {
              margin-bottom: 0;
            }
            .prev .histo-track {
              height: 8px;
              border-radius: 4px;
              background: var(--color-cream-2);
              position: relative;
              overflow: hidden;
            }
            .prev .histo-fill {
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              background: var(--color-mustard);
              border-radius: 4px;
            }
            .prev .rev-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
            .prev .rev-card {
              background: var(--color-paper);
              border: 1px solid var(--color-line);
              border-radius: 18px;
              padding: 26px;
            }
            .prev .rev-card h4 {
              font-family: var(--font-display);
              font-size: 20px;
              font-weight: 600;
              margin: 10px 0 8px;
              line-height: 1.2;
            }
            .prev .rev-card p {
              font-size: 14.5px;
              color: var(--color-bean-2);
              line-height: 1.6;
            }
            .prev .rev-who {
              display: flex;
              align-items: center;
              gap: 10px;
              font-size: 13px;
              color: var(--color-muted);
              margin-top: 14px;
            }
            .prev .rev-who b {
              color: var(--color-bean);
            }
            .prev .rev-verified {
              color: var(--color-sage);
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 0.06em;
              font-weight: 600;
            }
            @media (max-width: 1024px) {
              .prev .prev-top {
                grid-template-columns: 1fr;
              }
              .prev .rev-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 720px) {
              .prev .summary-card {
                grid-template-columns: 1fr;
                text-align: center;
              }
              .prev .rev-grid {
                grid-template-columns: 1fr;
              }
            }
          `,
        }}
      />

      <section className="prev" id="reviews">
        <div className="wrap">
          {/* Top area */}
          <div className="prev-top">
            <div>
              <Eyebrow>Reviews</Eyebrow>
              <h2>
                312 people <em>rated this.</em>
              </h2>
            </div>

            {/* Summary card */}
            <div className="summary-card">
              <div>
                <div className="summary-big">{pdpReviewSummary.rating}</div>
                <div style={{ marginTop: 6 }}>
                  <Stars rating={5} ariaLabel="4.9 out of 5 stars" />
                </div>
                <div className="summary-sub">
                  {pdpReviewSummary.count} verified reviews
                </div>
              </div>
              <div>
                {pdpReviewSummary.histogram.map((bar) => (
                  <div key={bar.stars} className="histo-bar">
                    <span>{bar.stars}&#9733;</span>
                    <div className="histo-track">
                      <div
                        className="histo-fill"
                        style={{ width: `${bar.percent}%` }}
                      />
                    </div>
                    <span>{bar.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="rev-grid">
            {pdpReviews.map((review) => (
              <div key={review.author} className="rev-card">
                <Stars rating={review.rating} />
                <h4>{review.title}</h4>
                <p>{review.quote}</p>
                <div className="rev-who">
                  <b>{review.author}</b>
                  <span>{review.context}</span>
                  {review.verified && (
                    <span className="rev-verified">Verified</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
