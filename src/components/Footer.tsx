import { Landmark } from "lucide-react";

const footerLinks = [
  {
    href: "#",
    label: "office@directchinagoods.com",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center md:justify-start">
          <a
            onClick={scrollToTop}
            href="#"
            className="font-bold text-xl flex items-center hover:opacity-80 transition-opacity"
          >
            <Landmark className="h-8 w-8 mr-2" />
            Back to Top
          </a>
        </div>

        <nav className="flex justify-center md:justify-end items-center gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg opacity-60 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </section>

      <section className="container pb-14 text-center text-sm opacity-60">
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
