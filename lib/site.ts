export const site = {
  name: "NONAME",
  tagline: "Software Development & Digital Products",
  email: "mohammadasimsaad@gmail.com",
  phone: "+91 78159 79515",
  phoneHref: "tel:+917815979515",
  description:
    "NONAME builds modern websites, software products, AI solutions, and digital experiences for businesses and organizations.",
  url: "https://noname.agency",
  socials: {
    github: "https://github.com",
    x: "https://x.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
