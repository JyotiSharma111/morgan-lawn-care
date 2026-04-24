import { Section } from "../ui/Section.jsx";
import { SectionHeading } from "../ui/Heading.jsx";
import { Card } from "../ui/Card.jsx";
import { reviews } from "../../data/reviews.js";

export function Reviews() {
  return (
    <Section id="reviews" className="bg-bg">
      <div className="space-y-block lg:space-y-blockLg">

        <SectionHeading
          eyebrow="Reviews"
          title="What Local Homeowners Are Saying"
          subtitle="Morgan Lawn Care & Landscaping is proud to be 5.0 ★ rated on Google."
        />
        <div className="grid gap-cardGap md:grid-cols-2">
          {reviews.map((review) => (
            <Card key={review.id}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-medium text-brand">
                  {"★★★★★".slice(0, review.rating)}
                  <span className="text-text-secondary">
                    {review.rating}.0 Rating
                  </span>
                </div>
                <p className="text-sm text-text-primary">“{review.text}”</p>
                <p className="text-xs text-text-muted">
                  {review.name} • {review.source}
                </p>
              </div>
              <div className="flex items-center gap-4">
  <img
    src="/images/mowing.jpeg"
    alt="Reviewer"
    className="w-12 h-12 rounded-full object-cover"
  />

  <div>
    <p className="text-base text-text-primary font-heading">Local Homeowner</p>
    <p className="text-sm text-text-secondary/80">Google Review</p>
  </div>
</div>

            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
