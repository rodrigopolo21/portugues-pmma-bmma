import { motion } from "framer-motion";
import { CURRICULUM } from "@/lib/landing-data";
import { SectionHeading } from "./SectionHeading";

export function Curriculum() {
  return (
    <section id="conteudo" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-72 max-w-3xl -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Currículo"
          title={
            <>
              O que você vai <span className="gradient-text">aprender</span>
            </>
          }
          description="Todos os tópicos exigidos no edital, organizados em uma sequência lógica de estudo."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2"
          />

          <ol className="flex flex-col gap-6">
            {CURRICULUM.map((topic, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={topic}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.04 }}
                  className={`relative flex items-start gap-4 md:w-1/2 ${
                    isLeft ? "md:pr-10" : "md:ml-auto md:pl-10"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute top-4 grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-xs font-semibold text-white shadow-glow ${
                      isLeft ? "left-0 md:-right-4 md:left-auto" : "left-0 md:-left-4"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="ml-12 flex-1 rounded-2xl glass p-5 md:ml-0">
                    <h3 className="text-base font-semibold text-white">{topic}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Teoria essencial, exemplos e questões comentadas.
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
