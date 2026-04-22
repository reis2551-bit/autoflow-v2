export interface FAQ {
  q: string;
  a: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "solucao",
    title: "Sobre a solução",
    faqs: [
      {
        q: "Isto é complicado de usar?",
        a: "Não. Nós tratamos de tudo. Tu não tocas em nada técnico. Em 7 dias estás online — sem teres feito nada além de uma chamada de 30 minutos.",
      },
      {
        q: "Tenho de mudar o número de WhatsApp?",
        a: "Não. Ficas com o teu número atual. Os clientes continuam a falar para o mesmo sítio — só que agora tens uma IA a responder por ti.",
      },
      {
        q: "A IA fala como eu ou parece um robô?",
        a: "Treinamos a IA com o teu tom, os teus preços e o teu vocabulário. Os clientes raramente percebem que não és tu. Se precisares de personalizar ainda mais, é só pedir.",
      },
      {
        q: "E se a IA não souber responder a alguma coisa?",
        a: "Configuramos um fallback — a IA diz que vai confirmar e envia-te alerta imediato para responderes tu. Nunca deixa o cliente sem resposta.",
      },
      {
        q: "Funciona com o meu tipo de negócio?",
        a: "Temos experiência com barbearias, cabeleireiros, nail studios, eletricistas, canalizadores, AC, limpezas, jardinagem e handyman. Se o teu negócio tem clientes que ligam, funciona.",
      },
      {
        q: "Preciso de saber programar ou de contratar alguém técnico?",
        a: "Não. Tu não mexes em nada técnico. Tratamos de tudo — setup, configuração, manutenção e atualizações.",
      },
    ],
  },
  {
    id: "implementacao",
    title: "Implementação e onboarding",
    faqs: [
      {
        q: "Quanto tempo demora a ficar tudo online?",
        a: "7 dias desde o briefing inicial. Dia 1: chamada de 30 min. Dias 2-5: construção e configuração. Dia 6: testes. Dia 7: entrega e treino.",
      },
      {
        q: "O que precisas de mim para começar?",
        a: "60 minutos no total: 3 chamadas curtas. Mais logo + barras fotográficas + 3 exemplos de concorrentes de referência. É tudo.",
      },
      {
        q: "Migras o meu site atual?",
        a: "Sim, migração do site atual está incluída em todos os planos sem custo adicional.",
      },
      {
        q: "O domínio .pt está incluído?",
        a: "Sim, no plano Arrancar o domínio .pt e o alojamento estão incluídos no primeiro ano. Renovação anual a preço de custo.",
      },
      {
        q: "Como é o treino da IA com os meus preços e serviços?",
        a: "Numa chamada de 45 min levantamos todos os teus serviços, preços, horários e casos mais comuns. Depois treinamos e testamos contigo antes de ir a ar.",
      },
    ],
  },
  {
    id: "ia-seguranca",
    title: "IA e segurança",
    faqs: [
      {
        q: "A IA pode cometer erros ou dar informação errada?",
        a: "A IA é treinada com as tuas informações e tem guardrails para não inventar preços ou horários que não existem. Para perguntas fora do âmbito, escala para ti.",
      },
      {
        q: "Os dados dos meus clientes estão seguros?",
        a: "Sim. Operamos em conformidade com o RGPD e o AI Act da UE. Os dados estão em servidores na Europa. Consulta a lista completa de subprocessadores em /subprocessadores.",
      },
      {
        q: "A IA pode falar como se fosse eu?",
        a: "Sim. Treinamos com amostras das tuas conversas para replicar o teu tom e vocabulário. O resultado é uma IA que soa natural e próximo.",
      },
      {
        q: "Os meus dados são usados para treinar outros modelos?",
        a: "Não. Os dados do teu negócio são teus e nunca são usados para treinar modelos gerais. Podes exportar ou eliminar a qualquer momento.",
      },
    ],
  },
  {
    id: "precos-contratos",
    title: "Preços e contratos",
    faqs: [
      {
        q: "Posso cancelar quando quiser?",
        a: "Sim, quando quiseres, com 30 dias de aviso. Sem contratos anuais, sem penalizações, sem letras pequenas.",
      },
      {
        q: "Posso mudar de plano depois de começar?",
        a: "Sim. Subir de plano é imediato, paga só a diferença pro-rata. Descer de plano ativa no ciclo seguinte.",
      },
      {
        q: "O IVA está incluído nos preços?",
        a: "Os preços apresentados não incluem IVA. Faturamos com IVA à taxa legal em vigor (23%). Emitimos fatura mensal.",
      },
      {
        q: "Como funciona a garantia de 30 dias?",
        a: "Se em 30 dias não receberes pelo menos 1 lead novo atribuído ao nosso sistema, devolvemos o valor do setup na totalidade. Sem perguntas.",
      },
      {
        q: "Que métodos de pagamento aceitam?",
        a: "MB Way, transferência bancária e cartão. Faturação mensal automatizada.",
      },
    ],
  },
];

export const allFAQs: FAQ[] = faqCategories.flatMap((cat) => cat.faqs);
