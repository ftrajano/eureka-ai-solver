import { Button } from "@/components/ui/button";
import { Calculator, Brain, Zap } from "lucide-react";
import heroImage from "@/assets/hero-math.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating mathematical symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 text-6xl animate-float">∫</div>
        <div className="absolute top-40 right-20 text-accent/20 text-5xl animate-float" style={{animationDelay: '1s'}}>π</div>
        <div className="absolute bottom-40 left-20 text-primary-glow/20 text-4xl animate-float" style={{animationDelay: '2s'}}>∑</div>
        <div className="absolute top-60 left-1/2 text-accent/20 text-3xl animate-float" style={{animationDelay: '0.5s'}}>∂</div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative">
              <Calculator className="w-12 h-12 text-primary animate-glow" />
              <Brain className="w-6 h-6 text-accent absolute -top-2 -right-2" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EulerAI
            </h1>
          </div>

          {/* Main headline */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Resolva <span className="bg-gradient-primary bg-clip-text text-transparent">Matemática</span>
            <br />
            com <span className="text-accent">Inteligência Artificial</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Coloque sua questão de matemática e nossa IA fornece a solução completa, 
            passo a passo. Da álgebra básica ao cálculo avançado.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Brain, title: "IA Avançada", desc: "Soluções precisas e detalhadas" },
              { icon: Zap, title: "Instantâneo", desc: "Resposta em segundos" },
              { icon: Calculator, title: "Todos os Níveis", desc: "Fundamental ao superior" }
            ].map((feature, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all">
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="hero" className="animate-glow">
              Começar Agora - R$ 9,90/mês
            </Button>
            <Button variant="outline" size="lg">
              Ver Demonstração
            </Button>
          </div>

          {/* Trust indicators */}
          <p className="text-sm text-muted-foreground mt-8">
            ✓ Sem compromisso • ✓ Cancele quando quiser • ✓ Suporte 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;