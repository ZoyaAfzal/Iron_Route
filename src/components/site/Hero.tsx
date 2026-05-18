import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Truck, Clock, Globe2 } from "lucide-react";
import heroImg from "@/assets/hero-trucks.jpg";

const headline = ["TRANSPORTATION", "&", "LOGISTICS", "SOLUTIONS"];

export function Hero() {
  return (
    <section className="relative h-screen min-h-[760px] w-full overflow-hidden bg-background">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fleet of freight trucks at sunset"
          width={1920}
          height={1080}
          className="h-full w-full origin-center object-cover animate-slow-rotate"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-grit opacity-20" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex h-full flex-col justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow !text-white !before:bg-white"
        >
          Welcome to IronRoute
        </motion.div>

        <h1
          className="mt-8 text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase tracking-tight text-white leading-[1.05]"
          style={{ perspective: 1000 }}
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-4 inline-block"
            >
              {word === "&" ? <span className="text-primary font-serif">&</span> : word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 max-w-2xl text-xl lg:text-2xl text-white/90 font-medium leading-relaxed"
        >
          Delivering freight across 48 states with surgical precision. 
          One fleet. Every load. Total accountability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-6"
        >
          <a href="#services" className="btn-industrial btn-primary px-10 py-4 shadow-xl shadow-primary/20">
            Explore Services <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#quote" className="btn-industrial btn-ghost px-10 py-4 backdrop-blur-sm bg-white/10 !text-white !border-white/30 hover:!border-white">
            Request a Quote
          </a>
        </motion.div>

        {/* Floating stat badges */}
        <div className="mt-20 flex flex-wrap gap-6">
          {[
            { Icon: Truck, label: "50,000+ Shipments" },
            { Icon: Clock, label: "99.2% On-Time" },
            { Icon: Globe2, label: "48 States Covered" },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
              className="flex items-center gap-4 border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-md rounded-full"
            >
              <b.Icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold tracking-tight text-white">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <ChevronDown className="h-7 w-7 animate-bouncey text-foreground/70" />
      </div>
    </section>
  );
}
