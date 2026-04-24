import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../ui/Container.jsx";
import { PhoneCall, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg/90 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-bg font-semibold">
            M
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-text-primary">
              Morgan Lawn Care
            </span>
            <span className="text-xs text-text-muted">& Landscaping</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-base font-medium transition-colors ${
                  isActive
                    ? "text-brand"
                    : "text-text-secondary hover:text-text-primary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="tel:+14699126553"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-base font-medium text-bg shadow-soft hover:bg-brand-dark hover:shadow-glow transition-all"
          >
            <PhoneCall className="h-4 w-4" />
            <span>(469) 912-6553</span>
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-bg-soft p-2 text-text-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border-subtle bg-bg-soft md:hidden">
          <Container className="flex flex-col gap-3 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${
                    isActive
                      ? "text-brand"
                      : "text-text-secondary hover:text-text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+14699126553"
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-base font-medium text-bg shadow-soft hover:bg-brand-dark hover:shadow-glow transition-all"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
