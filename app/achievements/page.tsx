import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal, TrendingUp, Users } from "lucide-react";
import achievementsData from "@/data/achievements.json";

// Helper function to get icon component by name
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Trophy':
      return Trophy;
    case 'Award':
      return Award;
    case 'Star':
      return Star;
    case 'Medal':
      return Medal;
    case 'TrendingUp':
      return TrendingUp;
    case 'Users':
      return Users;
    default:
      return null;
  }
};

export default function Achievements() {
  const { hero, achievements, stats } = achievementsData;
  
  // Map achievements to include icon components
  const achievementsWithIcons = achievements.map(yearGroup => ({
    ...yearGroup,
    items: yearGroup.items.map(item => ({
      ...item,
      icon: getIconComponent(item.icon)
    }))
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

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {achievementsWithIcons.map((yearGroup, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="font-display text-3xl font-bold border-b pb-2">{yearGroup.year}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {yearGroup.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      return (
                        <Card key={itemIndex} className="group hover:shadow-lg transition-all">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                {Icon && <Icon className="h-6 w-6 text-primary" />}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-semibold text-lg">{item.title}</h3>
                                  <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notable Alumni */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Notable Alumni</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our graduates are making their mark across the globe
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Dr. Rajesh Kumar", role: "Chief Scientist, ISRO", year: "Class of 1998" },
                { name: "Priya Sharma", role: "CEO, Tech Innovations", year: "Class of 2005" },
                { name: "Amit Patel", role: "Senior VP, Google India", year: "Class of 2008" },
              ].map((alumni, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6 space-y-3">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto"></div>
                    <h3 className="font-semibold text-lg">{alumni.name}</h3>
                    <p className="text-sm text-muted-foreground">{alumni.role}</p>
                    <Badge variant="outline">{alumni.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
