const subscriptionData = [
  {
    costPer100ThousandPageViews: 10,
    minCost: 19,
    features: [
      "One site",
      "3 years of data retention",
      "Intuitive, fast and privacy-friendly dashboard",
      "Email/Slack reports",
      "Google Analytics import",
      "Goals and custom events",
      "Saved Segments",
      "Annotations",
    ],
    name: "Starter",
  },

  {
    costPer100ThousandPageViews: 20,
    minCost: 29,
    features: [
      "Everything in Starter",
      "Up to 3 sites",
      "Up to 3 team members",
      "Team Management",
      "Shared Links",
      "Embedded Dashboards",
      "Shared Segments",
      "Shared Annotations",
    ],
    name: "Growth",
  },

  {
    costPer100ThousandPageViews: 25,
    minCost: 39,
    features: [
      "Everything in Growth",
      "Up to 10 sites",
      "Up to 10 team members",
      "5 years of data retention",
      "Custom Properties",
      "Stats API (600 requests per hour)",
      "Data Studio Connector",
      "Ecommerce revenue attribution",
      "Funnels and user journeys",
    ],
    name: "Business",
  },
];

const SubscriptionCard = ({ subscription }) => {
  return (
    <article className="subscription-card">
      <h4 className="subscription-card__name">{subscription.name}</h4>
      <p className="subscription-card__price">
        <span className="subscription-card__amount">
          ${subscription.minCost}
        </span>
        <span className="subscription-card__period">/month</span>
      </p>
      <p className="subscription-card__usage">
        +${subscription.costPer100ThousandPageViews} per additional 100k
        pageviews
      </p>
      <button className="subscription-card__button" type="button">
        Start free trial
      </button>
      <ul className="subscription-card__features">
        {subscription.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
};

const Subscription = () => {
  return (
    <section className="subscription-section m-auto">
      <div className="section-heading">
        <h3>Traffic based plans that match your growth</h3>
        <span>Sign up for 30-day free trial. No credit card required.</span>
      </div>
      <div className="subscription-cards" aria-label="Subscription plans">
        {subscriptionData.map((subscription) => (
          <SubscriptionCard
            key={subscription.name}
            subscription={subscription}
          />
        ))}
      </div>
    </section>
  );
};

export default Subscription;
