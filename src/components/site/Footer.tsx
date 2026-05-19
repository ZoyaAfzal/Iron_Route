import { Truck, Linkedin, Twitter, Facebook, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const COLS = [
  { title: "Services", links: ["Road Freight", "Air Freight", "Ocean Freight", "Warehousing", "Supply Chain", "Customs"] },
  { title: "Company", links: ["About", "Fleet", "Careers", "Sustainability", "Newsroom"] },
  { title: "Resources", links: ["Tracking", "Driver Portal", "Carrier Setup", "Insurance", "FAQ"] },
];

export function Footer() {
  return (
    <footer className="relative bg-background pt-20">
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.63 0.21 32), transparent)" }}
      />
      <div className="container-x grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="md:col-span-2 lg:col-span-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center bg-primary">
              <Truck className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl font-black">
              IRON<span className="text-primary">ROUTE</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Heavy loads. Flawless delivery. One accountable fleet from pickup to proof of delivery.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Facebook].map((I, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((c) => (
          <div key={c.title} className="lg:col-span-2">
            <div className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">{c.title}</div>
            <ul className="mt-5 space-y-3 text-sm">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="text-muted-foreground transition hover:text-primary">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2 lg:col-span-2">
          <div className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">Contact</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 1850 Freight Way, Dallas TX 75201</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> (888) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /> dispatch@ironroute.co</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-primary" /> 24 / 7 / 365</li>
          </ul>
        </div>
      </div>

      <div className="container-x border-t border-border pb-10">
        <div className="grid items-center gap-6 pt-8 md:grid-cols-2">
          <div>
            <div className="font-display text-base font-bold uppercase">Stay updated on freight news</div>
            <p className="mt-1 text-xs text-muted-foreground">Monthly digest. No spam.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              className="h-12 flex-1 border border-border bg-surface px-4 text-sm outline-none focus:border-primary w-full"
            />
            <button className="btn-industrial btn-primary h-12 w-full sm:w-auto">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-center py-8 text-xs text-muted-foreground sm:flex-row sm:justify-end">
          <a 
            href="https://axistechgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold tracking-[0.2em] uppercase transition-all hover:text-primary group"
          >
            Powered by <span className="text-primary group-hover:underline">AxisTechGroup</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
