import { Link } from "react-router-dom";
import { Clock, MapPin, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PackageCardProps {
  image: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  description: string;
  slug: string;
  popular?: boolean;
  seatsLeft?: number;
}

const PackageCard = ({ image, title, destination, duration, price, description, slug, popular, seatsLeft }: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-xl overflow-hidden shadow-premium hover:shadow-card-hover transition-all duration-500 border border-border/50"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {popular && <Badge className="bg-gradient-sunset text-accent-foreground border-0">Popular</Badge>}
          {seatsLeft && seatsLeft <= 5 && (
            <Badge variant="destructive" className="animate-pulse">Only {seatsLeft} Seats Left!</Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3">
          <div className="bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1">
            <IndianRupee className="w-4 h-4 text-primary" />
            <span className="font-bold text-foreground">{price}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{destination}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{duration}</span>
        </div>
        <h3 className="font-display font-bold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Link to={`/packages/${slug}`}>
          <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PackageCard;
