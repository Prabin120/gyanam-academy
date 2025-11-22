import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, MapPin, BookOpen, Home} from "lucide-react";
import aboutData from "@/data/about.json";

// Helper function to get icon component by name
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Users':
      return Users;
    case 'Award':
      return Award;
    case 'Target':
      return Target;
    case 'Eye':
      return Eye;
    default:
      return null;
  }
};

export default function About() {
  const { hero, story, missionVision, values, schoolInfo } = aboutData;
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

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">{story.title}</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                {story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {Object.entries(missionVision).map(([key, item]) => {
                const Icon = getIconComponent(item.icon);
                return (
                  <Card key={key} className="border-2 hover:border-primary transition-all">
                    <CardContent className="pt-8 space-y-4">
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                        {Icon && <Icon className="h-7 w-7 text-primary" />}
                      </div>
                      <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">{values.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.items.map((value, index) => {
                const Icon = getIconComponent(value.icon);
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-all animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="pt-6 space-y-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        {Icon && <Icon className="h-6 w-6 text-primary" />}
                      </div>
                      <h3 className="font-semibold text-lg">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* School Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-center mb-10">School Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg mt-1">
                          <Home className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Location</h3>
                          <p className="text-muted-foreground">
                            {schoolInfo.location.village}, {schoolInfo.location.block}<br />
                            {schoolInfo.location.district}, {schoolInfo.location.state}<br />
                            PIN: {schoolInfo.location.pincode}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg mt-1">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Academics</h3>
                          <p className="text-muted-foreground">
                            Classes: {schoolInfo.classes.from} to {schoolInfo.classes.to}<br />
                            Affiliation: {schoolInfo.affiliation}<br />
                            Type: {schoolInfo.schoolType}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg mt-1">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Quick Facts</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>Established: {schoolInfo.establishmentYear}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>UDISE Code: {schoolInfo.udiseCode}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>Management: {schoolInfo.management}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
