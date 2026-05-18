import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HardHat, ShoppingBag, Stethoscope, Wheat, Factory, Zap, MonitorSmartphone, Car, Plus, ArrowRight,
} from "lucide-react";

const INDUSTRIES = [
  { Icon: HardHat, name: "Construction & Heavy Equipment", desc: "Flatbeds, lowboys, and oversize permits for steel, equipment, and modular builds.", case: "Delivered 400 tons of structural steel across 3 states in 11 days." },
  { Icon: ShoppingBag, name: "Retail & E-Commerce", desc: "Store replenishment, DC bypass, and last-mile orchestration at peak season scale.", case: "Cleared a 28-trailer Black Friday surge with 100% on-time." },
  { Icon: Stethoscope, name: "Healthcare & Pharma", desc: "Temperature-controlled, chain-of-custody freight for hospitals, labs, and Rx distributors.", case: "Moved 14M doses of climate-sensitive product in Q3 alone." },
  { Icon: Wheat, name: "Agriculture & Food", desc: "Reefer fleet, multi-temp trailers, and FSMA-compliant handling from farm to shelf.", case: "Coordinated harvest pulls across 6 Midwest states." },
  { Icon: Factory, name: "Manufacturing", desc: "JIT inbound, dock scheduling, and milk-runs that keep your line running.", case: "Cut a tier-1 supplier's inbound dwell time by 38%." },
  { Icon: Zap, name: "Energy & Oil", desc: "Hazmat-certified equipment and route planning for the most demanding regions.", case: "200+ Permian Basin loads moved last quarter, zero incidents." },
  { Icon: MonitorSmartphone, name: "Technology & Electronics", desc: "High-value, air-ride trailers and bonded warehousing with white-glove handoff.", case: "Launched a new device SKU into 1,800 stores in 9 days." },
  { Icon: Car, name: "Automotive", desc: "OEM and aftermarket: parts, sub-assemblies, and finished-vehicle hauling.", case: "Built a sequenced inbound program for a Tier-1 EV plant." },
];

export function Industries() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="industries" className="bg-white py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-grit opacity-[0.02]" />
      
      <div className="container-x relative z-10">
        <div className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow mb-6">Verticals & Expertise</div>
            <h2 className="text-balance text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Specialized solutions for <br />
              <span className="text-primary">complex industries.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-md lg:ml-auto"
          >
            We don't just move freight; we master the specific regulatory and operational 
            demands of your unique market.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => {
            const isOpen = open === i;
            return (
              <div
                key={ind.name}
                className="flex flex-col"
              >
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`group relative flex flex-col items-start gap-6 p-8 text-left transition-all duration-500 rounded-2xl border ${
                    isOpen 
                      ? 'bg-primary border-primary shadow-xl shadow-primary/20 -translate-y-2' 
                      : 'bg-white border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div className={`h-14 w-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    isOpen ? 'bg-white/20' : 'bg-surface group-hover:bg-primary/10'
                  }`}>
                    <ind.Icon className={`h-7 w-7 transition-colors ${
                      isOpen ? 'text-white' : 'text-primary'
                    }`} strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className={`font-display text-lg font-bold uppercase leading-tight transition-colors ${
                      isOpen ? 'text-white' : 'text-foreground group-hover:text-primary'
                    }`}>
                      {ind.name}
                    </div>
                    <div className={`h-0.5 transition-all duration-500 ${
                      isOpen ? 'w-12 bg-white' : 'w-0 bg-primary group-hover:w-8'
                    }`} />
                  </div>

                  <div className={`mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    isOpen ? 'text-white/80' : 'text-muted-foreground group-hover:text-primary'
                  }`}>
                    <Plus
                      className={`h-4 w-4 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                    />
                    {isOpen ? "Close Blueprint" : "View Strategy"}
                  </div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 px-2 space-y-5">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                        </div>

                        <div className="p-5 rounded-xl bg-surface border border-border/50">
                          <div className="text-[9px] font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                            <div className="h-px w-3 bg-primary" />
                            Highlight
                          </div>
                          <div className="text-sm text-foreground font-semibold leading-snug">{ind.case}</div>
                        </div>

                        <a
                          href="#quote"
                          className="group/btn inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary hover:translate-x-1 transition-transform"
                        >
                          Request Consultation 
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
