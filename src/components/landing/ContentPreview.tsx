import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  ClipboardCheck,
  FileText,
  ListChecks,
  MessageSquareQuote,
  ScrollText,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import cardTeoria from "@/assets/card-teoria.jpg";
import cardExemplos from "@/assets/card-exemplos.jpg";
import cardMapas from "@/assets/card-mapas.jpg";
import cardQuestoes from "@/assets/card-questoes.jpg";
import cardComentarios from "@/assets/card-comentarios.jpg";
import cardResumos from "@/assets/card-resumos.jpg";
import cardRevisoes from "@/assets/card-revisoes.jpg";
import cardChecklist from "@/assets/card-checklist.jpg";

const PAGES = [
  {
    icon: BookOpen,
    title: "Teoria",
    text: "Explicações claras dos conceitos fundamentais.",
    image: cardTeoria,
  },
  {
    icon: FileText,
    title: "Exemplos",
    text: "Situações reais aplicadas a cada regra.",
    image: cardExemplos,
  },
  {
    icon: Brain,
    title: "Mapas Mentais",
    text: "Visualização rápida para memorização.",
    image: cardMapas,
  },
  {
    icon: ClipboardCheck,
    title: "Questões",
    text: "Bateria de exercícios por tópico.",
    image: cardQuestoes,
  },
  {
    icon: MessageSquareQuote,
    title: "Comentários",
    text: "Resolução detalhada de cada alternativa.",
    image: cardComentarios,
  },
  {
    icon: ScrollText,
    title: "Resumos",
    text: "Sínteses estratégicas ao final dos capítulos.",
    image: cardResumos,
  },
  {
    icon: Sparkles,
    title: "Revisões",
    text: "Cards de revisão para os dias finais.",
    image: cardRevisoes,
  },
  {
    icon: ListChecks,
    title: "Checklist Final",
    text: "Verificação completa antes da prova.",
    image: cardChecklist,
  },
];

export function ContentPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Por dentro do material"
          title={
            <>
              Uma <span className="gradient-text">experiência de estudo</span> completa
            </>
          }
          description="Cada página foi diagramada para tornar seu estudo mais leve, produtivo e eficiente."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {PAGES.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl glass transition-transform duration-500 hover:-translate-y-1.5 hover:border-danger/50 hover:shadow-glow"
              >
                {/* contextual image */}
                <img
                  src={p.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-danger/10 via-transparent to-danger/10 opacity-60"
                />

                <div className="relative flex h-full flex-col justify-between p-5">
                  <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-danger/25 to-danger-glow/15 ring-1 ring-danger/30 backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="size-5 text-danger-glow" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/75">{p.text}</p>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1/2 left-0 h-1/2 w-full bg-gradient-to-t from-danger/25 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
