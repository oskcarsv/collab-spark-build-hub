import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Rocket, Network } from "lucide-react";
import projectsIcon from "@/assets/projects-icon.jpg";
import marketplaceIcon from "@/assets/marketplace-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: Users,
      image: null,
      title: "Perfiles colaborativos",
      description: "Muestra tus habilidades, proyectos y pasiones. Conecta con personas que comparten tu visión y ganas de crear.",
      cta: "Crear mi perfil",
      color: "primary"
    },
    {
      icon: Rocket,
      image: projectsIcon,
      title: "Explora proyectos únicos",
      description: "Desde apps revolucionarias hasta iniciativas sociales. Encuentra el proyecto perfecto para tus skills y únete a la aventura.",
      cta: "Ver proyectos",
      color: "accent"
    },
    {
      icon: Network,
      image: marketplaceIcon,
      title: "Marketplace de recursos",
      description: "Accede a incubadoras, mentores, fondos de inversión y herramientas. Todo lo que necesitas para llevar tu proyecto al siguiente nivel.",
      cta: "Explorar recursos",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tu espacio para 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> crear en equipo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Más que una plataforma, somos una comunidad donde las ideas toman forma 
            y los sueños se vuelven realidad a través de la colaboración.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                feature.color === 'primary' ? 'from-primary/5 to-primary/0' : 'from-accent/5 to-accent/0'
              } rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon or Image */}
                <div className="mb-6">
                  {feature.image ? (
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-soft">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 rounded-xl bg-gradient-${feature.color} flex items-center justify-center shadow-soft`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className={`group/btn p-0 h-auto text-${feature.color} hover:text-${feature.color} font-semibold`}
                >
                  {feature.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para empezar tu próximo gran proyecto?
            </h3>
            <p className="text-muted-foreground mb-6">
              Únete a una comunidad de creators, innovadores y emprendedores que están construyendo el futuro.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="hero" size="lg">
                Crear mi perfil
              </Button>
              <Button variant="outline" size="lg">
                Ver proyectos destacados
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;