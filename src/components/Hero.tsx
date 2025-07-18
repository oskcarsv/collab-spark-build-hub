import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Target } from "lucide-react";
import heroImage from "@/assets/hero-collaboration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Conecta, 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> colabora </span>
                y crea juntos
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                La plataforma donde jóvenes creativos se encuentran para construir proyectos increíbles, 
                desde ideas hasta startups que cambian el mundo.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Proyectos activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2k+</div>
                <div className="text-sm text-muted-foreground">Colaboradores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Startups nacidas</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button variant="hero" size="lg" className="group">
                Empezar a colaborar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Explorar proyectos
              </Button>
            </div>

            {/* Features preview */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>Perfiles colaborativos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span>Proyectos innovadores</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 text-primary" />
                <span>Recursos + mentores</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-card bg-gradient-card backdrop-blur-sm">
              <img 
                src={heroImage} 
                alt="Jóvenes colaborando en proyectos creativos"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-card rounded-lg p-4 shadow-card border backdrop-blur-sm animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">Nuevo proyecto: EcoApp</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card rounded-lg p-4 shadow-card border backdrop-blur-sm animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">5 colaboradores se unieron</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;