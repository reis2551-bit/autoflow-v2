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
    slug: "barbearia",
    name: "Barbearia",
    emoji: "💈",
    heroKicker: "Para barbeiros que não param de trabalhar",
    heroH1: "Estás a cortar. O telemóvel toca. A Autoflow atende por ti.",
    anchorPhrase:
      "Quantas marcações perdes por mês porque não consegues responder durante um corte?",
    pains: [
      "Durante os cortes não podes atender — os clientes ligam e desligam sem esperar.",
      "As marcações de último momento nunca chegam a tempo porque estás ocupado.",
      "Passar as noites a responder WhatsApps é tempo que não tens.",
    ],
    benefits: [
      "WhatsApp responde imediatamente, mesmo durante um corte.",
      "Marcações automáticas entram direto no teu calendário.",
      "SMS lembra o cliente 24h antes — chega de falhas.",
      "Site aparece no Google Maps quando alguém pesquisa barbeiro perto.",
    ],
    roiDefaults: { callsLostPerWeek: 4, avgTicket: 22, conversionRate: 25 },
    conversation: [
      { side: "client", text: "Olá! Têm vaga hoje à tarde?" },
      {
        side: "business",
        text: "Olá! Temos disponibilidade hoje às 17h ou às 18h30. Qual preferes?",
      },
      { side: "client", text: "17h está bem 👍" },
      {
        side: "business",
        text: "Perfeito! Marcação confirmada para hoje às 17h. Receberás um SMS de lembrete amanhã. Até já! ✂️",
      },
    ],
    faqs: [
      {
        q: "A IA consegue gerir o meu horário de cortes?",
        a: "Sim. Sincroniza com o teu Google Calendar e só oferece horários livres.",
      },
      {
        q: "E se quiser bloquear um dia de folga?",
        a: "Bloqueia no Google Calendar e a IA deixa de oferecer esse horário automaticamente.",
      },
      {
        q: "Os meus clientes habituais continuam a falar para o mesmo número?",
        a: "Sim, ficas com o mesmo número WhatsApp. Eles não notam diferença.",
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
    slug: "cabeleireiro",
    name: "Cabeleireiro",
    emoji: "✂️",
    heroKicker: "Para cabeleireiros que perdem marcações todos os dias",
    heroH1: "A trabalhar com as mãos. O WhatsApp responde sozinho.",
    anchorPhrase:
      "Quantas marcações perdes por mês porque não consegues responder durante um tratamento?",
    pains: [
      "Com as mãos ocupadas não consegues responder — os clientes passam para a concorrência.",
      "As confirmações de marcação custam-te horas de chamadas semanais.",
      "Clientes que faltam sem avisar destroem o teu dia.",
    ],
    benefits: [
      "Resposta automática 24/7 — nenhuma cliente fica sem resposta.",
      "Confirmação automática por SMS reduz falhas em 80%.",
      "Reativação de clientes antigas que não voltam há meses.",
      "Site profissional que aparece quando alguém pesquisa cabeleireiro perto.",
    ],
    roiDefaults: { callsLostPerWeek: 3, avgTicket: 35, conversionRate: 28 },
    conversation: [
      { side: "client", text: "Boa tarde! Têm disponibilidade esta semana?" },
      {
        side: "business",
        text: "Boa tarde! Temos quinta às 15h ou sexta às 11h. Qual funciona?",
      },
      { side: "client", text: "Quinta às 15h perfeito!" },
      {
        side: "business",
        text: "Marcado! Quinta às 15h. Enviarei SMS de lembrete na véspera. Obrigada 😊",
      },
    ],
    faqs: [
      {
        q: "A IA fala em nome do meu salão?",
        a: "Sim, treinamos com o nome do teu salão, os teus serviços e o teu tom.",
      },
      {
        q: "Posso ver todas as marcações num só sítio?",
        a: "Sim, no plano Crescer tens um painel com todas as conversas e marcações.",
      },
    ],
    testimonial: {
      quote:
        "As clientes confirmam a marcação pelo WhatsApp sem eu ligar. As falhas caíram 80%. Poupei horas por semana que gastava a perseguir confirmações.",
      name: "Sara Ferreira",
      role: "Cabeleireira · Porto",
      result: "−80% falhas nas marcações",
    },
  },
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
    roiDefaults: { callsLostPerWeek: 3, avgTicket: 28, conversionRate: 30 },
    conversation: [
      { side: "client", text: "Olá, têm vaga para unhas de gel esta semana? 💅" },
      {
        side: "business",
        text: "Olá! Temos sábado às 10h ou às 14h. Tens preferência?",
      },
      { side: "client", text: "Sábado às 10h é perfeito!" },
      {
        side: "business",
        text: "Confirmado! Sábado às 10h para unhas de gel. Manda foto de referência se quiseres 🌸",
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
    roiDefaults: { callsLostPerWeek: 4, avgTicket: 120, conversionRate: 35 },
    conversation: [
      {
        side: "client",
        text: "Bom dia! Tenho um quadro elétrico a disparar sem parar. É urgente!",
      },
      {
        side: "business",
        text: "Bom dia! Entendido — quadro a disparar pode ser sobrecarga ou curto-circuito. Qual é o teu código postal?",
      },
      { side: "client", text: "1200-123, Lisboa centro." },
      {
        side: "business",
        text: "Temos técnico disponível hoje entre as 14h e as 17h na tua zona. Deslocação + diagnóstico €65 (creditado na reparação). Confirmo?",
      },
      { side: "client", text: "Sim, confirmo!" },
      {
        side: "business",
        text: "✅ Agendado para hoje. O técnico liga 20 min antes de chegar. SMS enviado para confirmação.",
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
    roiDefaults: { callsLostPerWeek: 3, avgTicket: 95, conversionRate: 32 },
    conversation: [
      {
        side: "client",
        text: "Boa tarde, tenho uma torneira a pingar há 2 dias. Conseguem vir ver? 🔧",
      },
      {
        side: "business",
        text: "Boa tarde! Claro 👍 Qual é a morada e prefere manhã ou tarde?",
      },
      { side: "client", text: "Rua do Almada 45, Lisboa. De manhã se puder." },
      {
        side: "business",
        text: "Perfeito! Amanhã às 9h ou às 11h — qual prefere?",
      },
      { side: "client", text: "Às 9h está bem 🙏" },
      {
        side: "business",
        text: "✅ Agendado para amanhã às 9h na Rua do Almada 45. SMS de confirmação enviado!",
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
    roiDefaults: { callsLostPerWeek: 5, avgTicket: 140, conversionRate: 30 },
    conversation: [
      {
        side: "client",
        text: "Olá, o meu ar condicionado está a fazer um barulho estranho e a pingar água.",
      },
      {
        side: "business",
        text: "Olá! Pingar água é normalmente a mangueira de condensados. Para marcar o técnico: código postal, marca do aparelho e se é para hoje ou amanhã?",
      },
      { side: "client", text: "3810-123. Daikin, 4 anos. Hoje se der." },
      {
        side: "business",
        text: "Tenho o técnico disponível hoje entre 17h e 19h na tua zona. Deslocação + diagnóstico €45 (creditado na reparação). Confirmo?",
      },
      { side: "client", text: "Sim, confirmo." },
      {
        side: "business",
        text: "✅ Agendado! SMS a caminho. O técnico liga 15 min antes. Obrigado pela preferência.",
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
    roiDefaults: { callsLostPerWeek: 3, avgTicket: 70, conversionRate: 20 },
    conversation: [
      {
        side: "client",
        text: "Bom dia! Precisava de um orçamento para limpeza pós-obra, apartamento T3.",
      },
      {
        side: "business",
        text: "Bom dia! Para pós-obra T3 em Lisboa, o valor base é €180–€220 consoante o estado. Qual é a morada e quando seria?",
      },
      { side: "client", text: "Alfama, semana que vem de preferência." },
      {
        side: "business",
        text: "Temos quinta ou sexta disponíveis. Envio orçamento detalhado por email. Qual prefere?",
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
    roiDefaults: { callsLostPerWeek: 2, avgTicket: 60, conversionRate: 25 },
    conversation: [
      {
        side: "client",
        text: "Olá! Precisava de alguém para tratar do jardim, principalmente poda e relva.",
      },
      {
        side: "business",
        text: "Olá! Claro. Para orçamento preciso do tamanho aproximado do jardim e da morada. Tem árvores de grande porte?",
      },
      { side: "client", text: "Cascais. Jardim médio, 2 árvores pequenas." },
      {
        side: "business",
        text: "Estimativa para poda + relva: €80–€120. Tenho disponibilidade este fim de semana. Interessa?",
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
    roiDefaults: { callsLostPerWeek: 3, avgTicket: 55, conversionRate: 22 },
    conversation: [
      {
        side: "client",
        text: "Boa tarde! Precisava de ajuda para montar uns móveis IKEA e instalar um candeeiro.",
      },
      {
        side: "business",
        text: "Boa tarde! Móveis + candeeiro, estimativa €60–€80 consoante o número de peças. Qual é a tua zona?",
      },
      { side: "client", text: "Amadora." },
      {
        side: "business",
        text: "Trabalho nessa zona. Tenho este sábado de manhã livre. Interessa?",
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

export const defaultNiche = niches[0]; // barbearia
