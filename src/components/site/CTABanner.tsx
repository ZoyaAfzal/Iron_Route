import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import cta from "@/assets/cta-highway.jpg";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.1 }}
          transition={{ duration: 10, ease: "linear" }}
          src={cta}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-background/80" />
      <div
        className="absolute left-0 top-0 h-40 w-72 bg-primary"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div className="container-x relative grid items-center gap-10 py-24 lg:grid-cols-2 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow mb-4">Ready When You Are</div>
          <h2 className="text-balance text-5xl uppercase lg:text-6xl">
            Ready to move <span className="text-primary">your freight?</span>
          </h2>
          <p className="mt-5 max-w-md text-foreground/80">
            Join 500+ businesses that trust IronRoute to keep their supply chains moving.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap gap-4 lg:justify-end"
        >
          <a href="#quote" className="btn-industrial btn-primary">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+18881234567" className="btn-industrial btn-ghost">
            <Phone className="h-4 w-4" /> Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
