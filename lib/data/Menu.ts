export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Our Services",
    href: "/services",
    submenu: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "Cloud Solutions", href: "/services/cloud" },
    ],
  },
  {
    label: "Our Solutions",
    href: "/solutions",
    submenu: [
      { label: "AI & ML", href: "/solutions/ai" },
      { label: "Automation", href: "/solutions/automation" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    submenu: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Finance", href: "/industries/finance" },
    ],
  },
  {
    label: "Company",
    href: "",
    submenu: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  { label: "Careers", href: "/careers" },
];
