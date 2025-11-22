import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import footerData from "@/data/footer.json";
import Link from "next/link";

// Import Lucide icons dynamically
const iconComponents: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin
};

// Social Icon Component
function SocialIcon({ 
  href, 
  icon: Icon, 
  label,
  className 
}: { 
  href: string; 
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  className?: string;
}) {
  return (
    <a 
      href={href} 
      className={cn(
        "h-9 w-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground",
        "flex items-center justify-center transition-colors",
        className
      )}
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

export function Footer() {
  // Get the current year for copyright
  const currentYear = new Date().getFullYear();
  const { brand, quickLinks, contactInfo, socialMedia, copyright } = footerData;

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={brand.logo} 
                alt={`${brand.name} Logo`}
                className={`${brand.logoHeight || 'h-16'} w-auto object-contain`}
              />
              <span className="font-display text-lg font-bold">{brand.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{contactInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{contactInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              {socialMedia.map((social, index) => {
                const IconComponent = iconComponents[social.icon];
                return (
                  <SocialIcon 
                    key={index}
                    href={social.url}
                    icon={IconComponent}
                    label={social.platform}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {copyright}</p>
        </div>
      </div>
    </footer>
  );
}
