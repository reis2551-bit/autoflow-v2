export interface DemoResponse {
  keywords: string[];
  response: string;
}

export interface NicheDemoResponses {
  slug: string;
  businessName: string;
  responses: DemoResponse[];
  defaultResponse: string;
}

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

export function getDemoResponse(
  input: string,
  nichSlug: string
): string {
  const nicheResponses = allDemoResponses.find((n) => n.slug === nichSlug);
  if (!nicheResponses) return allDemoResponses[0].defaultResponse;

  const normalized = normalize(input);

  for (const entry of nicheResponses.responses) {
    if (entry.keywords.some((kw) => normalized.includes(normalize(kw)))) {
      return entry.response;
    }
  }

  return nicheResponses.defaultResponse;
}

export const allDemoResponses: NicheDemoResponses[] = [
  {
    slug: "barbearia",
    businessName: "Barbearia",
    responses: [
      {
        keywords: ["preco", "custo", "quanto", "valor", "euros", "€"],
        response:
          "Os nossos preços: corte simples €12 · corte + barba €18 · tratamento de barba €10. Aceitas cartão e MB Way. Queres marcar?",
      },
      {
        keywords: ["marcar", "marcacao", "reservar", "agendar", "vaga", "hora", "hoje", "amanha", "semana"],
        response:
          "Temos disponibilidade hoje às 15h e às 17h, e amanhã de manhã a partir das 10h. Qual preferes? 💈",
      },
      {
        keywords: ["horario", "aberto", "fechado", "quando", "funciona"],
        response:
          "Estamos abertos de segunda a sábado, das 9h às 19h. Domingo fechado. Queres marcar?",
      },
      {
        keywords: ["morada", "onde", "localizacao", "endereco", "sitio"],
        response:
          "Estamos na Rua do Exemplo 45, Lisboa (perto do metro). Google Maps: https://maps.google.com. Queres marcar visita?",
      },
      {
        keywords: ["urgente", "ja", "agora", "rapido", "depressa"],
        response:
          "Conseguimos encaixar-te ainda hoje! Temos um slot às 16h30. Confirmas?",
      },
      {
        keywords: ["cancelar", "desmarcar", "nao posso", "nao vou"],
        response:
          "Sem problema! Podes remarcar quando quiseres. Se puderes avisar com 2h de antecedência agradeço. Boa sorte! 🙏",
      },
    ],
    defaultResponse:
      "Olá! Sou o assistente da Barbearia. Posso ajudar com marcações, preços ou horários. O que precisas? 💈",
  },
  {
    slug: "cabeleireiro",
    businessName: "Salão",
    responses: [
      {
        keywords: ["preco", "custo", "quanto", "valor", "euros", "€"],
        response:
          "Preços: corte feminino €25–€35 · coloração €45–€80 · brushing €20 · tratamento €30. Queres marcação?",
      },
      {
        keywords: ["marcar", "marcacao", "reservar", "agendar", "vaga", "hora"],
        response:
          "Temos disponibilidade esta semana: quinta às 14h, sexta às 11h ou sábado às 10h. Qual preferes? ✂️",
      },
      {
        keywords: ["horario", "aberto", "fechado", "quando"],
        response:
          "Estamos abertas de terça a sábado, das 9h às 19h. Segunda fechado. Como posso ajudar?",
      },
      {
        keywords: ["coloracao", "cor", "pintar", "mechas", "highlights"],
        response:
          "Para coloração e mechas temos especialista disponível. O serviço demora 2–3h. Queres orçamento e marcação?",
      },
    ],
    defaultResponse:
      "Olá! Sou a assistente do salão. Posso ajudar com marcações, preços e tratamentos. O que precisas? ✂️",
  },
  {
    slug: "nails",
    businessName: "Nail Studio",
    responses: [
      {
        keywords: ["preco", "custo", "quanto", "valor", "euros", "€"],
        response:
          "Preços: gel simples €25 · gel com nail art €35–€55 · acrílico €40 · remoção €15. Tens desconto de fidelidade a partir da 3.ª visita 💅",
      },
      {
        keywords: ["marcar", "marcacao", "reservar", "vaga", "hora"],
        response:
          "Temos sábado às 10h e às 14h, e domingo às 11h livres. Qual preferes? 💅",
      },
      {
        keywords: ["gel", "acrilico", "shellac", "nail art", "unhas"],
        response:
          "Fazemos gel, acrílico, shellac e nail art personalizada. Manda foto de referência se tiveres! Queres marcar?",
      },
      {
        keywords: ["quanto tempo", "duracao", "demora"],
        response:
          "Gel simples demora 1h. Com nail art 1h30–2h. Acrílico 2h. Faço marcação com tempo adequado.",
      },
    ],
    defaultResponse:
      "Olá! Sou a assistente do Nail Studio. Como posso ajudar? Marcações, preços ou dúvidas sobre serviços 💅",
  },
  {
    slug: "eletricista",
    businessName: "Electricidade",
    responses: [
      {
        keywords: ["preco", "custo", "quanto", "orcamento", "valor", "€"],
        response:
          "Deslocação + diagnóstico €65 (creditado na reparação). Substituição de tomada/interruptor €35–€55. Quadro elétrico €180+. Para orçamento exato preciso ver o serviço. Agendar?",
      },
      {
        keywords: ["urgente", "emergencia", "ja", "agora", "rapidamente", "cortou", "dispara", "avariou"],
        response:
          "🚨 Entendido — urgência elétrica. Tenho técnico disponível hoje. Qual é o teu código postal e número de contacto?",
      },
      {
        keywords: ["marcar", "agendar", "visita", "quando", "hora"],
        response:
          "Tenho disponibilidade amanhã de manhã (9h–12h) ou à tarde (14h–18h). Qual preferes? Qual é a zona?",
      },
      {
        keywords: ["quadro", "disjuntor", "dispara", "curto", "fio", "fiacao"],
        response:
          "Problema no quadro pode ser sobrecarga, curto-circuito ou disjuntor defeituoso. Preciso de ver para diagnosticar. Agendo visita?",
      },
    ],
    defaultResponse:
      "Olá! Sou o assistente do eletricista. Para urgências ou agendamentos, estou aqui. ⚡ Qual é o problema?",
  },
  {
    slug: "canalizador",
    businessName: "Canalização",
    responses: [
      {
        keywords: ["preco", "custo", "quanto", "orcamento", "valor", "€"],
        response:
          "Deslocação + diagnóstico €55 (creditado). Torneira €45–€80. Fuga de água €60–€120. Entupimento €80+. Orçamento exato depois de ver o serviço. Agendo?",
      },
      {
        keywords: ["urgente", "fuga", "inundacao", "agua", "a pingar", "rebentar"],
        response:
          "🚨 Fuga de água — urgência. Técnico disponível hoje. Qual é o teu código postal?",
      },
      {
        keywords: ["marcar", "agendar", "visita", "quando"],
        response:
          "Disponibilidade amanhã às 9h ou às 14h. Qual preferes? Qual é a zona?",
      },
      {
        keywords: ["entupimento", "entupido", "nao escoa", "lento"],
        response:
          "Entupimento pode ser mecânico ou orgânico. Resolvo no momento ou com máquina de desincrustar. Agendo visita?",
      },
    ],
    defaultResponse:
      "Olá! Sou o assistente do canalizador. Para urgências ou marcações, estou disponível 24/7. 🔧 O que precisas?",
  },
  {
    slug: "climatizacao",
    businessName: "Climatização",
    responses: [
      {
        keywords: ["preco", "custo", "quanto", "orcamento", "instalacao", "€"],
        response:
          "Instalação split 9000 BTU: €350–€450. 12000 BTU: €400–€520. Limpeza de manutenção: €60/unidade. Orçamento exato após visita. Agendar?",
      },
      {
        keywords: ["barulho", "ruido", "pinga", "agua", "avaria", "nao arrefece", "nao aquece"],
        response:
          "Barulho e água a pingar podem ser da mangueira de condensados ou do compressor. Técnico disponível esta semana. Qual é a tua zona?",
      },
      {
        keywords: ["manutencao", "limpeza", "filtro", "servico anual"],
        response:
          "Manutenção anual inclui limpeza de filtros, verificação de gás e teste de desempenho. €60/unidade. Agendo?",
      },
      {
        keywords: ["marcar", "agendar", "visita", "quando", "instalar"],
        response:
          "Disponibilidade esta semana: quinta à tarde ou sexta de manhã. Qual é a tua zona e marca do aparelho?",
      },
    ],
    defaultResponse:
      "Olá! Assistente de climatização. Para instalação, manutenção ou avaria — estou aqui. ❄️ O que precisas?",
  },
  {
    slug: "limpezas",
    businessName: "Limpezas",
    responses: [
      {
        keywords: ["preco", "custo", "quanto", "orcamento", "valor", "€"],
        response:
          "Limpeza residencial: €60–€100 (T1/T2). Pós-obra: €150–€300. Escritório: orçamento personalizado. Qual é o teu caso?",
      },
      {
        keywords: ["pos-obra", "construcao", "renovacao", "obras"],
        response:
          "Limpeza pós-obra inclui remoção de pó de cimento, limpeza de vidros e sanitários. Qual é a tipologia e zona?",
      },
      {
        keywords: ["recorrente", "semanal", "mensal", "regular", "contrato"],
        response:
          "Temos serviço de limpeza recorrente com desconto de fidelidade. Semanal, quinzenal ou mensal. Qual preferes?",
      },
      {
        keywords: ["marcar", "agendar", "quando", "data"],
        response:
          "Disponibilidade esta semana: quarta e quinta. Qual é a tua zona e tipo de limpeza?",
      },
    ],
    defaultResponse:
      "Olá! Assistente de limpezas. Para orçamento ou marcação, estou aqui. 🧹 Qual é o serviço que precisas?",
  },
  {
    slug: "jardinagem",
    businessName: "Jardinagem",
    responses: [
      {
        keywords: ["preco", "custo", "quanto", "orcamento", "valor", "€"],
        response:
          "Manutenção básica (relva + poda): €60–€100. Jardim maior ou árvores: €120–€200. Qual é o tamanho do jardim e zona?",
      },
      {
        keywords: ["poda", "arvore", "sebes", "cortar"],
        response:
          "Poda de árvores e sebes disponível. Preço depende do tamanho e número de plantas. Qual é a tua zona?",
      },
      {
        keywords: ["relva", "corte", "aparar", "grama"],
        response:
          "Corte de relva a partir de €40. Corte regular com desconto mensal. Qual é a área aproximada?",
      },
      {
        keywords: ["marcar", "agendar", "quando", "visita"],
        response:
          "Disponibilidade este fim de semana ou semana que vem. Qual é a zona e o que precisas?",
      },
    ],
    defaultResponse:
      "Olá! Assistente de jardinagem. Para orçamento ou marcação, estou disponível. 🌿 O que precisas?",
  },
  {
    slug: "handyman",
    businessName: "Handyman",
    responses: [
      {
        keywords: ["preco", "custo", "quanto", "orcamento", "valor", "€"],
        response:
          "Montagem de móveis: €40–€80. Candeeiro/tomada: €35. Pintura divisão: €80–€150. Hora de trabalho: €35/h. O que precisas?",
      },
      {
        keywords: ["moveis", "ikea", "montar", "monagem", "armario"],
        response:
          "Montagem de móveis disponível! IKEA e outras marcas. €40–€80 consoante o número de peças. Quando?",
      },
      {
        keywords: ["pintura", "pintar", "parede", "teto"],
        response:
          "Pintura de divisões a partir de €80 (material incluído). Para orçamento exato, qual é a área e que cor?",
      },
      {
        keywords: ["marcar", "agendar", "quando", "visita"],
        response:
          "Disponibilidade este sábado de manhã ou durante a semana à tarde. Qual é a zona e o serviço?",
      },
    ],
    defaultResponse:
      "Olá! Assistente handyman. Para qualquer trabalho em casa, estou aqui. 🔨 O que precisas?",
  },
];
