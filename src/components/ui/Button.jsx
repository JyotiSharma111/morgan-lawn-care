import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-bg shadow-soft";

const variants = {
  primary:
    "bg-brand text-bg hover:bg-brand-dark hover:shadow-glow",
  outline:
    "border border-border-subtle bg-transparent text-text-primary hover:border-brand hover:text-brand hover:shadow-glow",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5",
};

export function Button({
  as = "button",
  to,
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "link" && to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
