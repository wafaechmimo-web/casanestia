import { useState } from "react";
import { WHATSAPP, type Copy } from "@/content/casa-nestia";
import { supabase } from "@/integrations/supabase/client";

export function Estimate({ copy }: { copy: Copy }) {
  const c = copy.estimate;
  const [sent, setSent] = useState(false);

  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      address: String(data.get("address") ?? ""),
    };

    // Open the WhatsApp window synchronously-ish so browsers don't block it.
    const message = [
      c.formTitle,
      `${c.name}: ${payload.name}`,
      `${c.email}: ${payload.email}`,
      `${c.phone}: ${payload.phone}`,
      `${c.address}: ${payload.address}`,
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
                  ["phone", c.phone, "tel"],
                  ["address", c.address, "text"],
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
                    className="mt-2 w-full border-b border-border bg-transparent py-2 text-[0.95rem] outline-none transition-colors focus:border-primary"
                  />
                </div>
              ))}

              <button type="submit" disabled={sending} className="btn-rose mt-4 w-full disabled:opacity-60">
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
