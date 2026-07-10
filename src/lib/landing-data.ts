import {
  BookOpen,
  CheckCircle2,
  Target,
  Layers,
  Zap,
  ListChecks,
  Clock,
  PenTool,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: BookOpen,
    title: "Teoria Completa",
    description: "Todo o conteúdo de Português do edital explicado em linguagem direta e didática.",
  },
  {
    icon: CheckCircle2,
    title: "Questões Comentadas",
    description: "Mais de 99 questões CEBRASPE com resolução detalhada para fixar o aprendizado.",
  },
  {
    icon: Target,
    title: "Revisão Estratégica",
    description: "Foco cirúrgico nos temas mais recorrentes das provas PMMA e BMMA.",
  },
  {
    icon: Layers,
    title: "Assuntos Mais Cobrados",
    description: "Priorização inteligente dos tópicos com maior peso no edital.",
  },
  {
    icon: PenTool,
    title: "Linguagem Objetiva",
    description: "Nada de rodeios. Explicações claras que economizam seu tempo de estudo.",
  },
  {
    icon: ListChecks,
    title: "Método Organizado",
    description: "Estrutura pensada para uma progressão lógica do básico ao avançado.",
  },
  {
    icon: Clock,
    title: "Estudo Otimizado",
    description: "Rotina de estudo simplificada com resumos e mapas mentais.",
  },
  {
    icon: Zap,
    title: "Material 100% Autoral",
    description: "Conteúdo criado manualmente pelo Prof. Maurílio Alencar, sem cópias.",
  },
];

export const CURRICULUM: string[] = [
  "Gramática",
  "Ortografia",
  "Pontuação",
  "Concordância",
  "Regência",
  "Crase",
  "Interpretação de Texto",
  "Classes Gramaticais",
  "Sintaxe",
  "Semântica",
  "Questões Comentadas",
];

export const OTHER_MATERIALS = [
  "Conteúdo genérico",
  "Muito texto sem foco",
  "Poucas explicações",
  "Sem organização clara",
  "Sem estratégia de estudo",
];

export const OUR_EBOOK = [
  "Conteúdo direcionado ao edital",
  "Organização lógica e progressiva",
  "Questões comentadas em detalhe",
  "Revisão estratégica focada",
  "Linguagem objetiva e direta",
];

export const STATS = [
  { value: 100, suffix: "%", label: "Material Autoral" },
  { value: 99, suffix: "+", label: "Questões CEBRASPE Comentadas" },
  { value: 30, suffix: "+", label: "Tópicos Organizados" },
  { value: 1, suffix: "", label: "Objetivo: preparação eficiente" },
];

export const TESTIMONIALS = [
  {
    name: "Lucas Ferreira",
    role: "Aprovado PMMA",
    quote:
      "O material do Prof. Maurílio foi decisivo. A parte de Português, que sempre me travou, ficou clara e objetiva. Cheguei na prova sabendo exatamente o que a banca ia cobrar.",
  },
  {
    name: "Camila Sousa",
    role: "Aprovada BMMA",
    quote:
      "Estudei por vários materiais e nada se comparou. As questões comentadas me ensinaram a interpretar cada pegadinha da banca. Recomendo demais.",
  },
  {
    name: "Rafael Mendes",
    role: "Aprovado PMMA",
    quote:
      "Direto ao ponto, sem enrolação. A revisão estratégica me economizou semanas de estudo. Passei em Português com uma das maiores notas da turma.",
  },
  {
    name: "Ana Beatriz Rocha",
    role: "Aprovada BMMA",
    quote:
      "A didática do professor Maurílio é única. Consegui entender assuntos que sempre achei impossíveis, como crase e regência. Valeu cada centavo.",
  },
  {
    name: "Diego Almeida",
    role: "Aprovado PMMA",
    quote:
      "Material 100% focado no edital da PMMA. Sem gordura, sem conteúdo genérico. Foi o diferencial na minha preparação para chegar na aprovação.",
  },
  {
    name: "Juliana Costa",
    role: "Aprovada BMMA",
    quote:
      "Os mapas mentais e os resumos finais me salvaram na reta final. Estudo pesado com pouco tempo, e esse e-book me deu exatamente o direcionamento que eu precisava.",
  },
];

export const FAQ = [
  {
    q: "Como recebo o material?",
    a: "Após a confirmação do pagamento, o link para download do e-book é disponibilizado imediatamente conforme a forma de entrega configurada.",
  },
  {
    q: "É um arquivo PDF?",
    a: "Sim. O material é entregue em PDF de alta qualidade, otimizado para leitura em qualquer dispositivo.",
  },
  {
    q: "Funciona no celular?",
    a: "Funciona em celular, tablet, notebook e computador. O layout é responsivo e pensado para leitura em qualquer tela.",
  },
  {
    q: "Posso imprimir?",
    a: "Sim, você pode imprimir para uso pessoal. A diagramação é limpa e economiza tinta.",
  },
  {
    q: "Existe atualização?",
    a: "O material é revisado conforme mudanças relevantes no edital e nas bancas. As atualizações são disponibilizadas ao comprador.",
  },
];

export const CTA_PRIMARY_LABEL = "QUERO GARANTIR MEU EBOOK";
export const CTA_SECONDARY_LABEL = "VER O CONTEÚDO";

// WhatsApp — mensagem pré-preenchida ao clicar (abre o app com o texto pronto).
export const WHATSAPP_NUMBER = "559881595051";
export const WHATSAPP_MESSAGE =
  "Olá, Professor Maurílio! Vim pelo site e tenho interesse no e-book de Português para os concursos da PMMA e BMMA 2026. Pode me passar mais informações?";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
