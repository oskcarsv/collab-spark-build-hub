import { Button } from "@/components/ui/button";
import { Search, Menu, User, Bell } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">CollabSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#proyectos" className="text-foreground hover:text-primary transition-colors font-medium">
              Explorar
            </Link>
            <Link to="/#proyectos" className="text-foreground hover:text-primary transition-colors font-medium">
              Proyectos
            </Link>
            <Link to="/recursos" className="text-foreground hover:text-primary transition-colors font-medium">
              Recursos
            </Link>
            <Link to="/comunidad" className="text-foreground hover:text-primary transition-colors font-medium">
              Comunidad
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-2 bg-muted rounded-lg px-4 py-2 w-80">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Buscar proyectos, personas, skills..."
              className="bg-transparent border-none outline-none flex-1 text-sm placeholder:text-muted-foreground"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></span>
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>
            
            <Button variant="accent" size="sm" className="hidden sm:flex">
              Crear proyecto
            </Button>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-up">
            <div className="flex flex-col gap-3">
              <Link to="/#proyectos" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Explorar
              </Link>
              <Link to="/#proyectos" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Proyectos
              </Link>
              <Link to="/recursos" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Recursos
              </Link>
              <Link to="/comunidad" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Comunidad
              </Link>
              <Button variant="accent" className="mt-2 self-start">
                Crear proyecto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;