import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { KIRVANO_CHECKOUT_URL } from "./Offer";

export function FinalCTA() {
  return (
    <section id="cta-final" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] glass-strong px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-lines opacity-40"
          />

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            Sua preparação começa pela decisão de{" "}
            <span className="gradient-text">estudar com estratégia.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Organize seus estudos com um material desenvolvido especificamente para o conteúdo de
            Português exigido na PMMA e BMMA.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={KIRVANO_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide"
            >
              GARANTIR MEU ACESSO
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <span className="text-xs text-muted-foreground">
              Acesso imediato após a confirmação do pagamento
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
