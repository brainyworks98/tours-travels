import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, IndianRupee, Clock, MapPin, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import InquiryForm from "@/components/InquiryForm";
import { packages } from "@/data/packages";
import manaliGallery from "@/assets/manali-gallery-1.jpg";
import goaGallery from "@/assets/goa-gallery-1.jpg";

const galleryImages: Record<string, string[]> = {
  manali: [manaliGallery],
  goa: [goaGallery],
};

const PackageDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) return <Navigate to="/packages" replace />;

  const gallery = galleryImages[pkg.slug] || [];
  const whatsappMsg = encodeURIComponent(`Hi! I'm interested in the "${pkg.title}" package. Please share more details.`);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img src={pkg.image} alt={pkg.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative z-10 h-full flex items-end pb-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex gap-2 mb-3">
              {pkg.popular && <Badge className="bg-gradient-sunset text-accent-foreground border-0">Popular</Badge>}
              {pkg.seatsLeft && pkg.seatsLeft <= 5 && (
                <Badge variant="destructive" className="animate-pulse">Only {pkg.seatsLeft} Seats Left!</Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-3" style={{ color: 'white' }}>{pkg.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{pkg.destination}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{pkg.duration}</span>
              <span className="flex items-center gap-1"><IndianRupee className="w-4 h-4" />Starting ₹{pkg.price}/person</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Includes */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">What's Included</h2>
                <div className="grid grid-cols-2 gap-3">
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-card rounded-xl p-5 border border-border/50 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                          <span className="text-primary-foreground font-bold text-sm">Day {day.day}</span>
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground mb-1">{day.title}</h3>
                          <p className="text-sm text-muted-foreground">{day.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {gallery.length > 0 && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {gallery.map((img, i) => (
                      <img key={i} src={img} alt={`${pkg.destination} gallery ${i + 1}`} className="rounded-xl w-full aspect-[4/3] object-cover" loading="lazy" />
                    ))}
                    <img src={pkg.image} alt={pkg.destination} className="rounded-xl w-full aspect-[4/3] object-cover" loading="lazy" />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-premium sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                  <div className="flex items-center justify-center gap-1">
                    <IndianRupee className="w-6 h-6 text-primary" />
                    <span className="text-4xl font-display font-bold text-foreground">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>

                <h3 className="font-display font-bold text-foreground mb-4 text-center">Book Now</h3>
                <InquiryForm defaultDestination={pkg.slug} compact />

                <div className="mt-4">
                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-[hsl(142,70%,45%)] text-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,45%)]/10">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Inquiry
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PackageDetails;
