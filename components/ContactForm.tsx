"use client";

import { FormEvent, useMemo } from "react";

type ContactFormProps = {
  options: readonly string[];
};

export default function ContactForm({ options }: ContactFormProps) {
  const selectable = useMemo(() => options.filter((opt) => opt.trim().length > 0), [options]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fields = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const subject = encodeURIComponent(`Partnership enquiry from ${fields.name}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nCompany & Brand: ${fields.company}\nEmail: ${fields.email}\nPartnership Interest: ${fields.interest}\n\nMessage:\n${fields.message}`
    );

    window.location.href = `mailto:rich@rich-rosales.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 border border-border bg-black p-7 md:p-10">
      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.22em] text-silver">Name</span>
        <input name="name" required className="mt-2 w-full border border-border bg-carbon px-4 py-3 font-light text-white outline-none transition-colors focus:border-border-hover" />
      </label>
      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.22em] text-silver">Company &amp; Brand</span>
        <input name="company" required className="mt-2 w-full border border-border bg-carbon px-4 py-3 font-light text-white outline-none transition-colors focus:border-border-hover" />
      </label>
      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.22em] text-silver">Email</span>
        <input type="email" name="email" required className="mt-2 w-full border border-border bg-carbon px-4 py-3 font-light text-white outline-none transition-colors focus:border-border-hover" />
      </label>
      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.22em] text-silver">Partnership Interest</span>
        <select name="interest" required className="mt-2 w-full border border-border bg-carbon px-4 py-3 font-light text-white outline-none transition-colors focus:border-border-hover">
          <option value="">Select</option>
          {selectable.map((option, index) => (
            <option key={`interest-${index}`} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.22em] text-silver">Message</span>
        <textarea name="message" rows={6} required className="mt-2 w-full border border-border bg-carbon px-4 py-3 font-light text-white outline-none transition-colors focus:border-border-hover" />
      </label>
      <button type="submit" className="inline-flex border border-white bg-white px-6 py-3 text-xs uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white">
        Send Enquiry
      </button>
    </form>
  );
}
