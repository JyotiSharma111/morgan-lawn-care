import { Container } from "./Container.jsx";

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-section lg:py-sectionLg ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
