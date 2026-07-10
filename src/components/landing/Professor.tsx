import { motion } from "framer-motion";
import { Award, Users, BookMarked, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import professorAsset from "@/assets/professor-maurilio.png";

const PROFESSOR_STATS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Award, value: "2.000+", label: "Alunos aprovados" },
  { icon: Users, value: "350+", label: "Alunos em cursos online" },
  { icon: BookMarked, value: "+99", label: "Questões CEBRASPE comentadas" },
  { icon: GraduationCap, value: "11+", label: "Anos de experiência" },
];

const ACCENT = {
  ring: "ring-danger/30",
  bg: "from-danger/25 to-danger-glow/15",
  text: "text-danger-glow",
  glow: "bg-danger/25",
};

export function Professor() {
  return (
    <section id="professor" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-primary/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-40 size-[500px] rounded-full bg-danger/10 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-5 md:items-center lg:gap-16 lg:px-10">
        {/* Left: portrait — larger, more proportional */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-2xl md:col-span-3 lg:col-span-3 lg:max-w-none xl:col-span-3"
        >
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-2">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-danger/30"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 left-1/2 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-primary/40 blur-[100px]"
            />
            <img
              src={professorAsset}
              alt="Prof. Maurílio Alencar"
              width={1080}
              height={1080}
              loading="lazy"
              className="relative z-10 h-auto w-full rounded-[1.6rem] object-cover"
              draggable={false}
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-danger-glow">Professor</p>
            <p className="mt-1 font-display text-3xl font-semibold text-white">Maurílio Alencar</p>
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-2"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-danger animate-pulse" />
            Quem vai te preparar
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Uma das maiores referências em{" "}
            <span className="gradient-text">Português para concursos</span> do Maranhão
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            <strong className="text-white/95">Prof. Maurílio Alencar</strong> é especialista em
            preparação para concursos públicos, formado em Letras Português/Inglês e com mais de{" "}
            <strong className="text-white/95">11 anos</strong> ensinando candidatos a dominarem a
            língua portuguesa exigida pelas principais bancas — com foco cirúrgico em{" "}
            <strong className="text-white/95">PMMA</strong> e{" "}
            <strong className="text-white/95">BMMA</strong>.
          </p>
          <p className="mt-4 italic text-white/85">
            "Milhares de alunos destravaram o Português e conquistaram a aprovação através do método
            Maurílio."
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {PROFESSOR_STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl glass-strong p-5 sm:p-6"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute -top-16 -right-16 size-40 rounded-full ${ACCENT.glow} blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-90`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />

                  <div
                    className={`relative grid size-11 place-items-center rounded-xl bg-gradient-to-br ${ACCENT.bg} ring-1 ${ACCENT.ring} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className={`size-5 ${ACCENT.text}`} aria-hidden="true" />
                  </div>

                  <p className="relative mt-4 font-display text-3xl font-semibold gradient-text sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="relative mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                    {s.label}
                  </p>

                  <motion.div
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r ${ACCENT.bg}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
