import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Calendar, Users, Star } from "lucide-react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data - en una app real vendría de una API
  const project = {
    id: id,
    title: "EcoTrack - App de Sostenibilidad",
    description: "Una aplicación móvil que ayuda a las personas a rastrear su huella de carbono diaria y conectarse con iniciativas locales de sostenibilidad.",
    category: "Impacto Social",
    stage: "Prototipo",
    location: "Barcelona, España",
    startDate: "Marzo 2024",
    image: "/placeholder.svg",
    tags: ["React Native", "Sostenibilidad", "UX/UI", "Marketing"],
    teamMembers: [
      { name: "Ana García", role: "Product Designer", avatar: "/placeholder.svg", initials: "AG" },
      { name: "Carlos López", role: "Developer", avatar: "/placeholder.svg", initials: "CL" },
    ],
    lookingFor: [
      { role: "Marketing Specialist", description: "Para estrategia de crecimiento y community building" },
      { role: "Backend Developer", description: "Node.js y bases de datos para escalabilidad" },
      { role: "Environmental Expert", description: "Validación científica de métricas de sostenibilidad" }
    ],
    longDescription: "EcoTrack nace de la necesidad de hacer la sostenibilidad más accesible y práctica en la vida cotidiana. Queremos crear una comunidad de personas comprometidas con el cambio climático a través de acciones pequeñas pero consistentes. La app incluirá gamificación, challenges comunitarios y conexión con negocios locales sostenibles."
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant="outline">{project.stage}</Badge>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Iniciado en {project.startDate}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {project.teamMembers.length} miembros
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-12">
            <Button size="lg" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Unirme al proyecto
            </Button>
            <Button variant="outline" size="lg">
              Contactar equipo
            </Button>
            <Button variant="ghost" size="lg">
              Guardar proyecto
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Sobre el proyecto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{project.longDescription}</p>
                </CardContent>
              </Card>

              {/* Technologies/Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tecnologías y habilidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Current team */}
              <Card>
                <CardHeader>
                  <CardTitle>Equipo actual</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.teamMembers.map((member) => (
                    <div key={member.name} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Looking for */}
              <Card>
                <CardHeader>
                  <CardTitle>Buscamos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.lookingFor.map((role, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-medium text-foreground">{role.role}</h4>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;