import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import road from "@/assets/svc-road.jpg";
import air from "@/assets/svc-air.jpg";
import ocean from "@/assets/svc-ocean.jpg";
import warehouse from "@/assets/svc-warehouse.jpg";
import supply from "@/assets/svc-supply.jpg";
import customs from "@/assets/svc-customs.jpg";

type Sub = { name: string; desc: string };
type Svc = {
  id: string;
  title: string;
  img: string;
  blurb: string;
  benefits: string[];
  subs: Sub[];
};

const SERVICES: Svc[] = [
  {
    id: "road",
    title: "Road Freight",
    img: road,
    blurb: "Coast-to-coast trucking with full visibility and zero surprises — every mile, every haul.",
    benefits: ["48-state coverage", "Driver-owned accountability", "Live GPS on every trailer", "Guaranteed transit windows"],
    subs: [
      { name: "Full Truckload (FTL)", desc: "Dedicated trailer, single shipment, fastest transit." },
      { name: "Less-Than-Truckload", desc: "Cost-share routes for mid-sized freight." },
      { name: "Expedited", desc: "Team drivers for time-critical loads." },
    ],
  },
  {
    id: "air",
    title: "Air Freight",
    img: air,
    blurb: "When tomorrow is too late. Charter and commercial air with white-glove handoff.",
    benefits: ["Next-flight-out service", "Charter aircraft on demand", "Bonded warehousing", "Door-to-door tracking"],
    subs: [
      { name: "Express Air", desc: "Overnight and same-day domestic." },
      { name: "Charter", desc: "Dedicated aircraft for oversized cargo." },
      { name: "Commercial Cargo", desc: "Scheduled lift on major carriers." },
    ],
  },
  {
    id: "ocean",
    title: "Ocean Freight",
    img: ocean,
    blurb: "Global container moves with port-side muscle on both ends of the ocean.",
    benefits: ["FCL & LCL consolidation", "Port-to-door delivery", "Customs clearance built-in", "Reefer & special equipment"],
    subs: [
      { name: "FCL", desc: "Full container loads with dedicated equipment." },
      { name: "LCL", desc: "Consolidated shared-container shipping." },
      { name: "RORO", desc: "Roll-on/roll-off for vehicles and machinery." },
    ],
  },
  {
    id: "warehouse",
    title: "Warehousing",
    img: warehouse,
    blurb: "Climate-controlled facilities at 12 strategic hubs across the country.",
    benefits: ["2M+ sq ft of capacity", "Cross-dock & flow-through", "Pick, pack & ship", "24/7 WMS visibility"],
    subs: [
      { name: "Storage", desc: "Short and long-term pallet positions." },
      { name: "Cross-Docking", desc: "Receive, sort, ship within 24 hours." },
      { name: "Fulfillment", desc: "Order-level pick & pack for e-commerce." },
    ],
  },
  {
    id: "supply",
    title: "Supply Chain",
    img: supply,
    blurb: "End-to-end orchestration so your freight, data, and people move as one.",
    benefits: ["Single point of contact", "Custom workflow design", "Carrier procurement", "KPI dashboards"],
    subs: [
      { name: "Procurement", desc: "Rate negotiation across modes." },
      { name: "Network Design", desc: "Lane modeling and optimization." },
      { name: "Analytics", desc: "Real-time spend and performance data." },
    ],
  },
  {
    id: "customs",
    title: "Customs Brokerage",
    img: customs,
    blurb: "Licensed brokers clearing your cargo before it hits the dock.",
    benefits: ["Licensed in all US ports", "Duty optimization", "ACE / ISF filing", "Compliance audits"],
    subs: [
      { name: "Import Clearance", desc: "HTS classification and entry filing." },
      { name: "Export Docs", desc: "EEI, AES, and trade compliance." },
      { name: "Duty Drawback", desc: "Recover duties on re-exported goods." },
    ],
  },
];

export function Services() {
  const [selected, setSelected] = useState<Svc | null>(null);

  return (
    <section id="services" className="relative bg-surface py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grit opacity-[0.03]" />
      
      <div className="container-x relative z-10">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Capabilities</div>
            <h2 className="text-balance text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Comprehensive freight solutions <br />
              <span className="text-primary">engineered for speed.</span>
            </h2>
          </div>
          <p className="max-w-sm text-lg text-muted-foreground font-medium leading-relaxed">
            Scalable logistics infrastructure across air, land, and sea, delivered with 
            unrivaled precision.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.id}
              svc={s}
              index={i}
              onClick={() => setSelected(s)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent">
          {selected && <ServicePanel svc={selected} onClose={() => setSelected(null)} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ServiceCard({ svc, index, onClick }: { svc: Svc; index: number; onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative isolate aspect-[4/5] overflow-hidden bg-white text-left rounded-2xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500"
    >
      <motion.img
        src={svc.img}
        alt={svc.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-primary/60 transition-all group-hover:w-12" />
          <div className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Service 0{index + 1}
          </div>
        </div>
        <h3 className="mt-4 text-2xl lg:text-3xl uppercase font-bold text-white leading-none">{svc.title}</h3>
        <p className="mt-4 max-w-[280px] text-sm text-white/80 line-clamp-2 leading-relaxed opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {svc.blurb}
        </p>
        
        <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity delay-100">View Blueprint</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all group-hover:bg-primary group-hover:border-primary">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function ServicePanel({ svc, onClose }: { svc: Svc; onClose: () => void }) {
  return (
    <div className="relative bg-white p-8 lg:p-12 rounded-2xl shadow-2xl">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-surface transition-colors hover:bg-primary hover:text-white"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4">Service Detail</div>
          <DialogHeader className="text-left">
            <DialogTitle className="text-4xl uppercase font-bold text-foreground">
              {svc.title}
            </DialogTitle>
          </DialogHeader>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{svc.blurb}</p>
          <ul className="mt-8 space-y-4">
            {svc.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" strokeWidth={4} />
                </div>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
          <a href="#quote" onClick={onClose} className="btn-industrial btn-primary mt-10 w-full lg:w-auto">
            Get a Quote for {svc.title}
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="mb-6 font-display text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
            Capabilities & Sub-Services
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {svc.subs.map((sub, i) => (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="font-display text-sm font-bold uppercase text-primary">0{i + 1}</div>
                <div className="mt-2 font-display text-lg font-bold uppercase text-foreground">{sub.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{sub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
