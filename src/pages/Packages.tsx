import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/button";

const Packages = () => {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? packages : packages.filter((p) => p.destination.toLowerCase() === filter);

  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Explore</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Our Travel Packages</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">Handpicked experiences for the perfect getaway. Choose your destination and start your adventure.</p>
          </motion.div>

          {/* Filter */}
          <div className="flex justify-center gap-3 mb-10">
            {["all", "manali", "goa"].map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                className={filter === f ? "bg-gradient-primary text-primary-foreground" : ""}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {filtered.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
