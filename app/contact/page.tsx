import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, LucideIcon } from 'lucide-react';
import contactData from "@/data/contact.json";

interface ContactInfo {
  title: string;
  content: string;
  subtext?: string;
  icon: string;
  IconComponent?: LucideIcon;
}

// Helper function to get icon component by name
const getIconComponent = (iconName: string): LucideIcon | null => {
  try {
    const icons = require('lucide-react') as Record<string, LucideIcon>;
    return icons[iconName] || null;
  } catch (error) {
    console.error(`Icon ${iconName} not found`);
    return null;
  }
};

export default function Contact() {
  const { hero, form, contactInfo, faq } = contactData;

  // Map contact info to include icon components
  const contactInfoWithIcons = contactInfo.map(info => ({
    ...info,
    IconComponent: getIconComponent(info.icon)
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <h1 className="font-display text-4xl md:text-6xl font-bold">{hero.title}</h1>
              <p className="text-xl text-muted-foreground">
                {hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="font-display text-2xl font-bold mb-6">{form.title}</h2>
                  <form className="space-y-2">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{form.fields.firstName}</Label>
                        <Input id="firstName" placeholder={form.placeholders.firstName} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{form.fields.lastName}</Label>
                        <Input id="lastName" placeholder={form.placeholders.lastName} required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{form.fields.email}</Label>
                      <Input id="email" type="email" placeholder={form.placeholders.email} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{form.fields.phone}</Label>
                      <Input id="phone" type="tel" placeholder={form.placeholders.phone} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{form.fields.subject}</Label>
                      <Input id="subject" placeholder={form.placeholders.subject} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{form.fields.message}</Label>
                      <Textarea
                        id="message"
                        placeholder={form.placeholders.message}
                        className="min-h-[90px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      {form.submitButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-bold">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    {hero.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfoWithIcons.map((info, index) => (
                    <Card key={index} className="hover:shadow-md transition-all animate-in fade-in slide-in-from-right-4" style={{ animationDelay: `${index * 100}ms` }}>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            {info.IconComponent && <info.IconComponent className="h-5 w-5 text-primary" />}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {info.content}
                              {info.subtext && <span className="block text-xs mt-1">{info.subtext}</span>}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            {/* Map Link Card */}
            <div className="max-w-6xl mx-auto mt-4">
              <Card className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <a
                    href="https://www.google.com/maps?q=26.834968056242143,93.29706413922847"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative h-[200px] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center space-y-2 group-hover:scale-105 transition-transform">
                        <MapPin className="h-12 w-12 mx-auto text-primary" />
                        <p className="text-sm text-muted-foreground">View on Google Maps</p>
                        <p className="text-xs text-muted-foreground/70">26.834968, 93.297064</p>
                      </div>
                    </div>
                  </a>
                  <div className="p-4 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      Click to open in your preferred map application
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold">{faq.title}</h2>
              <p className="text-lg text-muted-foreground">
                {faq.description}
              </p>
              <Button size="lg" variant="outline">
                {faq.buttonText}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
