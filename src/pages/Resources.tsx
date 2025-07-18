import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, Star, Users, DollarSign } from "lucide-react";

const Resources = () => {
  // Mock data de incubadoras y aceleradoras
  const resources = [
    {
      id: 1,
      name: "Wayra (Telefónica)",
      type: "Aceleradora",
      location: "Madrid, España",
      description: "Aceleradora corporativa de Telefónica enfocada en startups de tecnología emergente y transformación digital.",
      focus: ["Tecnología", "Transformación Digital", "5G", "IoT"],
      stage: "Seed & Early Stage",
      investment: "€100K - €500K",
      duration: "4 meses",
      website: "https://wayra.com",
      rating: 4.6,
      startups: "100+ startups aceleradas",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Lanzadera",
      type: "Aceleradora",
      location: "Valencia, España",
      description: "Aceleradora de Juan Roig que impulsa startups con potencial de crecimiento y escalabilidad internacional.",
      focus: ["E-commerce", "Retail Tech", "Consumer", "B2B"],
      stage: "Seed Stage",
      investment: "€50K - €300K",
      duration: "12 meses",
      website: "https://lanzadera.es",
      rating: 4.7,
      startups: "200+ startups",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Seedrocket",
      type: "Aceleradora",
      location: "Barcelona, España",
      description: "Primera aceleradora de startups en España, especializada en proyectos tecnológicos early-stage.",
      focus: ["Tech", "SaaS", "Mobile", "E-commerce"],
      stage: "Pre-seed & Seed",
      investment: "€25K - €150K",
      duration: "3 meses",
      website: "https://seedrocket.com",
      rating: 4.5,
      startups: "150+ startups",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "ESADE BAN",
      type: "Red de Inversores",
      location: "Barcelona, España",
      description: "Red de business angels de ESADE que conecta emprendedores con inversores experimentados.",
      focus: ["Todos los sectores", "Tecnología", "Impacto Social"],
      stage: "Seed & Series A",
      investment: "€50K - €1M",
      duration: "Inversión directa",
      website: "https://esadeban.com",
      rating: 4.4,
      startups: "300+ inversiones",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Ship2B Ventures",
      type: "Fondo de Impacto",
      location: "Barcelona, España",
      description: "Fondo de venture capital enfocado en startups de impacto social y ambiental.",
      focus: ["Impact", "Sostenibilidad", "Social Tech", "CleanTech"],
      stage: "Seed & Series A",
      investment: "€200K - €2M",
      duration: "Investment + Mentoring",
      website: "https://ship2b.com",
      rating: 4.8,
      startups: "50+ startups de impacto",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Google for Startups",
      type: "Programa",
      location: "Madrid, España",
      description: "Programa de Google que ofrece recursos, mentoring y tecnología a startups en crecimiento.",
      focus: ["Tecnología", "AI/ML", "Cloud", "Mobile"],
      stage: "Early Stage",
      investment: "Recursos y créditos",
      duration: "6 meses",
      website: "https://startup.google.com",
      rating: 4.3,
      startups: "Global program",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      name: "Demium Startups",
      type: "Startup Studio",
      location: "Valencia, España",
      description: "Startup studio que co-funda y acelera startups tecnológicas desde cero hasta Series A.",
      focus: ["SaaS", "Marketplace", "Fintech", "PropTech"],
      stage: "Co-founding",
      investment: "Co-equity model",
      duration: "18 meses",
      website: "https://demium.com",
      rating: 4.5,
      startups: "80+ startups",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      name: "Impact Hub",
      type: "Incubadora",
      location: "Madrid, Barcelona",
      description: "Red global de incubadoras enfocadas en emprendimiento de impacto social y ambiental.",
      focus: ["Impacto Social", "Sostenibilidad", "Economía Circular"],
      stage: "Ideación & Early Stage",
      investment: "Programas y recursos",
      duration: "Variable",
      website: "https://impacthub.net",
      rating: 4.2,
      startups: "Red global",
      image: "/placeholder.svg"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Aceleradora": return "default";
      case "Incubadora": return "secondary";
      case "Fondo de Impacto": return "destructive";
      case "Red de Inversores": return "outline";
      case "Programa": return "secondary";
      case "Startup Studio": return "default";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Recursos y Financiación
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuentra la incubadora, aceleradora o fondo perfecto para impulsar tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-xl mb-2">{resource.name}</CardTitle>
                      <Badge variant={getTypeColor(resource.type)}>
                        {resource.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-accent" />
                      <span className="text-sm font-medium">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {resource.location}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Sectores de enfoque:</p>
                      <div className="flex flex-wrap gap-1">
                        {resource.focus.map((area) => (
                          <Badge key={area} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-foreground">Etapa</p>
                        <p className="text-muted-foreground">{resource.stage}</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Duración</p>
                        <p className="text-muted-foreground">{resource.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{resource.investment}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{resource.startups}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      Aplicar ahora
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;