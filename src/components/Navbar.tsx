import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Landmark, Menu, X, MessageCircle, Phone } from "lucide-react";
import LanguageSwitcher from "@/localizations/LanguageSwitcher";

interface RouteProps {
  href: string;
  labelKey: string;
  isHash?: boolean;
}

const routeList: RouteProps[] = [
  {
    href: "#contacts",
    labelKey: "navigation.contacts",
    isHash: true,
  },
  {
    href: "#testimonials",
    labelKey: "navigation.testimonials",
    isHash: true,
  },
  {
    href: "#faq",
    labelKey: "navigation.faq",
    isHash: true,
  },
];

const socialLinks = [
  {
    href: "https://connect.viber.com/business/862d283a-adb9-11ef-853b-3a09fa779e63?utm_source=manage&utm_medium=copy_link",
    icon: Phone,
    label: "Viber",
    hoverText: "Click on icon",
  },
  {
    href: "https://chat.whatsapp.com/DvDmRRnYRTDGr9D8TGY5oT",
    icon: MessageCircle,
    label: "WhatsApp",
    hoverText: "Click on icon",
  },
];

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: RouteProps
  ) => {
    if (route.isHash) {
      e.preventDefault();
      const element = document.querySelector(route.href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto">
        <div className="container min-h-16 px-4 w-full flex items-center justify-between">
          <div className="font-bold">
            <a
              rel="noreferrer noopener"
              href="/"
              className={`flex items-center text-lg sm:text-xl md:text-2xl font-bold transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <Landmark className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="ml-2 truncate hidden sm:inline">
                Doing business in China
              </span>
            </a>
          </div>

          {/* mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <div
                  key={link.label}
                  className="flex flex-col items-center group relative"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`p-2 hover:opacity-80 transition-opacity cursor-pointer flex flex-col items-center ${
                      scrolled ? "text-gray-900" : "text-white"
                    }`}
                    aria-label={link.label}
                    title={link.hoverText}
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="text-xs mt-1">{link.label}</span>
                  </a>
                </div>
              ))}
            </div>
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(true)}
              className="p-2"
              aria-label="Open menu"
            >
              <Menu
                className={`h-6 w-6 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              />
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-50"
                  onClick={() => setIsOpen(false)}
                />

                {/* Menu Panel */}
                <div className="fixed top-0 left-0 w-full sm:w-80 h-full bg-white z-50 p-6 shadow-lg transform transition-transform duration-200">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Navigation Menu
                    </h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6 text-gray-500" />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-6">
                    {routeList.map((route: RouteProps) => (
                      <a
                        rel="noreferrer noopener"
                        key={route.labelKey}
                        href={route.href}
                        onClick={(e) => {
                          handleNavigation(e, route);
                          setIsOpen(false);
                        }}
                        className="text-2xl sm:text-3xl text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        {t(route.labelKey)}
                      </a>
                    ))}
                  </nav>
                </div>
              </>
            )}
          </div>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <nav className="flex gap-4 lg:gap-6">
              {routeList.map((route: RouteProps, i) => (
                <a
                  rel="noreferrer noopener"
                  href={route.href}
                  key={i}
                  onClick={(e) => handleNavigation(e, route)}
                  className={`text-lg lg:text-xl font-medium transition-colors ${
                    scrolled
                      ? "text-gray-900 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {t(route.labelKey)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4 pl-4 lg:pl-6 border-l border-gray-200/20">
              {socialLinks.map((link) => (
                <div
                  key={link.label}
                  className="flex flex-col items-center group relative"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`p-2 hover:opacity-80 transition-opacity cursor-pointer flex flex-col items-center ${
                      scrolled ? "text-gray-900" : "text-white"
                    }`}
                    aria-label={link.label}
                    title={link.hoverText}
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="text-xs mt-1">{link.label}</span>
                  </a>
                </div>
              ))}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
