import logo from "../assets/plausible_logo.svg";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "https://plausible.io/features" },
      { label: "Pricing", href: "https://plausible.io/pricing" },
      { label: "Self-hosted", href: "https://plausible.io/self-hosted-web-analytics" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "https://plausible.io/docs" },
      { label: "Blog", href: "https://plausible.io/blog" },
      { label: "Guides", href: "https://plausible.io/guides" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "https://plausible.io/about" },
      { label: "Contact", href: "https://plausible.io/contact" },
      { label: "Privacy", href: "https://plausible.io/privacy" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="-mx-[120px] -mb-8 mt-12 border-t border-white/10 bg-[#111318] px-[120px] text-white max-md:-mx-6 max-md:-mb-6 max-md:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
        <div className="max-w-xs">
          <a href="https://plausible.io/" aria-label="Plausible home">
            <img src={logo} className="w-40 brightness-0 invert" alt="Plausible" />
          </a>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Simple, privacy-friendly website analytics. Made for a more
            independent web.
          </p>
        </div>

        {footerLinks.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
              {group.heading}
            </h2>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm !text-white/70 transition-colors hover:!text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/10 py-5 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Plausible Insights OÜ</p>
        <p>Independent analytics for a better web.</p>
      </div>
    </footer>
  );
};

export default Footer;
