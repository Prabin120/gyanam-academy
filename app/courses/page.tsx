import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, GraduationCap, Award, CheckCircle } from "lucide-react";
import coursesData from "@/data/courses.json";

// Helper function to get icon component by name
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'BookOpen':
      return BookOpen;
    case 'Clock':
      return Clock;
    case 'Users':
      return Users;
    case 'GraduationCap':
      return GraduationCap;
    case 'Award':
      return Award;
    case 'CheckCircle':
      return CheckCircle;
    default:
      return BookOpen;
  }
};

export default function Courses() {
  const { hero, features, curriculum, admissionProcess, scholarships, coCurricularActivities } = coursesData;
  
  // Map features to include icon components
  const featuresWithIcons = features.map(feature => ({
    ...feature,
    icon: getIconComponent(feature.icon)
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

        {/* Curriculum */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {curriculum.map((level, index) => (
                <div key={index} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="space-y-2 mb-8">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-8 w-8 text-primary" />
                      <h2 className="font-display text-3xl font-bold">{level.level}</h2>
                    </div>
                    <p className="text-muted-foreground max-w-3xl">{level.description}</p>
                    
                    {level.keyFeatures && (
                      <div className="pt-2">
                        <h3 className="font-medium mb-2">Key Features:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.keyFeatures.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Subjects or Streams */}
                  {level.streams ? (
                    <div className="space-y-8">
                      {level.streams.map((stream, sIndex) => (
                        <Card key={sIndex} className="border-2 border-primary/20">
                          <CardHeader>
                            <CardTitle className="text-xl">{stream.name} Stream</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div>
                              <h4 className="font-medium mb-2">Core Subjects:</h4>
                              <div className="flex flex-wrap gap-2">
                                {stream.coreSubjects.map((subject, subIndex) => (
                                  <Badge key={subIndex} variant="outline" className="text-sm">
                                    {subject}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-2">Electives (Choose any two):</h4>
                              <div className="flex flex-wrap gap-2">
                                {stream.electives.map((elective, eIndex) => (
                                  <Badge key={eIndex} variant="secondary" className="text-sm">
                                    {elective}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            {stream.careerPaths && (
                              <div>
                                <h4 className="font-medium mb-2">Career Paths:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {stream.careerPaths.map((path, pIndex) => (
                                    <Badge key={pIndex} variant="outline" className="bg-primary/5 text-sm">
                                      {path}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {Array.isArray(level.subjects) ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {level.subjects.map((subject, sIndex) => (
                            <div key={sIndex} className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm">{subject}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {Object.entries(level.subjects).map(([grade, subjects], gIndex) => (
                            <div key={gIndex}>
                              <h4 className="font-medium mb-2">{grade.replace('_', '-').toUpperCase()}:</h4>
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {subjects.map((subject, sIndex) => (
                                  <div key={sIndex} className="flex items-center space-x-2 p-2 bg-muted/20 rounded-md text-sm">
                                    <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                                    <span>{subject}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Co-Curricular Activities */}
        {coCurricularActivities && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="font-display text-3xl font-bold mb-4">Co-Curricular Activities</h2>
                <p className="text-muted-foreground">We believe in holistic development through various activities</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {coCurricularActivities.activities.map((activity, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
                    <div className="h-10 w-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuresWithIcons.map((feature, index) => (
                <div key={index} className="text-center space-y-4 p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-all">
                  <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold mb-4">{admissionProcess.title}</h2>
                <p className="text-muted-foreground">Follow these simple steps to secure your admission</p>
              </div>
              
              <div className="space-y-4">
                {admissionProcess.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-medium text-primary">{index + 1}</span>
                    </div>
                    <p className="text-sm">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Documents Required</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {admissionProcess.documentsRequired.map((doc, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold mb-4">{scholarships.title}</h2>
                <p className="text-muted-foreground">Financial support for deserving students</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {scholarships.programs.map((scholarship, index) => (
                  <Card key={index} className="hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{scholarship.name}</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Eligibility:</span> {scholarship.eligibility}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Benefit:</span> {scholarship.benefit}
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to Enroll?</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Start your journey with us today. Our admissions team is ready to help you.
            </p>
            <Button size="lg" variant="secondary" className="text-lg h-12 px-8">
              Apply Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
