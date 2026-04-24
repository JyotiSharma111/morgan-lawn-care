import { Container } from "../ui/Container.jsx";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-soft">
      <Container className="flex flex-col gap-6 py-8 text-base text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-text-primary">
            Morgan Lawn Care & Landscaping
          </p>
          <p>9829 Cherry Hill Ln, Providence Village, TX 76227</p>
          <a href="tel:+14699126553" className="mt-1 inline-block text-brand">
            (469) 912-6553
          </a>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <div className="flex gap-4">
            <Link to="/services" className="hover:text-text-primary">
              Services
            </Link>
            <Link to="/service-areas" className="hover:text-text-primary">
              Service Areas
            </Link>
            <Link to="/contact" className="hover:text-text-primary">
              Contact
            </Link>
          </div>
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Morgan Lawn Care & Landscaping. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
