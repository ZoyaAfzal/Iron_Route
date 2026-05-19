import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X, Truck, Linkedin, Twitter, Facebook } from "lucide-react";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Quote", href: "#quote" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-background text-xs"
          >
            <div className="container-x flex h-9 items-center justify-between text-muted-foreground" id="top">
              <a href="tel:+18881234567" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-3 w-3 text-primary" />
                <span className="hidden sm:inline">Talk to an Expert:</span>
                <span className="font-semibold text-primary">(888) 123-4567</span>
              </a>
              <div className="hidden items-center gap-5 md:flex">
                <a href="mailto:dispatch@ironroute.co" className="flex items-center gap-2 hover:text-foreground">
                  <Mail className="h-3 w-3" /> dispatch@ironroute.co
                </a>
                <div className="flex items-center gap-3">
                  <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-3.5 w-3.5" /></a>
                  <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-3.5 w-3.5" /></a>
                  <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-3.5 w-3.5" /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <motion.div
        layout
        className={`border-b border-border transition-colors ${
          scrolled ? "bg-background/85 backdrop-blur-md" : "bg-surface"
        }`}
      >
        <div className="container-x flex h-[70px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center bg-primary">
              <Truck className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              IRON<span className="text-primary">ROUTE</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="group relative font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/85 transition hover:text-foreground"
              >
                {n.label}
                <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#quote" className="btn-industrial btn-primary hidden md:inline-flex">
              Get a Quote
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center border border-border lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 z-50 h-screen w-80 max-w-[85vw] bg-surface p-8 pt-24 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.label}
                  href={n.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 font-display text-xl font-bold uppercase tracking-wider"
                >
                  {n.label}
                </motion.a>
              ))}
              <a href="#quote" className="btn-industrial btn-primary mt-6 w-full" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
