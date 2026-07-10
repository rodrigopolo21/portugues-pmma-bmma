import { motion } from "framer-motion";
import { CheckCircle2, Flame, Lock, ShieldCheck, Zap } from "lucide-react";
import ebookAsset from "@/assets/ebook-clean.png";
import bgFire from "@/assets/bg-fire.jpg";
import { WHATSAPP_URL } from "@/lib/landing-data";

const FEATURES = [
  "Teoria completa e objetiva",
  "Questões comentadas para aprender como a banca cobra cada assunto",
  "100 questões CEBRASPE de Português",
  "Revisão estratégica para fixar o conteúdo com mais eficiência",
  "Linguagem simples e direta, sem enrolação",
  "Assuntos mais cobrados no edital, organizados em sequência lógica",
];

export const KIRVANO_CHECKOUT_URL = "#"; // TODO: substituir pelo link real da Kirvano

export function Offer() {
  return (
    <section id="oferta" className="relative overflow-hidden py-24 sm:py-32">
      {/* Fire/bombeiro background — very low opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.14]"
        style={{ backgroundImage: `url(${bgFire})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] glass-strong p-6 sm:p-10 md:p-14"
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 size-[420px] rounded-full bg-danger/25 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 size-[420px] rounded-full bg-primary/25 blur-[120px]"
          />

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            {/* Ebook mockup */}
            <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-center sm:max-w-[340px]">
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full bg-primary/25 blur-[80px]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-10 rounded-full bg-danger/30 blur-[70px]"
              />
              <img
                src={ebookAsset}
                alt="Apostila de Português para PMMA e BMMA"
                width={1000}
                height={1000}
                loading="lazy"
                className="animate-floaty-straight relative h-auto w-full drop-shadow-[0_30px_50px_rgba(220,38,38,0.4)]"
                draggable={false}
              />
            </div>

            {/* Pricing */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-danger/40 bg-danger/10 px-3 py-1.5 text-xs font-medium text-danger-glow">
                <Flame className="size-3.5" aria-hidden="true" />
                Oferta de lançamento
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Apostila completa <span className="gradient-text">PMMA & BMMA</span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Acesso imediato · PDF para celular, tablet e PC
              </p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-sm text-muted-foreground line-through">De R$ 197,00</span>
                <span className="rounded-full bg-danger/20 px-2 py-0.5 text-[11px] font-semibold text-danger-glow">
                  -65%
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-primary-glow">
                Por apenas
              </p>
              <div className="mt-1 flex items-end gap-2">
                <span className="font-display text-2xl font-semibold text-white">R$</span>
                <span className="font-display text-7xl font-semibold leading-none gradient-text">
                  69
                </span>
                <span className="font-display text-3xl font-semibold text-white">,90</span>
                <span className="pb-2 text-sm text-muted-foreground">à vista</span>
              </div>

              <ul className="mt-7 space-y-2.5">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary-glow"
                      aria-hidden="true"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={KIRVANO_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold tracking-wide"
                >
                  <Zap className="size-4" aria-hidden="true" />
                  COMPRAR AGORA
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-6 py-4 text-sm font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:-translate-y-0.5"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5" /> Garantia 7 dias
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="size-3.5" /> Acesso imediato
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="size-3.5" /> Compra segura
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
