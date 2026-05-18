import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardList, Package, Map, Truck, CheckCircle2 } from "lucide-react";

const STEPS = [
  { Icon: ClipboardList, title: "Request Quote", desc: "Fill our simple form or call dispatch." },
  { Icon: Package, title: "Cargo Assessment", desc: "We evaluate weight, dimensions, and route." },
  { Icon: Map, title: "Route Planning", desc: "Optimized path for speed and cost." },
  { Icon: Truck, title: "Pickup & Transit", desc: "Real-time tracked, door to door." },
  { Icon: CheckCircle2, title: "Delivery & POD", desc: "Proof of delivery and clean invoice." },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 50%"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-surface py-24 lg:py-28">
      <div className="container-x">
        <div className="mb-16 max-w-2xl">
          <div className="eyebrow mb-4">How It Works</div>
          <h2 className="text-balance text-4xl uppercase lg:text-5xl">
            How we deliver <span className="text-primary">excellence</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Five steps. Zero guesswork. Every IronRoute shipment follows the same disciplined path.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connector line */}
          <div className="absolute left-7 top-0 h-full w-px bg-border md:left-0 md:right-0 md:top-7 md:h-px md:w-full" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-7 top-0 hidden h-full bg-primary md:left-0 md:right-auto md:top-7 md:h-px md:w-full md:block"
          />
          <motion.div
            style={{ height: lineWidth }}
            className="absolute left-7 top-0 block w-px bg-primary md:hidden"
          />

          <ol className="relative grid gap-12 md:grid-cols-5 md:gap-6">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-5 md:block group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center bg-primary text-primary-foreground shadow-[0_0_0_6px_var(--color-surface)]"
                >
                  <s.Icon className="h-6 w-6" strokeWidth={2} />
                </motion.div>
                <div className="md:mt-6">
                  <div className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    Step 0{i + 1}
                  </div>
                  <h3 className="mt-2 text-xl uppercase font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
