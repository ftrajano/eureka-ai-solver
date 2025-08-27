import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Calculator, Brain, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Floating math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/10 text-6xl animate-float">404</div>
        <div className="absolute top-40 right-20 text-accent/10 text-5xl animate-float" style={{animationDelay: '1s'}}>∞</div>
        <div className="absolute bottom-40 left-20 text-primary-glow/10 text-4xl animate-float" style={{animationDelay: '2s'}}>∅</div>
      </div>

      <div className="text-center max-w-md mx-auto px-6 relative z-10">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity mb-8">
          <div className="relative">
            <Calculator className="w-12 h-12 text-primary animate-glow" />
            <Brain className="w-6 h-6 text-accent absolute -top-2 -right-2" />
          </div>
          <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            EulerAI
          </span>
        </Link>

        <div className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-card">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Parece que esta página não existe em nossa base de dados matemáticos. 
            Que tal resolver uma questão real ao invés disso?
          </p>
          
          <div className="space-y-4">
            <Link to="/">
              <Button variant="hero" size="lg" className="w-full">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="w-full">
                <Calculator className="w-4 h-4 mr-2" />
                Resolver Questões
              </Button>
            </Link>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          Erro matemático: Caminho não definido no domínio da aplicação
        </p>
      </div>
    </div>
  );
};

export default NotFound;
