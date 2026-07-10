import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl glass p-8 text-center sm:p-12"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-primary-glow/10"
          />
          <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-glow">
            <ShieldCheck className="size-8 text-white" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">Entrega imediata e segura</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Após a confirmação do pagamento, o e-book digital será disponibilizado imediatamente
            para download conforme a forma de entrega configurada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
