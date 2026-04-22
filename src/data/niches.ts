export interface ChatMessage {
  side: "client" | "business";
  text: string;
  delay?: number;
}

export interface NicheData {
  slug: string;
  name: string;
  emoji: string;
  heroKicker: string;
  heroH1: string;
  anchorPhrase: string;
  pains: [string, string, string];
  benefits: [string, string, string, string];
  roiDefaults: {
    callsLostPerWeek: number;
    avgTicket: number;
    conversionRate: number;
  };
  conversation: ChatMessage[];
  faqs: { q: string; a: string }[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
    result: string;
  };
}

export const niches: NicheData[] = [
  {
    slug: "nails",
    name: "Nails",
    emoji: "💅",
    heroKicker: "Para nail artists que não conseguem responder a tempo",
    heroH1: "A fazer unhas. A IA marca a próxima cliente.",
    anchorPhrase:
      "Quantas clientes te aparecem em horas livres porque ninguém respondeu à mensagem das 22h?",
    pains: [
      "Clientes mandam mensagem à noite e esperam resposta — se não responderes, marcam noutro sítio.",
      "Gerir agenda manual entre sessões é stressante e leva a erros.",
      "Horas livres que podiam estar preenchidas ficam por preencher.",
    ],
    benefits: [
      "Responde a pedidos de marcação 24h por dia, 7 dias por semana.",
      "Agenda só com horários livres — sem duplas marcações.",
      "Lista de espera automática para cancelamentos de última hora.",
      "Site com galeria de trabalhos que converte visitas em clientes.",
    ],
    roiDefaults: { callsLostPerWeek: 10, avgTicket: 38, conversionRate: 40 },
    conversation: [
      { side: "client", text: "Olá! Têm vaga para unhas de gel esta semana? 💅" },
      {
        side: "business",
        text: "Olá! Temos sábado às 10h ou às 14h disponíveis. É para colocar de novo ou é fill?",
      },
      { side: "client", text: "Colocar de novo, quero um nude com glitter nas pontas." },
      {
        side: "business",
        text: "Lindo! Esse estilo fica muito bem 😍 Sábado às 10h ou às 14h — qual preferes?",
      },
      { side: "client", text: "Às 10h por favor!" },
      {
        side: "business",
        text: "Marcado! Sábado às 10h — gel nude com glitter nas pontas. Valor: €35. Manda foto de referência se quiseres que eu prepare as cores 🌸",
      },
      { side: "client", text: "Vou mandar já uma foto de inspiração!" },
      {
        side: "business",
        text: "Perfeito, fico à espera 💕 Até sábado!",
      },
    ],
    faqs: [
      {
        q: "Posso mostrar os meus trabalhos no site?",
        a: "Sim, o site inclui galeria de fotos otimizada para mobile.",
      },
      {
        q: "A IA consegue gerir lista de espera?",
        a: "Sim, no plano Crescer os cancelamentos abrem vaga automaticamente à próxima na lista.",
      },
    ],
  },
  {
    slug: "eletricista",
    name: "Eletricista",
    emoji: "⚡",
    heroKicker: "Para eletricistas que perdem urgências todos os dias",
    heroH1: "Estás em obra. O cliente urgente liga. A IA atende por ti.",
    anchorPhrase:
      "Estás em obra e o cliente urgente liga. Quem atende primeiro fica com o trabalho.",
    pains: [
      "Em obra não podes atender — urgências vão parar ao concorrente que atende.",
      "Clientes com problemas elétricos não esperam — ligam ao seguinte em segundos.",
      "Orçamentos demoram dias — quando chegas, o cliente já escolheu outro.",
    ],
    benefits: [
      "IA atende urgências 24/7 e qualifica o problema antes de te alertar.",
      "Orçamento automático baseado nos teus preços enviado em minutos.",
      "Marcação entra no calendário sem tu precisares de parar o que estás a fazer.",
      "Site aparece em pesquisas locais de urgências elétricas.",
    ],
    roiDefaults: { callsLostPerWeek: 10, avgTicket: 120, conversionRate: 50 },
    conversation: [
      {
        side: "client",
        text: "Bom dia! Tenho um quadro elétrico a disparar sem parar. É urgente!",
      },
      {
        side: "business",
        text: "Bom dia! Percebido 🔧 Quadro a disparar pode ser sobrecarga ou curto-circuito. Tens alguma tomada ou aparelho que ligaste recentemente?",
      },
      { side: "client", text: "Liguei uma máquina de lavar nova ontem." },
      {
        side: "business",
        text: "Isso ajuda muito — provável sobrecarga no circuito da cozinha. Qual é o teu código postal?",
      },
      { side: "client", text: "1200-123, Lisboa centro." },
      {
        side: "business",
        text: "Temos técnico disponível hoje entre as 14h–17h na tua zona. Deslocação + diagnóstico €65 (creditado se houver reparação). Confirmo a visita?",
      },
      { side: "client", text: "Sim! Por favor, está tudo sem luz." },
      {
        side: "business",
        text: "✅ Agendado para hoje. O técnico liga 20 min antes de chegar. SMS de confirmação enviado. Aguenta!",
      },
    ],
    faqs: [
      {
        q: "A IA consegue triagem de urgência elétrica?",
        a: "Sim, identificamos palavras-chave de urgência e escalamos imediatamente com alerta para o teu telemóvel.",
      },
      {
        q: "Posso configurar diferentes preços por tipo de serviço?",
        a: "Sim, treinamos a IA com a tua tabela de preços.",
      },
      {
        q: "Funciona de noite?",
        a: "Sim, 24/7. Podes configurar resposta automática para urgências noturnas com tarifa extra.",
      },
    ],
  },
  {
    slug: "canalizador",
    name: "Canalizador",
    emoji: "🔧",
    heroKicker: "Para canalizadores que trabalham sem parar",
    heroH1: "Debaixo do lavatório. A IA agenda o próximo cliente.",
    anchorPhrase:
      "Urgências noturnas — atendes? Quem atende, fica com o serviço.",
    pains: [
      "Estás no telhado ou debaixo do lavatório — o telemóvel toca e não podes atender.",
      "Urgências de fim de semana vão para quem atende primeiro.",
      "Clientes com fugas não esperam — passam ao seguinte em segundos.",
    ],
    benefits: [
      "IA atende urgências de canalização 24/7 incluindo fins de semana.",
      "Orçamento automático por tipo de serviço enviado em minutos.",
      "Agendamento direto no teu Google Calendar.",
      "Site otimizado para pesquisas locais de canalizador de urgência.",
    ],
    roiDefaults: { callsLostPerWeek: 10, avgTicket: 100, conversionRate: 50 },
    conversation: [
      {
        side: "client",
        text: "Boa tarde! Tenho uma torneira a pingar há 2 dias. Conseguem vir ver? 🔧",
      },
      {
        side: "business",
        text: "Boa tarde! Claro, tratamos disso. É torneira de cozinha ou de casa de banho?",
      },
      { side: "client", text: "Casa de banho, a misturadora." },
      {
        side: "business",
        text: "Entendido. Na maioria dos casos é a vedante ou o cartucho — reparação rápida. Qual é a morada?",
      },
      { side: "client", text: "Rua do Almada 45, Lisboa. Preferência de manhã." },
      {
        side: "business",
        text: "Amanhã às 9h ou às 11h — qual prefere?",
      },
      { side: "client", text: "Às 9h, muito obrigado 🙏" },
      {
        side: "business",
        text: "✅ Amanhã às 9h na Rua do Almada 45. Deslocação €30 + peças se necessário. SMS enviado. Até amanhã!",
      },
    ],
    faqs: [
      {
        q: "E urgências de madrugada?",
        a: "A IA responde 24/7. Podes configurar uma tarifa de urgência noturna que é comunicada automaticamente.",
      },
      {
        q: "Posso ter múltiplos técnicos na agenda?",
        a: "Sim, no plano Total o CRM suporta múltiplas agendas.",
      },
    ],
    testimonial: {
      quote:
        "Antes passava as noites a responder WhatsApps. Agora o sistema responde sozinho e agenda tudo. No primeiro mês tive 8 clientes novos sem fazer nada diferente.",
      name: "João Martins",
      role: "Canalizador · Lisboa",
      result: "+8 clientes no 1.º mês",
    },
  },
  {
    slug: "climatizacao",
    name: "Climatização",
    emoji: "❄️",
    heroKicker: "Para empresas de AC que explodem no verão",
    heroH1: "No pico do verão, toda a gente liga. A IA atende todas.",
    anchorPhrase:
      "No verão, toda a gente liga ao mesmo tempo. Quanto valem as chamadas que perdes?",
    pains: [
      "No verão o volume de chamadas é impossível de gerir — perdes dezenas de leads por dia.",
      "Os clientes de manutenção anual nunca se lembram de ligar — e tu também não te lembras deles.",
      "Orçamentos para instalação demoram — o cliente contrata quem responde primeiro.",
    ],
    benefits: [
      "IA gere picos de chamadas de verão sem perder um único contacto.",
      "Reativação automática de clientes para manutenção anual.",
      "Orçamento de instalação enviado automaticamente com base na área e tipo.",
      "Site aparece em pesquisas locais de ar condicionado instalação e manutenção.",
    ],
    roiDefaults: { callsLostPerWeek: 10, avgTicket: 160, conversionRate: 40 },
    conversation: [
      {
        side: "client",
        text: "Olá! O meu AC está a fazer um barulho estranho e a pingar água no chão 😕",
      },
      {
        side: "business",
        text: "Olá! Pingar água costuma ser a mangueira de condensados entupida — solução rápida. O barulho é mais vibração ou tipo click?",
      },
      { side: "client", text: "Vibração, principalmente quando arranca." },
      {
        side: "business",
        text: "Pode ser suporte solto ou filtro sujo. Qual é a marca e o código postal?",
      },
      { side: "client", text: "Daikin, 4 anos. 3810-123, Aveiro." },
      {
        side: "business",
        text: "Tenho técnico disponível hoje entre as 17h–19h na tua zona. Deslocação + diagnóstico €45 (creditado se houver reparação). Confirmo?",
      },
      { side: "client", text: "Sim, perfeito! Já está a dar cabo dos nervos 😅" },
      {
        side: "business",
        text: "✅ Agendado para hoje 17h–19h! SMS enviado. O técnico liga 15 min antes. Ficará como novo 👌",
      },
    ],
    faqs: [
      {
        q: "Funciona bem no pico do verão com muitos pedidos?",
        a: "Sim, a IA escala automaticamente — não há limite de conversas simultâneas.",
      },
      {
        q: "Posso programar lembretes de manutenção anuais?",
        a: "Sim, no plano Crescer e Total configuramos envio automático X meses após o último serviço.",
      },
    ],
  },
  {
    slug: "limpezas",
    name: "Limpezas",
    emoji: "🧹",
    heroKicker: "Para empresas de limpeza que perdem contratos",
    heroH1: "A limpar. A IA fecha o próximo contrato.",
    anchorPhrase:
      "Quantos orçamentos nunca viraram contrato porque demoraste demais a responder?",
    pains: [
      "Pedidos de orçamento ficam sem resposta durante horas — o cliente já contratou outra empresa.",
      "Clientes recorrentes cancelam sem aviso e nunca mais voltam.",
      "Gerir agendamento de múltiplas equipas manualmente é um caos.",
    ],
    benefits: [
      "Orçamentos automáticos por tipo de limpeza (residencial, comercial, pós-obra).",
      "Confirmação automática de marcações recorrentes.",
      "Reativação de clientes que não contactam há mais de 30 dias.",
      "Site que aparece em pesquisas locais de empresa de limpeza.",
    ],
    roiDefaults: { callsLostPerWeek: 10, avgTicket: 90, conversionRate: 28 },
    conversation: [
      {
        side: "client",
        text: "Bom dia! Precisava de orçamento para limpeza pós-obra, apartamento T3.",
      },
      {
        side: "business",
        text: "Bom dia! Para pós-obra T3 o valor base é €180–€220 consoante o estado. É obra de remodelação total ou parcial?",
      },
      { side: "client", text: "Remodelação de casas de banho e cozinha." },
      {
        side: "business",
        text: "Entendido — pó de reboco e rejunte pode ser intenso. Tem muito material de obra ainda no interior?",
      },
      { side: "client", text: "Já tiraram tudo, só falta limpar." },
      {
        side: "business",
        text: "Perfeito. Orçamento firme: €195 para T3 pós-obra remodelação parcial, inclui vidros e terraço. Semana que vem em Alfama — quinta ou sexta?",
      },
      { side: "client", text: "Quinta de manhã se possível." },
      {
        side: "business",
        text: "✅ Quinta de manhã confirmado! Enviamos contrato e confirmação por email. Obrigada 🧹",
      },
    ],
    faqs: [
      {
        q: "A IA consegue fazer orçamentos de limpeza pós-obra?",
        a: "Sim, treinamos com os teus preços por tipologia e a IA faz a estimativa automaticamente.",
      },
      {
        q: "E para clientes com limpeza recorrente semanal?",
        a: "No plano Crescer geres contratos recorrentes com confirmação automática.",
      },
    ],
  },
  {
    slug: "jardinagem",
    name: "Jardinagem",
    emoji: "🌿",
    heroKicker: "Para jardineiros que perdem trabalho sazonal",
    heroH1: "A jardinar. A IA lembra o cliente da próxima poda.",
    anchorPhrase:
      "Os clientes esquecem-se da poda. E se a IA enviasse o lembrete certo, no mês certo?",
    pains: [
      "Clientes sazonais esquecem-se de ligar — e tu esqueces-te deles.",
      "Pedidos de manutenção ficam sem resposta quando estás no campo.",
      "No pico da primavera e do verão não consegues gerir toda a procura.",
    ],
    benefits: [
      "Lembretes automáticos sazonais aos clientes na altura certa do ano.",
      "Resposta imediata a pedidos mesmo quando estás em campo.",
      "Agendamento recorrente para clientes de manutenção mensal.",
      "Site que aparece em pesquisas de jardineiro e paisagismo local.",
    ],
    roiDefaults: { callsLostPerWeek: 10, avgTicket: 90, conversionRate: 30 },
    conversation: [
      {
        side: "client",
        text: "Olá! Precisava de alguém para tratar do jardim — poda e corte de relva.",
      },
      {
        side: "business",
        text: "Olá! Claro 🌿 Para dar orçamento: qual a morada e tem árvores de grande porte ou só arbustos?",
      },
      { side: "client", text: "Cascais. 2 oliveiras pequenas e bastante relva." },
      {
        side: "business",
        text: "Estimativa: poda oliveiras + corte de relva €85–€110 consoante o tamanho da área. Precisa só desta vez ou quer manutenção mensal?",
      },
      { side: "client", text: "Mensal seria ideal, o jardim fica sempre a monte." },
      {
        side: "business",
        text: "Ótimo! Com contrato mensal fica €75/visita (desconto de fidelização). Posso este sábado de manhã para começar — interessa?",
      },
      { side: "client", text: "Sábado de manhã perfeito! A que horas?" },
      {
        side: "business",
        text: "Às 9h30. Envio confirmação por SMS e fica agendado todos os meses na mesma altura 🌳",
      },
    ],
    faqs: [
      {
        q: "Consegues configurar lembretes sazonais automáticos?",
        a: "Sim, programamos envio de mensagem X meses após o último serviço para cada cliente.",
      },
      {
        q: "E para contratos de manutenção mensal?",
        a: "No plano Crescer geres contratos recorrentes com confirmação automática mensal.",
      },
    ],
  },
  {
    slug: "handyman",
    name: "Handyman",
    emoji: "🔨",
    heroKicker: "Para handymen que perdem trabalhos por não atender",
    heroH1: "Em obra. A IA fecha o próximo serviço.",
    anchorPhrase:
      "Quantos pequenos trabalhos perdes porque parecem pequenos demais para responder?",
    pains: [
      "Trabalhos pequenos ficam por fazer porque não vales a pena atender o telefone — mas acumulam.",
      "Sem site, os clientes não te encontram quando pesquisam no Google.",
      "Clientes satisfeitos não deixam avaliação Google — perdes credibilidade.",
    ],
    benefits: [
      "Resposta imediata a todos os pedidos, mesmo os pequenos.",
      "Site profissional que aparece em pesquisas locais.",
      "Pedido automático de avaliação Google após cada serviço.",
      "Orçamento rápido por tipo de trabalho enviado automaticamente.",
    ],
    roiDefaults: { callsLostPerWeek: 10, avgTicket: 70, conversionRate: 30 },
    conversation: [
      {
        side: "client",
        text: "Boa tarde! Precisava de ajuda para montar uns móveis IKEA e instalar um candeeiro.",
      },
      {
        side: "business",
        text: "Boa tarde! Claro 🔨 Quantas peças de mobiliário são? E o candeeiro é de parede ou de teto?",
      },
      { side: "client", text: "Uma cama, uma cómoda e o candeeiro é de teto." },
      {
        side: "business",
        text: "Perfeito. Estimativa: €75–€95 tudo incluído. Precisas que eu traga as ferramentas ou tens de construção?",
      },
      { side: "client", text: "Não tenho nada, precisas de trazer." },
      {
        side: "business",
        text: "Sem problema, trago tudo. Qual é a tua zona?",
      },
      { side: "client", text: "Amadora." },
      {
        side: "business",
        text: "Trabalho nessa zona 👍 Tenho este sábado de manhã disponível. Às 10h serve?",
      },
      { side: "client", text: "Sábado às 10h é ideal, obrigado!" },
      {
        side: "business",
        text: "✅ Sábado às 10h confirmado. Manda a morada exata por aqui e vemo-nos lá! 🔧",
      },
    ],
    faqs: [
      {
        q: "Vale a pena automatizar para trabalhos pequenos?",
        a: "Sim — cada trabalho pequeno recorrente gera fidelização. E a IA não distingue, responde a tudo.",
      },
      {
        q: "Posso pedir avaliações Google automaticamente?",
        a: "Sim, no plano Total enviamos pedido de avaliação 1h após o serviço.",
      },
    ],
    testimonial: {
      quote:
        "Estava cético. Mas em 7 dias estava online e no segundo mês já tinha pago o setup com leads novos. Devia ter feito isto há mais tempo.",
      name: "Rui Costa",
      role: "Handyman · Coimbra",
      result: "Setup pago em 2 meses",
    },
  },
];

export function getNicheBySlug(slug: string): NicheData | undefined {
  return niches.find((n) => n.slug === slug);
}

export const defaultNiche = niches.find((n) => n.slug === "eletricista") ?? niches[0];
