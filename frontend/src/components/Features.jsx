import React from "react";

const Features = () => {
  const featuresData = [
    {
      heading: "Automatic scroll depth tracking",
      content:
        "Scroll depth from 1 to 100 percent is tracked automatically on every page. No setup, no tag managers. Create scroll depth goals without code.",
    },
    {
      heading: "Monitor traffic from AI tools",
      content:
        "See which AI tools like ChatGPT, Perplexity, or Claude send you traffic. Identify pages that attract AI visitors and the conversions they complete.",
    },
    {
      heading: "Analyze SEO performance",
      content:
        "Connect Search Console to see search queries and organic performance directly in your Plausible dashboard. Track SEO content and conversions in one place.",
    },
    {
      heading: "Measure paid ads and campaigns",
      content:
        "Track UTM campaigns with automatic channel grouping for Paid Search or Affiliates. Analyze landing pages, conversions, and locations.",
    },
    {
      heading: "Real-time dashboard",
      content:
        "Monitor live traffic with the same metrics as your main dashboard. Updates every 30 seconds without refreshing the page.",
    },
    {
      heading: "Codeless goals and revenue tracking",
      content:
        "Turn any page into a goal. Automatically track file downloads, form completions, and external link clicks. Set up custom events and revenue tracking.",
    },
    {
      heading: "Funnels and user journeys",
      content:
        "Measure drop-off across a fixed sequence of steps. Or explore the paths visitors actually take to discover flows you didn't predict.",
    },
    {
      heading: "Built-in bot filtering",
      content:
        "Filter out bot traffic to keep your analytics focused on genuine visitors and get a clearer picture of your website's performance.",
    },
  ];

  return (
    <section className="flex flex-col justify-center align-middle">
      <div className="section-heading">
        <h3>Why use Plausible Analytics?</h3>
        <span>
          Google Analytics is overkill for most site owners. Plausible gives you
          clear, useful insights without complexity, training or prior analytics
          experience.
        </span>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {featuresData.map((feature) => (
          <div key={feature.heading} className="flex items-start gap-3">
            <span className="mt-1 shrink-0 text-emerald-500">✓</span>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold leading-snug text-[#171d2b]">
                {feature.heading}
              </h3>

              <p className="text-[15px] leading-[1.6] text-[#7b8494]">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
