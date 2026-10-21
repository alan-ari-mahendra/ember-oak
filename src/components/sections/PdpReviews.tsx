import { pdpReviews, pdpReviewSummary } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import Stars from "@/components/ui/Stars";
import "./PdpReviews.css";

export default function PdpReviews() {
  return (
    <>

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
                <h3>{review.title}</h3>
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
