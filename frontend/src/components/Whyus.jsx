import React from "react";

const reviewsData = [
  {
    name: "Clem Delangue",
    profession: "Co-founder and CEO at Hugging Face",
    content: "We’re massive users of Plausible here at Hugging Face.",
    pfp: "https://plausible.io/assets/images/twitter/ClemDelangue.jpg",
  },
  {
    name: "DHH",
    profession: "Co-founder and CTO at 37signals",
    content:
      "Been a very happy customer of Plausible at Basecamp. Wonderful to see domains like web stats that were once a wasteland due to monopoly weight spring new, better options ❤️",
    pfp: "https://plausible.io/assets/images/twitter/dhh.jpg",
  },
  {
    name: "John O'Nolan",
    profession: "Founder at Ghost",
    content:
      "Check out Plausible if you haven't yet - fantastic product. We switched over everything from GA.",
    pfp: "https://plausible.io/assets/images/twitter/JohnONolan.jpg",
  },
  {
    name: "Cyrus Shepard",
    profession: "SEO consultant and former Moz lead",
    content:
      "My 100% favorite GA4 alternative so far is Plausible. Not free and not a ton of bells and whistles, but SOOOO easy to use (for clients too) and the data is near real-time. A good solution for ~70% of websites struggling with GA4.",
    pfp: "https://plausible.io/assets/images/twitter/cyrusshepard.jpg",
  },
  {
    name: "Rob Hope",
    profession: "Product designer and founder",
    content:
      "Just replaced my full network's Google Analytics with Plausible - I can't remember when last I was this impressed by a SaaS UX + design 💯. Became a paying customer within 1hr of the 30-day trial.",
    pfp: "https://plausible.io/assets/images/twitter/robhope.jpg",
  },
  {
    name: "Laura Roeder",
    profession: "Founder at Paperbell",
    content:
      "I've been super happy with Plausible. All the conversion tracking we need, it has every report we use.",
    pfp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces",
  },
];

const Whyus = () => {
  return (
    <section className="mb-10 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h3 className="text-[2.2rem] font-semibold leading-none tracking-[-0.06em] text-[#171d2b]">
            People <span className="text-[#ff4d6b]">❤️</span> Plausible
          </h3>
          <p className="mx-auto mt-5 max-w-4xl text-[1.05rem] leading-relaxed text-[#5a6477]">
            From small sites to hundreds of millions of monthly visitors,
            Plausible is trusted by thousands of organizations, including
            Stripe, Mozilla, MongoDB, Harvard University and Sentry.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          <div className="border-b border-[#e4e7eb] pb-6 md:border-b-0 md:border-r md:pr-6">
            <div className="text-5xl font-black tracking-[-0.06em] text-[#6050f5]">
              21k
            </div>
            <div className="mt-2 text-base text-[#6a7280]">
              Paying subscribers
            </div>
          </div>
          <div className="border-b border-[#e4e7eb] pb-6 md:border-b-0 md:border-r md:pr-6">
            <div className="text-5xl font-black tracking-[-0.06em] text-[#6050f5]">
              313B
            </div>
            <div className="mt-2 text-base text-[#6a7280]">
              Tracked pageviews
            </div>
          </div>
          <div>
            <div className="text-5xl font-black tracking-[-0.06em] text-[#6050f5]">
              99.99%
            </div>
            <div className="mt-2 text-base text-[#6a7280]">
              Uptime (Last 90 days)
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviewsData.map((review) => (
            <article
              key={review.name}
              className="flex min-h-[220px] flex-col gap-4 rounded-xl border border-[#e7ebf1] bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={review.pfp}
                  alt={review.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[1.05rem] font-semibold text-[#171d2b]">
                    {review.name}
                  </h4>
                  <p className="text-sm text-[#6a7280]">{review.profession}</p>
                </div>
              </div>

              <p className="text-[1.02rem] leading-7 text-[#4b5362]">
                {review.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyus;
