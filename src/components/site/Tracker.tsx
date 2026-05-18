import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Package, Truck, CheckCircle2 } from "lucide-react";

const STEPS = ["Pickup", "In Transit", "Out for Delivery", "Delivered"];
const ACTIVE = 2;
const LOG = [
  { t: "Today · 09:14", loc: "Reno, NV", msg: "Out for delivery, driver Mike R." },
  { t: "Yesterday · 22:08", loc: "Sacramento, CA", msg: "Departed sort facility" },
  { t: "Yesterday · 11:42", loc: "Sacramento, CA", msg: "Arrived sort facility" },
  { t: "Mon · 06:30", loc: "Long Beach, CA", msg: "Picked up from shipper" },
];

export function Tracker() {
  const [val, setVal] = useState("IR-4827-XJ");

  return (
    <section className="bg-background py-24 lg:py-28">
      <div className="container-x">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow mb-4">Live Tracking</div>
          <h2 className="text-balance text-4xl uppercase lg:text-5xl">
            Track your <span className="text-primary">shipment</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={val}
              onChange={(e) => setVal(e.target.value)}
              placeholder="Enter tracking number..."
              className="h-14 w-full border border-border bg-surface pl-12 pr-4 font-mono text-base text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>
          <button className="btn-industrial btn-primary h-14 px-8">Track Now</button>
        </div>

        <div className="mt-10 grid gap-px bg-border lg:grid-cols-12">
          {/* Progress + log */}
          <div className="bg-surface p-7 lg:col-span-7">
            <div className="mb-2 font-display text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Shipment {val}
            </div>
            <div className="text-2xl uppercase">Long Beach, CA → Reno, NV</div>

            <div className="mt-8">
              <div className="relative flex items-center justify-between">
                <div className="absolute left-0 right-0 top-5 h-px bg-border" />
                <div
                  className="absolute left-0 top-5 h-px bg-primary transition-all"
                  style={{ width: `${(ACTIVE / (STEPS.length - 1)) * 100}%` }}
                />
                {STEPS.map((s, i) => {
                  const done = i <= ACTIVE;
                  const cur = i === ACTIVE;
                  return (
                    <div key={s} className="relative z-10 flex flex-col items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center border-2 transition-all ${
                          done ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground"
                        } ${cur ? "shadow-[0_0_0_6px_oklch(0.63_0.21_32/0.2)]" : ""}`}
                      >
                        {i === 0 && <Package className="h-4 w-4" />}
                        {i === 1 && <Truck className="h-4 w-4" />}
                        {i === 2 && <MapPin className="h-4 w-4" />}
                        {i === 3 && <CheckCircle2 className="h-4 w-4" />}
                        {cur && (
                          <span className="absolute inset-0 animate-ping border-2 border-primary opacity-50" />
                        )}
                      </div>
                      <div className="hidden text-center font-display text-[10px] font-bold uppercase tracking-wider sm:block">
                        {s}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <ol className="mt-10 space-y-4 border-t border-border pt-6">
              {LOG.map((l, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 text-sm"
                >
                  <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${i === 0 ? "bg-primary" : "bg-border"}`} />
                  <div className="flex-1">
                    <div className="text-foreground">{l.msg}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {l.t} · {l.loc}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Map placeholder */}
          <div className="relative overflow-hidden bg-surface-2 lg:col-span-5">
            <div className="absolute inset-0 bg-grit opacity-60" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-foreground/5" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
              <path
                d="M 60 320 Q 150 180 220 200 T 350 80"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeDasharray="6 4"
                fill="none"
              />
              <circle cx="60" cy="320" r="7" fill="var(--color-primary)" />
              <circle cx="350" cy="80" r="7" fill="var(--color-primary)" />
              <circle cx="220" cy="200" r="9" fill="var(--color-primary)">
                <animate attributeName="r" values="9;13;9" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="absolute bottom-4 left-4 right-4 border border-border bg-background/85 p-3 text-xs backdrop-blur">
              <div className="font-display font-bold uppercase tracking-wider text-primary">Current position</div>
              <div className="mt-1 text-muted-foreground">Reno, NV · ETA 14:30 today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
