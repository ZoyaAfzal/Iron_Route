import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, Phone, Shield, Headphones, Clock, Loader2 } from "lucide-react";

const schema = z.object({
  pickup: z.string().min(2, "Required").max(100),
  delivery: z.string().min(2, "Required").max(100),
  freight: z.enum(["road", "air", "ocean", "warehouse"]),
  weight: z.string().min(1, "Required"),
  date: z.string().min(1, "Required"),
  notes: z.string().max(500).optional(),
});
type FormVals = z.infer<typeof schema>;

const BENEFITS = [
  "Response within 60 minutes during business hours",
  "Locked, all-in pricing — no surprise fuel surcharges",
  "Dedicated rep assigned the moment you submit",
  "Full insurance and tracking included",
];

export function QuoteForm() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const { register, handleSubmit, formState: { errors } } = useForm<FormVals>({
    resolver: zodResolver(schema),
    defaultValues: { freight: "road" },
  });

  const onSubmit = async () => {
    setState("loading");
    await new Promise((r) => setTimeout(r, 1300));
    setState("done");
  };

  return (
    <section id="quote" className="relative bg-background py-24 lg:py-28">
      <div className="container-x">
        <div className="border-l-4 border-primary pl-6">
          <div className="eyebrow mb-4">Get Started</div>
          <h2 className="text-balance text-4xl uppercase lg:text-5xl">
            Get a freight quote <span className="text-primary">in minutes</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-px bg-border lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-surface p-8 lg:col-span-3 lg:p-12"
          >
            <AnimatePresence>
              {state === "done" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-surface/95 backdrop-blur"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-success text-background"
                  >
                    <Check className="h-8 w-8" strokeWidth={3} />
                  </motion.div>
                  <div className="text-2xl uppercase">Quote sent!</div>
                  <p className="max-w-sm text-center text-sm text-muted-foreground">
                    A dispatcher will reach out within the hour. Check your inbox for confirmation.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Pickup Location" error={errors.pickup?.message}>
                <input {...register("pickup")} placeholder="Long Beach, CA" className="input" />
              </Field>
              <Field label="Delivery Location" error={errors.delivery?.message}>
                <input {...register("delivery")} placeholder="Atlanta, GA" className="input" />
              </Field>
              <Field label="Freight Type" error={errors.freight?.message}>
                <select {...register("freight")} className="input">
                  <option value="road">Road Freight</option>
                  <option value="air">Air Freight</option>
                  <option value="ocean">Ocean Freight</option>
                  <option value="warehouse">Warehouse</option>
                </select>
              </Field>
              <Field label="Estimated Weight" error={errors.weight?.message}>
                <select {...register("weight")} className="input" defaultValue="">
                  <option value="" disabled>Select range</option>
                  <option>Under 5,000 lbs</option>
                  <option>5,000 – 15,000 lbs</option>
                  <option>15,000 – 30,000 lbs</option>
                  <option>30,000 – 45,000 lbs</option>
                  <option>45,000+ lbs</option>
                </select>
              </Field>
              <Field label="Pickup Date" error={errors.date?.message} className="sm:col-span-2">
                <input type="date" {...register("date")} className="input" />
              </Field>
              <Field label="Special Requirements" error={errors.notes?.message} className="sm:col-span-2">
                <textarea {...register("notes")} rows={4} placeholder="Hazmat, temperature, delivery hours…" className="input resize-none" />
              </Field>
            </div>

            <button
              type="submit"
              disabled={state === "loading"}
              className="btn-industrial btn-primary mt-7 w-full disabled:opacity-70"
            >
              {state === "loading" ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
              ) : (
                <>Get My Quote <ArrowRight className="h-4 w-4" /></>
              )}
            </button>
          </form>

          {/* Sidebar */}
          <aside className="bg-surface-2 p-8 lg:col-span-2 lg:p-12">
            <div className="font-display text-xl uppercase">Why get a quote with us?</div>
            <ul className="mt-6 space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-border pt-8">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Or call us 24/7</div>
              <a href="tel:+18881234567" className="mt-2 flex items-center gap-3 text-primary">
                <Phone className="h-6 w-6" />
                <span className="font-display text-3xl font-black">(888) 123-4567</span>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[{ Icon: Shield, l: "Fully Insured" }, { Icon: Headphones, l: "24/7 Support" }, { Icon: Clock, l: "60-Min Reply" }].map((b) => (
                <div key={b.l} className="border border-border p-4">
                  <b.Icon className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{b.l}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          color: var(--color-foreground);
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          font-family: var(--font-sans);
          border-radius: 2px;
          outline: none;
          transition: border-color 0.2s;
        }
        .input:focus { border-color: var(--color-primary); }
        .input::placeholder { color: var(--color-muted-foreground); }
      `}</style>
    </section>
  );
}

function Field({
  label, error, children, className,
}: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-2 block font-display text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
