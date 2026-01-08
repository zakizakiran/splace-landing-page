import { Link, useLocation } from "react-router-dom";
import { useEffect, useId, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import LogoIcon from "../../assets/images/LogoIcon.png";
import Button from "../Elements/Button";

type NavItem = {
  label: string;
  to: string;
  type: "route" | "hash";
};

const NAV_ITEMS: NavItem[] = [
  { label: "About Us", to: "#about", type: "hash" },
  { label: "How it Works", to: "#how-it-works", type: "hash" },
  { label: "Benefit", to: "#benefit", type: "hash" },
  { label: "Testimonials", to: "#testimonials", type: "hash" },
  { label: "FAQs", to: "#faqs", type: "hash" },
];

function NavItemLink({
  item,
  onClick,
  className = "",
}: {
  item: NavItem;
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md";

  if (item.type === "hash") {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const id = item.to.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      onClick?.();
    };
    return (
      <a
        href={item.to}
        onClick={handleClick}
        className={`${base} ${className}`}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link to={item.to} onClick={onClick} className={`${base} ${className}`}>
      {item.label}
    </Link>
  );
}

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuId = useId();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `top-4 mx-4 md:mx-6 lg:mx-8 shadow-lg border px-6 py-4 bg-white/40 backdrop-blur-lg border-white/30 ${
              isMenuOpen ? "rounded-3xl" : "rounded-full"
            }`
          : "top-0 p-6 border-b border-slate-200 shadow-sm bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <img
            src={LogoIcon}
            alt="Logo"
            className={` block md:hidden transition-all duration-300 ${
              isScrolled ? "w-8 sm:w-9" : "w-8 sm:w-11"
            }`}
          />
          <img
            src={Logo}
            alt="Logo"
            className={`hidden md:block transition-all duration-300 ${
              isScrolled ? "w-32 lg:w-48" : "w-40 lg:w-60"
            }`}
          />
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-black-lighter font-medium">
          {NAV_ITEMS.map((item) => (
            <NavItemLink key={item.label} item={item} />
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            as="a"
            href="http://103.155.224.67:8080/login/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-sm text-white hover:bg-primary-dark py-3 px-5 w-full"
          >
            Try Now!
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
        >
          <span className="sr-only">Open main menu</span>

          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-black transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-black transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-black transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? "grid grid-rows-[1fr] mt-4" : "grid grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4 text-black-lighter font-medium py-4 px-2">
            {NAV_ITEMS.map((item) => (
              <NavItemLink
                key={item.label}
                item={item}
                onClick={closeMenu}
                className="py-2"
              />
            ))}

            <div className="pt-2">
              <Button
                as="a"
                href="http://103.155.224.67:8080/login/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white hover:bg-primary-dark py-3 px-5 w-full"
              >
                Try Now!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
