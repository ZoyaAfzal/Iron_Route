import { Star } from "lucide-react";

const ITEMS = [
  { q: "IronRoute saved our holiday season. 28 trailers, zero misses, every store on time.", n: "Dana Wexler", t: "VP Supply Chain", c: "Northbridge Retail", tag: "Retail" },
  { q: "They run our inbound like it's their own plant. Dwell time dropped 38% in one quarter.", n: "Marco Greaves", t: "Plant Manager", c: "Halcyon Manufacturing", tag: "Manufacturing" },
  { q: "Cold-chain compliance, chain-of-custody, on-time every load. They just don't drop the ball.", n: "Priya Anand", t: "Director of Logistics", c: "Bayline Health", tag: "Healthcare" },
  { q: "Permits, escorts, oversize, they handled what three other carriers couldn't.", n: "Russ McAllister", t: "Operations", c: "Cascade Steel", tag: "Construction" },
  { q: "The dashboard alone is worth it. We finally see what's moving and where.", n: "Hana Liu", t: "COO", c: "Voltworks Energy", tag: "Energy" },
];

function Card({ t }: { t: (typeof ITEMS)[number] }) {
  return (
    <div className="flex w-[85vw] max-w-[440px] shrink-0 flex-col border border-border bg-surface p-7 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display text-sm font-black text-primary-foreground">
          {t.n.split(" ").map((p) => p[0]).join("")}
        </div>
        <div>
          <div className="font-display text-sm font-bold uppercase tracking-wider text-foreground">{t.n}</div>
          <div className="text-xs text-muted-foreground">{t.t} · {t.c}</div>
        </div>
        <span className="ml-auto hidden rounded-full bg-surface-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground min-[400px]:inline">
          {t.tag}
        </span>
      </div>
      <div className="mt-5 flex gap-0.5 text-primary">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
      </div>
      <p className="mt-4 text-foreground/80 italic">"{t.q}"</p>
    </div>
  );
}

export function Testimonials() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section className="overflow-hidden bg-background py-24 lg:py-28">
      <div className="container-x mb-12 max-w-2xl">
        <div className="eyebrow mb-4">Testimonials</div>
        <h2 className="text-balance text-4xl uppercase lg:text-5xl">
          What our <span className="text-primary">clients say</span>
        </h2>
      </div>
      <div className="marquee-pause overflow-hidden">
        <div className="flex w-max gap-6 animate-marquee-l">
          {doubled.map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}
