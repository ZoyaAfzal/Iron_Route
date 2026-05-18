import { motion } from "framer-motion";
import { Zap, MapPin, Globe2, Headphones, Gauge, Wrench } from "lucide-react";

const FEATURES = [
  { Icon: Zap, label: "Smooth Operations" },
  { Icon: MapPin, label: "Real-Time Tracking" },
  { Icon: Globe2, label: "Nationwide Coverage" },
  { Icon: Headphones, label: "Dedicated Support" },
  { Icon: Gauge, label: "Fast Transit" },
  { Icon: Wrench, label: "Custom Solutions" },
];

export function WhyChoose() {
  return (
    <section className="relative bg-surface py-24 lg:py-28">
      <div className="absolute inset-0 bg-grit opacity-50" />
      <div className="container-x relative">
        <div className="mb-12 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="eyebrow mb-4">Why Choose Us</div>
            <h2 className="max-w-2xl text-balance text-4xl uppercase lg:text-5xl">
              Let's find out why we are the <span className="text-primary">best choice</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Six reasons America's hardest-working brands hand us the keys to their supply chain.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 gap-px bg-border md:grid-cols-3 lg:grid-cols-6"
        >
          {FEATURES.map(({ Icon, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="group flex flex-col items-center gap-4 bg-surface px-4 py-10 text-center transition-colors hover:bg-surface-2"
            >
              <div className="flex h-16 w-16 items-center justify-center border border-border transition-colors group-hover:border-primary">
                <Icon className="h-7 w-7 text-foreground/85 transition-colors group-hover:text-primary" strokeWidth={1.4} />
              </div>
              <div className="font-display text-sm font-bold uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
