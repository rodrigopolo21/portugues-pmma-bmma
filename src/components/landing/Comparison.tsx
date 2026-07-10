import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { OTHER_MATERIALS, OUR_EBOOK } from "@/lib/landing-data";
import { SectionHeading } from "./SectionHeading";

export function Comparison() {
  return (
    <section id="diferencial" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Diferencial"
          title={
            <>
              Por que este material <span className="gradient-text">é diferente</span>
            </>
          }
          description="Compare a abordagem tradicional com o método usado neste e-book."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass p-8"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Outros materiais
            </span>
            <h3 className="mt-1 text-2xl font-semibold text-white/80">Genérico e disperso</h3>
            <ul className="mt-6 space-y-3">
              {OTHER_MATERIALS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-0.5 grid size-6 place-items-center rounded-full bg-white/5">
                    <X className="size-3.5 text-destructive" aria-hidden="true" />
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl glass p-8 ring-1 ring-primary/40 shadow-elegant"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent"
            />
            <span className="text-xs font-medium uppercase tracking-widest text-primary-glow">
              Nosso e-book
            </span>
            <h3 className="mt-1 text-2xl font-semibold text-white">Direcionado e estratégico</h3>
            <ul className="mt-6 space-y-3">
              {OUR_EBOOK.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 grid size-6 place-items-center rounded-full bg-primary/20">
                    <Check className="size-3.5 text-primary-glow" aria-hidden="true" />
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
