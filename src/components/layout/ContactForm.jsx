import { useState } from "react";
import { Card } from "../ui/Card.jsx";
import { Button } from "../ui/Button.jsx";

export function ContactForm() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitted");
  }

  return (
    <Card>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        aria-label="Request a free lawn care quote"
      >
        <div>
          <label className="mb-1 block text-base font-medium text-text-primary">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full rounded-lg border border-border-subtle bg-bg-soft px-3 py-2 text-base text-text-primary placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label className="mb-1 block text-base font-medium text-text-primary">
            Phone
          </label>
          <input
            type="tel"
            required
            className="w-full rounded-lg border border-border-subtle bg-bg-soft px-3 py-2 text-base text-text-primary placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label className="mb-1 block text-base font-medium text-text-primary">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-border-subtle bg-bg-soft px-3 py-2 text-base text-text-primary placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label className="mb-1 block text-base font-medium text-text-primary">
            Address / City
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-border-subtle bg-bg-soft px-3 py-2 text-base text-text-primary placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label className="mb-1 block text-base font-medium text-text-primary">
            What can we help with?
          </label>
          <textarea
            rows={4}
            className="w-full rounded-lg border border-border-subtle bg-bg-soft px-3 py-2 text-base text-text-primary placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Get a Free Quote
        </Button>
        {status === "submitted" && (
          <p className="text-xs text-text-muted">
            Thank you! This demo form doesn’t send yet, but your layout is ready
            for integration.
          </p>
        )}
      </form>
    </Card>
  );
}
