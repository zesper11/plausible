import React from "react";

const Blog = () => {
  return (
    <section className="flex gap-4 flex-col max-w-170 text-start m-auto">
      <div className="p-4">
        <h3 className="mb-4 head font-bold text-3xl">
          It's time to ditch Google Analytics
        </h3>
        <p className="text-dull">
          Google Analytics is frustrating to use, difficult to understand, slow
          to load and privacy-invasive. That's why we built Plausible Analytics,
          a simple, privacy-first alternative that doesn't cut corners.
          <br /> <br /> Here's what makes Plausible a great Google Analytics
          alternative and why over 21,000 paying customers trust us with their
          website and business insights:
        </p>
      </div>
      <div className="p-4">
        <h3 className="mb-4 head font-bold text-2xl">
          Simple analytics at a glance
        </h3>
        <p className="text-dull">
          Plausible is simple web analytics. It is easy to understand and cuts
          through the noise. Check your site traffic and get the essential
          insights on one page in one minute. Get an aggregated view of all your
          sites in a consolidated dashboard. There are no layers of menus and no
          need to build custom reports, custom dashboards or PowerPoint
          documents. You can even import your Google Analytics stats.
        </p>
      </div>
      <div className="p-4">
        <h3 className="mb-4 head font-bold text-2xl">
          Lightweight script that keeps your site speed fast
        </h3>
        <p className="text-dull">
          Plausible is lightweight web analytics. Our script is 54 times smaller
          than Google Analytics. Every visitor that loads your site downloads
          135KB less JavaScript. Less data transferred means less energy used
          and less carbon emitted, for every visitor, every day. A site with
          100,000 monthly visitors saves around 4 kg of CO2 per year by
          switching.
        </p>
      </div>
      <div className="p-4">
        <h3 className="mb-4 head font-bold text-2xl">
          No need for cookie banners or GDPR consent
        </h3>
        <p className="text-dull">
          Plausible is privacy-friendly web analytics that doesn't process
          personal data or track individual users. No cookies, no persistent
          identifiers, no cross-site or cross-device tracking. Your site data is
          not used for any other purposes. All visitor data is exclusively
          processed on servers owned and operated by European companies and
          never leaves the EU. <br /> <br />
          We invite you to take a look around, explore our live demo and try
          Plausible for free. We'd be honored to have you as a customer. Thank
          you.
          <br /> <br />
          Uku and Marko <br /> Co-founders
          <br /> <br />
          P.S. We're a completely independent, self-funded, bootstrapped and
          profitable team of 10, running since 2018. No outside investors, no
          acquisition targets. We choose the subscription business model rather
          than surveillance capitalism. Our code is open source too, so you're
          never locked in. Read more about us.
        </p>
      </div>
    </section>
  );
};

export default Blog;
