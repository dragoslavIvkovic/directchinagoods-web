import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Landmark, Menu } from "lucide-react";
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
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className={`ml-2 font-bold text-3xl flex ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <Landmark className="h-8 w-8" />
              <span className="ml-2">
                <span>Doing business in China</span>
              
              </span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className={`h-6 w-6 ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader />
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map((route: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={route.labelKey}
                      href={route.href}
                      onClick={(e) => {
                        handleNavigation(e, route);
                        setIsOpen(false);
                      }}
                      className="text-7xl text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      {t(route.labelKey)}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6">
              {routeList.map((route: RouteProps, i) => (
                <a
                  rel="noreferrer noopener"
                  href={route.href}
                  key={i}
                  onClick={(e) => handleNavigation(e, route)}
                  className={`text-2xl font-bold transition-colors ${
                    scrolled
                      ? "text-gray-900 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {t(route.labelKey)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4 pl-6 border-l border-gray-200/20">
              <LanguageSwitcher />
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
