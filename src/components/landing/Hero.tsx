import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import ebookAsset from "@/assets/ebook-clean.png";
import heroBg from "@/assets/hero-bg.jpg";
import { CHECKOUT_URL, CTA_PRIMARY_LABEL, CTA_SECONDARY_LABEL } from "@/lib/landing-data";

const CHIPS = [
  "Material Digital",
  "Acesso Imediato",
  "Atualizado conforme o edital",
  "Compatível com celular, tablet e PC",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, -10]), {
    stiffness: 90,
    damping: 15,
  });
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 90,
    damping: 15,
  });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      className="relative min-h-dvh w-full overflow-hidden bg-aura pt-28 pb-16 md:pb-24"
    >
      {/* Police / firefighter cinematic background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.38]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background"
      />
      <div aria-hidden="true" className="absolute inset-0 grid-lines pointer-events-none" />
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 size-[420px] rounded-full bg-primary/20 blur-3xl animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 size-[520px] rounded-full bg-danger/25 blur-3xl animate-pulse-glow"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-10">
        {/* Left */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full border-danger/40 px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-danger animate-pulse" aria-hidden="true" />
            <Sparkles className="size-3.5 text-danger-glow" aria-hidden="true" />
            <span>Edital 2026 — Prof. Maurílio Alencar</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            <span className="text-white">O edital saiu.</span>
            <br />
            <span className="gradient-text">Agora falta apenas sua preparação.</span>
          </motion.h1>

          {/* Mobile-only ebook image between headline and subheadline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto mt-8 flex w-full items-center justify-center md:hidden"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-primary/25 blur-[80px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-full bg-danger/30 blur-[60px]"
            />
            <img
              src={ebookAsset}
              alt="Apostila de Português para concursos PMMA e BMMA — Teoria Completa e Questões Comentadas"
              width={1000}
              height={1000}
              className="animate-floaty-straight relative h-auto w-[220px] select-none drop-shadow-[0_30px_50px_rgba(220,38,38,0.4)] sm:w-[260px]"
              draggable={false}
              fetchPriority="high"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Pare de perder tempo estudando conteúdos aleatórios. Domine Português com um material
            criado especificamente para candidatos da{" "}
            <strong className="text-white/90">PMMA</strong> e{" "}
            <strong className="text-white/90">BMMA</strong>, reunindo teoria completa, questões
            comentadas e revisão estratégica dos temas mais cobrados.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {CHIPS.map((c) => (
              <li
                key={c}
                className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-white/85"
              >
                <span aria-hidden="true" className="text-danger-glow">
                  ✓
                </span>{" "}
                {c}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={CHECKOUT_URL}
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-wide"
            >
              {CTA_PRIMARY_LABEL}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#conteudo"
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-wide"
            >
              {CTA_SECONDARY_LABEL}
            </a>
          </motion.div>
        </div>

        {/* Right - mockup */}
        <div
          ref={containerRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative mx-auto hidden h-[520px] w-full max-w-md items-center justify-center md:flex md:h-[620px]"
          style={{ perspective: 1200 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-primary/25 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-danger/30 blur-[80px]"
          />
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="animate-floaty-straight relative drop-shadow-[0_40px_60px_rgba(220,38,38,0.4)]"
          >
            <img
              src={ebookAsset}
              alt="Apostila de Português para concursos PMMA e BMMA — Teoria Completa e Questões Comentadas"
              width={1000}
              height={1000}
              className="h-auto w-[260px] select-none sm:w-[300px] md:w-[340px]"
              draggable={false}
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#beneficios"
        aria-label="Rolar para benefícios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-xs"
        >
          Role para explorar
          <ChevronDown className="size-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
