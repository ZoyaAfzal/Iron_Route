const ROW1 = ["FedEx Partner", "Amazon Logistics", "DHL Alliance", "UPS Network", "Maersk Certified", "C.H. Robinson", "XPO Logistics"];
const ROW2 = ["🏆 FMCSA Licensed", "✅ ISO 9001:2015", "🌎 DOT Certified", "⭐ 4.9 / 5 Rating", "🔒 Fully Insured", "📦 Real-Time GPS"];

function Row({ items, dir }: { items: string[]; dir: "l" | "r" }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-pause overflow-hidden border-y border-border bg-background py-5">
      <div className={`flex w-max gap-12 ${dir === "l" ? "animate-marquee-l" : "animate-marquee-r"}`}>
        {doubled.map((it, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12">
            <span className="font-display text-lg font-bold uppercase tracking-wider text-foreground/85">
              {it}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  return (
    <section className="bg-background">
      <Row items={ROW1} dir="l" />
      <Row items={ROW2} dir="r" />
    </section>
  );
}
