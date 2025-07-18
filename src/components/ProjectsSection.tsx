import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      id: "1",
      title: "EcoTrack App",
      description: "Una app móvil para rastrear y reducir tu huella de carbono personal. Gamificación, challenges y recompensas por hábitos sostenibles.",
      category: "Medio Ambiente",
      tags: ["React Native", "Sostenibilidad", "Gamificación", "Mobile"],
      teamSize: 3,
      maxTeam: 6,
      daysLeft: 12,
      featured: true
    },
    {
      id: "2",
      title: "Plataforma de Educación P2P",
      description: "Conecta estudiantes que quieren aprender con otros que dominan diferentes materias. Intercambio de conocimientos sin intermediarios.",
      category: "EdTech",
      tags: ["Vue.js", "Educación", "P2P", "Blockchain"],
      teamSize: 2,
      maxTeam: 5,
      daysLeft: 8
    },
    {
      id: "3",
      title: "Local Business Network",
      description: "Red social hiperlocal para conectar pequeños negocios de barrio con su comunidad. Fomenta el comercio local y las relaciones vecinales.",
      category: "Social Impact",
      tags: ["React", "Geolocalización", "Negocios locales", "Community"],
      teamSize: 4,
      maxTeam: 7,
      daysLeft: 20
    },
    {
      id: "4",
      title: "Mental Health Companion",
      description: "Asistente digital para el bienestar mental con IA. Proporciona recursos, ejercicios de mindfulness y conecta con profesionales.",
      category: "HealthTech",
      tags: ["IA", "Mental Health", "Python", "Machine Learning"],
      teamSize: 1,
      maxTeam: 4,
      daysLeft: 15
    },
    {
      id: "5",
      title: "Crypto Art Collective",
      description: "Galería descentralizada para artistas digitales emergentes. Marketplace de NFTs con enfoque en arte social y colaborativo.",
      category: "Arte Digital",
      tags: ["Blockchain", "NFTs", "Arte", "Web3"],
      teamSize: 2,
      maxTeam: 6,
      daysLeft: 25
    },
    {
      id: "6",
      title: "Smart Campus IoT",
      description: "Sistema IoT para universidades: optimiza consumo energético, gestiona espacios de estudio y mejora la experiencia estudiantil.",
      category: "IoT",
      tags: ["IoT", "Sensores", "Universidades", "Arduino"],
      teamSize: 3,
      maxTeam: 8,
      daysLeft: 30
    }
  ];

  const categories = [
    "Todos", "Medio Ambiente", "EdTech", "Social Impact", "HealthTech", "Arte Digital", "IoT", "FinTech"
  ];

  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proyectos que 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> están cambiando el mundo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desde startups en fase temprana hasta experimentos creativos. 
            Encuentra tu próxima aventura y conecta con minds como la tuya.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar proyectos por nombre, skill o categoría..."
                className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>

            {/* Filter button */}
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "ghost"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '800ms' }}>
          <Button variant="outline" size="lg" className="group">
            Cargar más proyectos
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-up" style={{ animationDelay: '900ms' }}>
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              ¿Tienes una idea increíble?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compártela con nuestra comunidad y encuentra las personas perfectas para hacerla realidad.
            </p>
            <Button variant="hero" size="lg" className="group">
              Crear mi proyecto
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;