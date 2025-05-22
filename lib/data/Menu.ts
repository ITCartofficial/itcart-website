export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Our Services",
    href: "/services",
    submenu: [
      { label: "Web Development", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Cloud Solutions", href: "/services" },
    ],
  },
  {
    label: "Our Solutions",
    href: "/solutions",
    submenu: [
      { label: "AI & ML", href: "/" },
      { label: "Automation", href: "/" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    submenu: [
      { label: "Healthcare", href: "/" },
      { label: "Finance", href: "/" },
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
