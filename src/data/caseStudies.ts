export interface CaseMetric {
  label: string;
  before: string;
  after: string;
  delta?: string;
}

export interface CaseStudy {
  slug: string;
  nicheSlug: string;
  clientName: string;
  role: string;
  location: string;
  plan: string;
  setupCost: number;
  headline: string;
  subheadline: string;
  metrics: CaseMetric[];
  narrative: {
    week1: string;
    weeks2to3: string;
    month1: string;
    months2to3: string;
  };
  quote: string;
  financialBreakdown: {
    revenueExtra: number;
    planCost: number;
    setupCost: number;
    netProfit: number;
    paybackDays: number;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "barbearia-antonio",
    nicheSlug: "barbearia",
    clientName: "Barbearia do António",
    role: "Barbeiro",
    location: "Lisboa, Intendente",
    plan: "Crescer",
    setupCost: 349,
    headline: "De 0 a +8 clientes novos no primeiro mês — sem mudar nada no negócio.",
    subheadline:
      "António tem uma barbearia há 11 anos no Intendente. Bom trabalho, clientes fiéis. Mas perdia marcações todos os dias porque estava com as mãos ocupadas.",
    metrics: [
      {
        label: "Chamadas perdidas/semana",
        before: "6–8",
        after: "0",
        delta: "−100%",
      },
      {
        label: "Falhas nas marcações",
        before: "4–5/mês",
        after: "0–1/mês",
        delta: "−85%",
      },
      {
        label: "Clientes novos no mês",
        before: "2–3",
        after: "10–12",
        delta: "+300%",
      },
      {
        label: "Horas/semana em WhatsApp",
        before: "6–8h",
        after: "0h",
        delta: "−100%",
      },
      {
        label: "Avaliações Google",
        before: "12",
        after: "34",
        delta: "+183%",
      },
    ],
    narrative: {
      week1:
        "Semana 1: Setup em 7 dias. António passou 30 min no briefing inicial, enviou logo + 4 fotos do espaço. No dia 7 estava online com site, WhatsApp IA configurado com os seus preços (corte €12, barba €8, combo €18) e o tom casual que usa com os clientes.",
      weeks2to3:
        "Semanas 2–3: As primeiras marcações automáticas começaram a entrar. António via no painel conversas que antes perderia — mensagens às 22h, pedidos de domingo de manhã. A IA respondia em segundos e confirmava a marcação. Ele só aparecia para cortar.",
      month1:
        "Mês 1: +8 clientes novos. Zero falhas de marcação (o SMS de lembrete 24h antes eliminou as faltas). As noites que passava a responder WhatsApps desapareceram. O Google Business Profile otimizado começou a trazer tráfego orgânico.",
      months2to3:
        "Meses 2–3: O sistema de pedido automático de avaliação Google (1h após cada serviço) fez as avaliações passar de 12 para 34. Novos clientes mencionam que encontraram a barbearia no Google. O setup pagou-se em 6 semanas.",
    },
    quote:
      "Não percebo como vivi 11 anos sem isto. Tenho mais clientes, deixei de passar as noites ao telemóvel e o meu negócio aparece no Google quando antes não aparecia. Paguei o setup em 6 semanas.",
    financialBreakdown: {
      revenueExtra: 200,
      planCost: 149,
      setupCost: 349,
      netProfit: 51,
      paybackDays: 42,
    },
  },
  {
    slug: "silva-eletricista",
    nicheSlug: "eletricista",
    clientName: "Silva Elétrica",
    role: "Eletricista",
    location: "Porto, Matosinhos",
    plan: "Crescer",
    setupCost: 349,
    headline: "De urgências perdidas a €2.100/mês em receita nova — em 60 dias.",
    subheadline:
      "Pedro Silva trabalha sozinho e estava em obra 9h por dia. Cada chamada perdida era uma urgência elétrica que ia para outro eletricista.",
    metrics: [
      {
        label: "Urgências atendidas/semana",
        before: "2–3",
        after: "9–12",
        delta: "+280%",
      },
      {
        label: "Tempo de resposta",
        before: "4–8h",
        after: "<2 min",
        delta: "−99%",
      },
      {
        label: "Orçamentos enviados/semana",
        before: "1–2",
        after: "7–9",
        delta: "+350%",
      },
      {
        label: "Taxa de conversão",
        before: "40%",
        after: "68%",
        delta: "+28pp",
      },
      {
        label: "Receita mensal nova",
        before: "€0",
        after: "+€2.100",
        delta: "+€2.100",
      },
    ],
    narrative: {
      week1:
        "Semana 1: Pedro estava cético — 'eu trabalho sozinho, não preciso de sistemas'. O setup levou 7 dias. Configurámos a IA com a sua tabela de preços, fluxo de urgência (palavras-chave: quadro a disparar, sem luz, faísca) e triagem por código postal.",
      weeks2to3:
        "Semanas 2–3: Primeira urgência noturna atendida automaticamente — cliente com quadro a disparar às 23h. A IA qualificou, enviou orçamento de diagnóstico e Pedro recebeu alerta. Fechou o serviço no dia seguinte: €280.",
      month1:
        "Mês 1: 7 orçamentos novos que antes perderia. Taxa de conversão subiu porque a resposta em <2 min vs. 4–8h faz diferença enorme em urgências. Pedro começou a recusar trabalho por falta de agenda — problema de qualidade.",
      months2to3:
        "Meses 2–3: €2.100/mês em receita incremental. Pedro está a pensar contratar um ajudante. O site aparece em primeiro lugar em pesquisas de 'eletricista urgência Matosinhos'.",
    },
    quote:
      "Estava sempre em obra a perder chamadas. Agora a IA triagem as urgências, envia orçamento e eu só apareço para fazer o trabalho. Em 2 meses tive mais trabalho do que no semestre anterior.",
    financialBreakdown: {
      revenueExtra: 2100,
      planCost: 149,
      setupCost: 349,
      netProfit: 1951,
      paybackDays: 5,
    },
  },
  {
    slug: "climafacil-ac",
    nicheSlug: "climatizacao",
    clientName: "Climafácil",
    role: "Empresa de Climatização",
    location: "Lisboa, Oeiras",
    plan: "Total",
    setupCost: 590,
    headline: "Pico de verão gerido sem contratar: +42 leads em julho, 0 perdidos.",
    subheadline:
      "A Climafácil tinha 2 técnicos e no verão recebia 15–20 chamadas por dia que não conseguia atender. Cada chamada perdida era uma instalação de €400–€600.",
    metrics: [
      {
        label: "Chamadas perdidas no verão",
        before: "8–12/dia",
        after: "0",
        delta: "−100%",
      },
      {
        label: "Leads qualificados/mês",
        before: "15–20",
        after: "42",
        delta: "+160%",
      },
      {
        label: "Taxa de resposta",
        before: "35%",
        after: "100%",
        delta: "+65pp",
      },
      {
        label: "Orçamentos de instalação",
        before: "8/mês",
        after: "28/mês",
        delta: "+250%",
      },
      {
        label: "Receita julho vs. ano anterior",
        before: "€8.200",
        after: "€18.900",
        delta: "+€10.700",
      },
    ],
    narrative: {
      week1:
        "Semana 1: Setup em 7 dias com foco no fluxo de verão — triagem por tipo (instalação vs. manutenção vs. avaria), orçamento automático por BTU e zona, e calendário de técnicos sincronizado.",
      weeks2to3:
        "Semanas 2–3: Primeiro pico de calor com o sistema ativo — 23 pedidos num dia. A IA atendeu todos, qualificou e distribuiu pelos dois técnicos. Zero chamadas perdidas.",
      month1:
        "Mês 1 (junho): 42 leads vs. 18 do ano anterior. A Rececionista IA (plano Total) começou a atender chamadas de voz — clientes idosos que preferem ligar recebem a mesma qualidade de resposta.",
      months2to3:
        "Meses 2–3 (julho–agosto): +€10.700 em receita vs. verão anterior. O CRM mostrou que 30% dos clientes de instalação voltaram para manutenção — seguimento automático funcionou.",
    },
    quote:
      "No verão anterior perdíamos metade das chamadas. Este ano a IA atendeu todas. Dobrámos a faturação de julho sem contratar ninguém. O CRM ainda nos diz quem precisa de manutenção anual.",
    financialBreakdown: {
      revenueExtra: 10700,
      planCost: 379,
      setupCost: 590,
      netProfit: 10321,
      paybackDays: 2,
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
