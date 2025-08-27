import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-6">
      {/* Floating math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/10 text-4xl animate-float">∫</div>
        <div className="absolute top-40 right-20 text-accent/10 text-3xl animate-float" style={{animationDelay: '1s'}}>π</div>
        <div className="absolute bottom-40 left-20 text-primary-glow/10 text-2xl animate-float" style={{animationDelay: '2s'}}>∑</div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <Calculator className="w-10 h-10 text-primary animate-glow" />
              <Brain className="w-5 h-5 text-accent absolute -top-1 -right-1" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EulerAI
            </span>
          </Link>
        </div>

        <Card className="bg-card/90 backdrop-blur-xl border-border/50 shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {isLogin ? "Entrar na sua conta" : "Criar conta"}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? "Entre para resolver questões de matemática com IA" 
                : "Cadastre-se e comece seu teste gratuito"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Digite seu nome" 
                    className="bg-input/50 border-border"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="bg-input/50 border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="bg-input/50 border-border"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar senha</Label>
                  <Input 
                    id="confirm-password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="bg-input/50 border-border"
                  />
                </div>
              )}

              <Button variant="hero" className="w-full" type="submit">
                {isLogin ? "Entrar" : "Criar conta"}
              </Button>
            </form>

            {isLogin && (
              <div className="text-center">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
            )}

            <div className="text-center pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:underline font-medium"
                >
                  {isLogin ? "Cadastre-se gratuitamente" : "Entre aqui"}
                </button>
              </p>
            </div>

            {!isLogin && (
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Ao criar uma conta, você concorda com nossos{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Termos de Uso
                  </Link>{" "}
                  e{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Política de Privacidade
                  </Link>
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;