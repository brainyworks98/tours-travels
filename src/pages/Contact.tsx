import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import InquiryForm from "@/components/InquiryForm";

const Contact = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Contact</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">Have questions or ready to book? Reach out and our team will respond within 24 hours.</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Phone, title: "Phone", detail: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, title: "Email", detail: "hello@safarsetgo.com", href: "mailto:hello@safarsetgo.com" },
                { icon: MapPin, title: "Office", detail: "Connaught Place, New Delhi, India" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 bg-card rounded-xl p-5 border border-border/50 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.detail}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[hsl(142,70%,45%)] text-primary-foreground rounded-xl p-4 font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-border/50 aspect-[4/3] bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-10 h-10 mx-auto mb-2 opacity-40" />
                  <p className="text-sm">Google Maps Integration</p>
                  <p className="text-xs opacity-60">Connaught Place, New Delhi</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-premium"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-6">Send Us a Message</h2>
                <InquiryForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
