import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { n: 50000, suffix: "+", label: "Shipments Delivered" },
  { n: 99.2, suffix: "%", label: "On-Time Rate", decimals: 1 },
  { n: 200, suffix: "+", label: "Fleet Vehicles" },
  { n: 15, suffix: "+", label: "Years in Business" },
];

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-24">
      <div className="absolute inset-0 bg-grit opacity-60" />
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 65%)" }}
      />
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="bg-background px-6 py-10 text-center"
            >
              <div className="font-display text-5xl font-black text-foreground lg:text-6xl">
                <Counter to={s.n} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
