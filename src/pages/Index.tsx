import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Headphones, BadgeIndianRupee, Settings, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PackageCard from "@/components/PackageCard";
import InquiryForm from "@/components/InquiryForm";
import { packages } from "@/data/packages";
import manaliHero from "@/assets/manali-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const whyChooseUs = [
  { icon: Headphones, title: "24x7 Support", desc: "Round-the-clock assistance for all your travel needs." },
  { icon: Shield, title: "Trusted Hotels", desc: "Handpicked, verified hotels for a comfortable stay." },
  { icon: BadgeIndianRupee, title: "Best Price Guarantee", desc: "No hidden charges. Best value for your money." },
  { icon: Settings, title: "Custom Packages", desc: "Tailor-made itineraries to suit your preferences." },
];

const testimonials = [
  { name: "Priya Sharma", location: "Delhi", rating: 5, text: "Amazing Manali trip! Everything was perfectly organized. Hotel was great and the sightseeing was beyond expectations. Highly recommend SafarSetGo!" },
  { name: "Rahul Verma", location: "Mumbai", rating: 5, text: "Our Goa trip was absolutely fabulous! From pickup to drop, everything was seamless. The beach resort was stunning. Will book again!" },
  { name: "Ananya Patel", location: "Bangalore", rating: 5, text: "Best travel agency I've used. Transparent pricing, friendly guides, and an unforgettable experience. My family loved every moment." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <img src={manaliHero} alt="Stunning Himalayan mountains" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6" style={{ color: 'white' }}>
              Explore Manali & Goa{" "}
              <span className="text-gradient-sunset">Like Never Before</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Affordable curated travel packages with premium stays. Create memories that last a lifetime.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/packages">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 text-base px-8 h-12">
                  View Packages <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 text-base px-8 h-12" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', background: 'rgba(255,255,255,0.1)' }}>
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-gradient-section">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Our Packages</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Featured Travel Packages</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Why Us</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Why Choose SafarSetGo?</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 text-center border border-border/50 shadow-sm hover:shadow-premium transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-section">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">What Our Travelers Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-xl p-6 border border-border/50 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20" id="inquiry">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10">
              <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Inquiry</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Plan Your Dream Trip</h2>
              <p className="text-muted-foreground">Fill in your details and we'll get back to you within 24 hours.</p>
            </motion.div>
            <motion.div {...fadeUp} className="bg-card rounded-2xl p-6 md:p-8 shadow-premium border border-border/50">
              <InquiryForm />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
