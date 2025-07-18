import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Mail, Github, Linkedin, Star, ExternalLink } from "lucide-react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  // Mock data del perfil de usuario
  const user = {
    id: id,
    name: "María González",
    title: "UX Designer & Frontend Developer",
    location: "Madrid, España",
    joinDate: "Enero 2024",
    avatar: "/placeholder.svg",
    initials: "MG",
    email: "maria.gonzalez@email.com",
    bio: "Apasionada por crear experiencias digitales que generen impacto social. Especializada en design systems y accesibilidad. Me encanta colaborar en proyectos que tienen el potencial de mejorar la vida de las personas.",
    skills: [
      "React", "Figma", "Design Systems", "User Research", "Prototyping", 
      "JavaScript", "CSS", "HTML", "Accessibility", "Usability Testing"
    ],
    interests: ["Impacto Social", "Educación", "Sostenibilidad", "Accesibilidad"],
    availability: "Disponible para proyectos part-time",
    experience: "3+ años en diseño UX/UI",
    rating: 4.9,
    projectsCompleted: 3,
    projects: [
      {
        id: 1,
        title: "EcoTrack - App de Sostenibilidad",
        role: "Lead UX Designer",
        status: "En desarrollo",
        description: "Diseño de experiencia completa para app de tracking de huella de carbono",
        tags: ["UX/UI", "React Native", "Sostenibilidad"]
      },
      {
        id: 2,
        title: "LearnTogether - Plataforma Educativa",
        role: "Frontend Developer",
        status: "Completado",
        description: "Desarrollo frontend de plataforma colaborativa de aprendizaje",
        tags: ["React", "JavaScript", "Educación"]
      },
      {
        id: 3,
        title: "AccessApp - Herramientas de Accesibilidad",
        role: "UX Designer",
        status: "Completado",
        description: "Diseño de herramientas digitales para personas con discapacidad",
        tags: ["Accesibilidad", "Design Systems", "Investigación"]
      }
    ],
    socialLinks: {
      github: "https://github.com/mariagonzalez",
      linkedin: "https://linkedin.com/in/mariagonzalez",
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-2xl">{user.initials}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-2">{user.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{user.title}</p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {user.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    En CollabSpace desde {user.joinDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-accent" />
                    <span>{user.rating} ({user.projectsCompleted} proyectos)</span>
                  </div>
                </div>

                <div className="flex gap-4 mb-4">
                  <Button>
                    <Mail className="w-4 h-4 mr-2" />
                    Contactar
                  </Button>
                  <Button variant="outline">
                    Proponer colaboración
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Badge variant="secondary" className="mb-4">
                  {user.availability}
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>Sobre mí</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{user.bio}</p>
                </CardContent>
              </Card>

              {/* Projects */}
              <Card>
                <CardHeader>
                  <CardTitle>Proyectos colaborativos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {user.projects.map((project) => (
                    <div key={project.id} className="border-l-2 border-primary pl-6 pb-6 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{project.title}</h3>
                        <Badge variant={project.status === "Completado" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm font-medium text-primary mb-2">{project.role}</p>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Habilidades técnicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card>
                <CardHeader>
                  <CardTitle>Áreas de interés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {user.interests.map((interest) => (
                      <Badge key={interest} variant="outline">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Proyectos completados</span>
                    <span className="font-medium">{user.projectsCompleted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valoración promedio</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-accent" />
                      <span className="font-medium">{user.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experiencia</span>
                    <span className="font-medium">{user.experience}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;