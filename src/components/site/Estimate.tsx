import { useState } from "react";
import { WHATSAPP, type Copy } from "@/content/casa-nestia";
import { supabase } from "@/integrations/supabase/client";

const BEDROOMS = ["Studio", "1", "2", "3", "4", "5+"];

export function Estimate({ copy }: { copy: Copy }) {
  const c = copy.estimate;
  const includedServices = copy.services.items;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? "").trim().slice(0, 120),
      email: String(data.get("email") ?? "").trim().slice(0, 255),
      phone: String(data.get("phone") ?? "").trim().slice(0, 40),
      address: String(data.get("address") ?? "").trim().slice(0, 300),
      bedrooms: String(data.get("bedrooms") ?? ""),
      consent_legal: data.get("consent_legal") === "on",
      consent_marketing: data.get("consent_marketing") === "on",
    };

    // Open the WhatsApp window synchronously-ish so browsers don't block it.
    const message = [
      c.formTitle,
      `${c.name}: ${payload.name}`,
      `${c.email}: ${payload.email}`,
      `${c.phone}: ${payload.phone}`,
      `${c.address}: ${payload.address}`,
      `${c.bedrooms}: ${payload.bedrooms}`,
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    try {
      await supabase.from("estimate_requests").insert(payload);
    } catch {
      /* the WhatsApp message is the primary delivery channel */
    }
    setSending(false);
    setSent(true);
  };

  return (
    <section id="estimation" className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-5">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="mt-6 font-display text-[2rem] leading-[1.15] md:text-[2.8rem]">
            {c.title}
          </h2>
          <p className="mt-7 max-w-lg text-[0.97rem] leading-[1.9] text-muted-foreground">
            {c.body}
          </p>
          <ul className="mt-10 space-y-4">
            {c.points.map((p) => (
              <li
                key={p}
                className="flex items-baseline gap-4 border-t border-border pt-4 text-[0.9rem] text-foreground/80"
              >
                <span className="text-primary">—</span>
                {p}
              </li>
            ))}
          </ul>

          <div className="zellige-frame mt-10 bg-background px-6 py-8 md:px-8">
            <div className="relative z-10 flex flex-col gap-7">
              <div className="flex items-center justify-center gap-5 border-b border-gold/40 pb-7 text-center">
                <span aria-hidden className="zellige-star" />
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {c.commissionFrom}
                  </p>
                  <p className="font-display text-[3.6rem] leading-[0.85] text-primary">
                    {c.commissionValue}
                  </p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.commissionCaption}
                  </p>
                </div>
                <span aria-hidden className="zellige-star" />
              </div>
              <ol className="grid gap-x-7 gap-y-3 sm:grid-cols-2">
                {includedServices.map((service, index) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-[0.82rem] leading-relaxed text-foreground/85"
                  >
                    <span className="font-display text-sm text-primary/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="border border-border bg-background px-7 py-10 md:px-10 md:py-12">
            <h3 className="font-display text-2xl">{c.formTitle}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{c.formBody}</p>

            <form className="mt-8 space-y-5" onSubmit={onSubmit}>
              {(
                [
                  ["name", c.name, "text"],
                  ["email", c.email, "email"],
                  ["address", c.address, "text"],
                  ["phone", c.phone, "tel"],
                ] as const
              ).map(([id, label, type]) => (
                <div key={id}>
                  <label
                    htmlFor={`est-${id}`}
                    className="block text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground"
                  >
                    {label}
                  </label>
                  <input
                    id={`est-${id}`}
                    name={id}
                    type={type}
                    required
                    maxLength={300}
                    className="mt-2 w-full border-b border-border bg-transparent py-2 text-[0.95rem] outline-none transition-colors focus:border-primary"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="est-bedrooms"
                  className="block text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground"
                >
                  {c.bedrooms}
                </label>
                <select
                  id="est-bedrooms"
                  name="bedrooms"
                  required
                  defaultValue=""
                  className="mt-2 w-full border-b border-border bg-transparent py-2 text-[0.95rem] outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    {c.bedroomsPlaceholder}
                  </option>
                  {BEDROOMS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <p className="pt-2 text-[0.78rem] leading-relaxed text-muted-foreground">
                {c.legalNote}
              </p>

              <label className="flex items-start gap-3 text-[0.82rem] leading-relaxed text-foreground/80">
                <input
                  type="checkbox"
                  name="consent_legal"
                  required
                  className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
                />
                {c.consentLegal}
              </label>
              <label className="flex items-start gap-3 text-[0.82rem] leading-relaxed text-foreground/80">
                <input
                  type="checkbox"
                  name="consent_marketing"
                  className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
                />
                {c.consentMarketing}
              </label>

              <button
                type="submit"
                disabled={sending}
                className="btn-rose mt-4 w-full disabled:opacity-60"
              >
                {c.submit}
              </button>
            </form>

            {sent && (
              <p aria-live="polite" className="mt-6 text-sm leading-relaxed text-primary">
                {c.success}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
