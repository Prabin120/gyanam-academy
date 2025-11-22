import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComponentType, SVGProps } from "react";

// Define the type for stat items
type StatItem = {
  value: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
import { BackgroundCarousel } from "@/components/BackgroundCarousel";

// Import the home data
import homeData from '@/data/home.json';
import Link from "next/link";

// Helper function to get icon component by name
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Users':
      return Users;
    case 'BookOpen':
      return BookOpen;
    case 'Award':
      return Award;
    case 'Building2':
      return Building2;
    case 'CheckCircle2':
      return CheckCircle2;
    case 'ArrowRight':
      return ArrowRight;
    default:
      return null;
  }
};

export default function Home() {
  // Map the stats data to include icon components
  const stats = homeData.stats.map(stat => ({
    ...stat,
    icon: getIconComponent(stat.icon) as ComponentType<SVGProps<SVGSVGElement>>
  })) as StatItem[];

  // Map the features data to include icon components
  const features = homeData.features.items.map(feature => ({
    ...feature,
    icon: getIconComponent(feature.icon)
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Background Carousel */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <BackgroundCarousel images={homeData.hero.carouselImages} />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        
        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white">
              {homeData.hero.title}{" "}
              <span className="text-primary md:text-8xl block mt-2">{homeData.hero.highlightedTitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-white">
              {homeData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {homeData.hero.ctaButtons.map((button, index) => (
                <Button 
                  key={index}
                  size="lg" 
                  className="text-base md:text-lg h-12 px-6 md:px-8" 
                  variant={button.variant as any}
                  asChild
                >
                  <Link href={button.url}>
                    {button.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-primary-foreground/10 p-4 md:p-6 rounded-lg backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <div className="text-center space-y-2 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-primary-foreground/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm md:text-base text-primary-foreground/90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{homeData.features.title}</h2>
            <p className="text-muted-foreground">{homeData.features.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-md transition-shadow border border-border/50">
                <CardContent className="p-6 flex flex-col items-start text-left">
                  <div className="bg-primary/10 p-2 rounded-md mb-4">
                    {feature.icon && <feature.icon className="h-5 w-5 text-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-accent">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold">{homeData.cta.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {homeData.cta.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Accredited Programs</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Scholarship Available</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Industry Partnerships</span>
                </div>
              </div>
              <Button size="lg" className="mt-4" asChild>
                <Link href={homeData.cta.buttonUrl}>{homeData.cta.buttonText}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
