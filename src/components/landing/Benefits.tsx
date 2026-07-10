import { motion } from "framer-motion";
import { BENEFITS } from "@/lib/landing-data";
import { SectionHeading } from "./SectionHeading";

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Por que este e-book"
          title={
            <>
              Um material pensado <span className="gradient-text">para você passar</span>
            </>
          }
          description="Cada capítulo, exemplo e questão foi selecionado para maximizar seu rendimento no menor tempo possível."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-colors duration-300 hover:border-danger/50 hover:shadow-glow"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 size-32 rounded-full blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-danger/25"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-danger/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="grid size-12 place-items-center rounded-xl ring-1 bg-gradient-to-br from-danger/25 to-danger-glow/15 ring-danger/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="size-5 text-danger-glow" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white transition-colors group-hover:text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
