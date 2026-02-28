import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold">SafarSetGo</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted travel partner for unforgettable journeys to Manali & Goa. Curated packages, premium stays, honest pricing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/packages" className="hover:opacity-100 transition-opacity">Packages</Link>
              <Link to="/packages/manali" className="hover:opacity-100 transition-opacity">Manali Packages</Link>
              <Link to="/packages/goa" className="hover:opacity-100 transition-opacity">Goa Packages</Link>
              <Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>hello@safarsetgo.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Connaught Place, New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm opacity-60">
          © 2026 SafarSetGo. All rights reserved. Made with ❤️ for travelers.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
