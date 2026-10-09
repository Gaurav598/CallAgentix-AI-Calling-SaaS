export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Product", href: "#product" },
  { label: "Architecture", href: "#architecture" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Modules", href: "#product-modules" },
  { label: "Languages", href: "#coverage" },
  { label: "Demo", href: "#demo" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#product" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Sales campaigns", href: "#product-modules" },
      { label: "Call demo", href: "#demo" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Outbound sales", href: "#product-modules" },
      { label: "Inbound support", href: "#product-modules" },
      { label: "Multilingual India", href: "#coverage" },
      { label: "24/7 support", href: "#coverage" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "#pricing" },
    ],
  },
];
