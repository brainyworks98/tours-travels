import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stats = [
  { value: "5,000+", label: "Happy Travelers" },
  { value: "200+", label: "Trips Completed" },
  { value: "50+", label: "Hotel Partners" },
  { value: "4.8★", label: "Average Rating" },
];

const About = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">About Us</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Our Story</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              SafarSetGo was born from a passion for travel and a dream to make premium experiences accessible to everyone.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="prose prose-lg max-w-none text-muted-foreground mb-16 space-y-4 text-center">
            <p>Founded in 2020, SafarSetGo started with a simple mission: curate the best travel experiences in India at honest prices. What began as a small team organizing trips for friends and family quickly grew into a trusted travel brand serving thousands of happy travelers.</p>
            <p>We specialize in Manali and Goa — two of India's most beloved destinations. Our deep local knowledge, trusted hotel partnerships, and attention to detail set us apart from the rest.</p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div {...fadeUp} className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">To make travel effortless, affordable, and unforgettable for every Indian traveler — one curated trip at a time.</p>
            </motion.div>
            <motion.div {...fadeUp} className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-gradient-sunset flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground">To be India's most trusted and loved travel company, expanding to 20+ destinations while keeping our boutique, personal approach.</p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((s, i) => (
              <div key={i} className="text-center bg-card rounded-xl p-6 border border-border/50">
                <p className="text-3xl font-display font-bold text-gradient-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Trust */}
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 bg-card rounded-xl p-6 border border-border/50">
              <Award className="w-10 h-10 text-primary shrink-0" />
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">Verified & Trusted</h4>
                <p className="text-sm text-muted-foreground">All our hotels and transport partners are personally vetted for quality and safety.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-card rounded-xl p-6 border border-border/50">
              <Users className="w-10 h-10 text-primary shrink-0" />
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">Experienced Team</h4>
                <p className="text-sm text-muted-foreground">Our team has 10+ years of combined experience in the travel industry across India.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
