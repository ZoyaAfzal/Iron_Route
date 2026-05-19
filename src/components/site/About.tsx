import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import about from "@/assets/about-warehouse.jpg";

export function About() {
  return (
    <section id="about" className="relative bg-white py-24 lg:py-40 overflow-hidden">
      <div className="container-x relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow mb-6">Our Legacy</div>
            <h2 className="text-balance text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Decades of moving the <br />
              <span className="text-primary">American Economy.</span>
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              From the Rockies to the Gulf, IronRoute is more than just a carrier. We are the 
              invisible engine behind America's hardest-working industries.
            </p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <div className="font-display text-4xl font-bold text-primary">15+</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Years in Motion</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary">200+</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Fleet Capacity</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary">99.2%</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">On-Time Performance</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary">24/7</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Dedicated Dispatch</div>
              </div>
            </div>

            <div className="mt-14">
              <a href="#services" className="btn-industrial btn-primary px-10 py-4">
                Explore Our Capability <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={about} 
                alt="Logistics Excellence" 
                className="h-full w-full object-cover grayscale-[0.2] contrast-[1.1] transition-transform duration-700 hover:scale-105" 
              />
            </div>
            {/* Abstract Decorative Element */}
            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full border-[20px] border-primary/5 -z-10" />
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
