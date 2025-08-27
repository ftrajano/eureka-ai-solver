import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Calculator, Brain, Send, History, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsLoading(true);
    // Aqui será implementada a integração com IA quando Supabase estiver conectado
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative">
                <Calculator className="w-8 h-8 text-primary" />
                <Brain className="w-4 h-4 text-accent absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EulerAI
              </span>
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <History className="w-4 h-4 mr-2" />
                Histórico
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Perfil
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Bem-vindo ao <span className="bg-gradient-primary bg-clip-text text-transparent">EulerAI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Digite sua questão de matemática e nossa IA resolverá para você
            </p>
          </div>

          {/* Question Input */}
          <Card className="mb-8 bg-card/90 backdrop-blur-xl border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Nova Questão
              </CardTitle>
              <CardDescription>
                Descreva sua questão de matemática em detalhes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  placeholder="Ex: Resolva a equação x² + 5x + 6 = 0 ou calcule a integral de x² dx..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-32 bg-input/50 border-border resize-none"
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    💡 Dica: Seja específico para obter melhores resultados
                  </p>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    disabled={!question.trim() || isLoading}
                    className="min-w-32"
                  >
                    {isLoading ? (
                      "Resolvendo..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Resolver
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Solution Area */}
          {isLoading && (
            <Card className="bg-card/90 backdrop-blur-xl border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4">
                  <Brain className="w-8 h-8 text-primary animate-pulse" />
                  <div>
                    <h3 className="font-semibold mb-2">Nossa IA está pensando...</h3>
                    <p className="text-sm text-muted-foreground">
                      Analisando sua questão e preparando a solução completa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Examples */}
          <Card className="bg-card/50 backdrop-blur-xl border-border/30">
            <CardHeader>
              <CardTitle className="text-lg">Exemplos de Questões</CardTitle>
              <CardDescription>
                Clique em qualquer exemplo para começar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Resolva: 2x² - 7x + 3 = 0",
                  "Calcule: ∫(3x² + 2x - 1)dx",
                  "Derive: f(x) = x³ + 2x² - 5x + 1",
                  "Simplifique: (x² - 4)/(x + 2)"
                ].map((example, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-4 text-left justify-start bg-muted/30 hover:bg-muted/50"
                    onClick={() => setQuestion(example)}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Subscription Status */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-success/20 text-success px-4 py-2 rounded-full text-sm">
              ✓ Plano Premium Ativo - Questões ilimitadas
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;