import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  // Mock data de perfiles de comunidad
  const communityMembers = [
    {
      id: 1,
      name: "María González",
      title: "UX Designer & Frontend Developer",
      location: "Madrid, España",
      avatar: "/placeholder.svg",
      initials: "MG",
      skills: ["React", "Figma", "Design Systems", "User Research"],
      projects: 3,
      rating: 4.9,
      bio: "Apasionada por crear experiencias digitales que generen impacto social. Especializada en design systems y accesibilidad.",
      lookingFor: "Proyectos de impacto social y educación"
    },
    {
      id: 2,
      name: "David Chen",
      title: "Full Stack Developer",
      location: "Barcelona, España",
      avatar: "/placeholder.svg",
      initials: "DC",
      skills: ["Node.js", "Python", "AWS", "Machine Learning"],
      projects: 5,
      rating: 4.8,
      bio: "Developer con experiencia en startups de fintech y healthtech. Me interesa la intersección entre tecnología e impacto social.",
      lookingFor: "Startups en fase temprana"
    },
    {
      id: 3,
      name: "Sofía Ruiz",
      title: "Digital Marketing & Growth",
      location: "Valencia, España",
      avatar: "/placeholder.svg",
      initials: "SR",
      skills: ["Growth Hacking", "SEO", "Content Strategy", "Analytics"],
      projects: 4,
      rating: 4.7,
      bio: "Especialista en growth marketing para startups. Me apasiona ayudar a proyectos innovadores a encontrar su audiencia.",
      lookingFor: "Proyectos B2C con potencial viral"
    },
    {
      id: 4,
      name: "Alex Thompson",
      title: "Product Manager & Strategy",
      location: "Remoto",
      avatar: "/placeholder.svg",
      initials: "AT",
      skills: ["Product Strategy", "Agile", "Data Analysis", "Leadership"],
      projects: 6,
      rating: 4.9,
      bio: "Product Manager con experiencia en scale-ups europeas. Me enfoco en productos que resuelven problemas reales.",
      lookingFor: "Equipos multidisciplinarios"
    },
    {
      id: 5,
      name: "Carmen López",
      title: "Environmental Scientist & Data Analyst",
      location: "Sevilla, España",
      avatar: "/placeholder.svg",
      initials: "CL",
      skills: ["Data Science", "Python", "Environmental Impact", "Research"],
      projects: 2,
      rating: 4.6,
      bio: "Científica ambiental transitioning hacia tech. Busco proyectos que combinen datos y sostenibilidad.",
      lookingFor: "Proyectos de impacto ambiental"
    },
    {
      id: 6,
      name: "Miguel Ángel Torres",
      title: "Mobile Developer & AI Enthusiast",
      location: "Bilbao, España",
      avatar: "/placeholder.svg",
      initials: "MT",
      skills: ["React Native", "Flutter", "TensorFlow", "iOS/Android"],
      projects: 3,
      rating: 4.8,
      bio: "Mobile developer especializado en apps con IA. Me interesan los proyectos que usan tecnología emergente.",
      lookingFor: "Proyectos con IA y mobile"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Nuestra Comunidad
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conecta con creadores, desarrolladores, designers y emprendedores 
              que están construyendo el futuro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Link to={`/perfil/${member.id}`}>
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <Link to={`/perfil/${member.id}`}>
                        <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">{member.title}</p>
                      
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{member.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {member.bio}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Busca:</p>
                    <p className="text-sm text-foreground">{member.lookingFor}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {member.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{member.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{member.projects} proyectos</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-accent" />
                        <span>{member.rating}</span>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline">
                      Conectar
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

export default Community;