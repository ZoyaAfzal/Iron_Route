import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-x relative z-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow mb-6">Connect With Us</div>
            <h2 className="text-balance text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Ready to streamline your <br />
              <span className="text-primary">supply chain?</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md">
              Whether you're moving a single load or looking for an end-to-end logistics partner, 
              our team is standing by 24/7.
            </p>

            <div className="mt-12 space-y-8">
              <ContactMethod 
                Icon={Phone} 
                title="Call 24/7 Support" 
                value="(888) 123-4567" 
                href="tel:+18881234567"
              />
              <ContactMethod 
                Icon={Mail} 
                title="Email Dispatch" 
                value="dispatch@ironroute.co" 
                href="mailto:dispatch@ironroute.co"
              />
              <ContactMethod 
                Icon={MapPin} 
                title="Global Headquarters" 
                value="1850 Freight Way, Dallas TX 75201" 
                href="#"
              />
              <ContactMethod 
                Icon={Clock} 
                title="Operation Hours" 
                value="Always Open - 365 Days / Year" 
                href="#"
              />
            </div>
          </motion.div>

          {/* Quick Chat / Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-surface border border-border rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase">Quick Inquiry</h3>
                  <p className="text-sm text-muted-foreground">Expert response in <span className="text-primary font-bold">15 minutes</span></p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-white border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                  <select className="w-full bg-white border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors">
                    <option>General Inquiry</option>
                    <option>Urgent Dispatch</option>
                    <option>Billing Support</option>
                    <option>Carrier Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea rows={4} placeholder="How can we help you move ahead?" className="w-full bg-white border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <button className="btn-industrial btn-primary w-full py-4 rounded-xl shadow-lg shadow-primary/20">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Decorative background blur */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ Icon, title, value, href }: { Icon: any, title: string, value: string, href: string }) {
  return (
    <a href={href} className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-surface transition-colors">
      <div className="h-14 w-14 shrink-0 rounded-2xl border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{title}</div>
        <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{value}</div>
      </div>
    </a>
  );
}
