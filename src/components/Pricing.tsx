import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Planos <span className="bg-gradient-primary bg-clip-text text-transparent">Simples</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para seu aprendizado em matemática
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Trial */}
          <Card className="p-8 text-center border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all">
            <h3 className="text-2xl font-bold mb-4">Teste Grátis</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Grátis</span>
              <span className="text-muted-foreground block">7 dias</span>
            </div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">5 questões por dia</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Soluções básicas</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Suporte por email</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Começar Teste
            </Button>
          </Card>

          {/* Premium Plan */}
          <Card className="p-8 text-center border-primary bg-card/70 backdrop-blur-sm hover:bg-card/90 transition-all relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-primary px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Star className="w-3 h-3" />
                Mais Popular
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">R$ 9,90</span>
              <span className="text-muted-foreground block">/mês</span>
            </div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Questões ilimitadas</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Soluções detalhadas passo a passo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Gráficos e visualizações</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Histórico de questões</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Suporte prioritário 24/7</span>
              </li>
            </ul>
            <Button variant="hero" className="w-full">
              Assinar Agora
            </Button>
          </Card>

          {/* Enterprise */}
          <Card className="p-8 text-center border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all">
            <h3 className="text-2xl font-bold mb-4">Educacional</h3>
            <div className="mb-6">
              <span className="text-2xl font-bold">Consulte</span>
              <span className="text-muted-foreground block">Preço personalizado</span>
            </div>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Para escolas e universidades</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Painel administrativo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Relatórios de progresso</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span className="text-sm">Integração LMS</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Falar com Vendas
            </Button>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            💳 Pagamento seguro via Stripe • 🔄 Cancele a qualquer momento • 💰 Garantia de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;