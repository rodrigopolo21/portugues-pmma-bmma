import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, BookMarked, GraduationCap, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { STATS } from "@/lib/landing-data";

const ICONS: LucideIcon[] = [Award, Users, BookMarked, GraduationCap];
const ACCENT = {
  ring: "ring-danger/30",
  bg: "from-danger/25 to-danger-glow/15",
  text: "text-danger-glow",
  glow: "bg-danger/25",
};

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState(0);
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);
  useEffect(() => rounded.on("change", (v) => setDisplay(v)), [rounded]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="relative py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-danger/40 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = ICONS[i] ?? Award;
            const a = ACCENT;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl glass-strong p-6 sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className={`absolute -top-16 -right-16 size-48 rounded-full ${a.glow} blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-90`}
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent`}
                />

                <div
                  className={`relative grid size-12 place-items-center rounded-xl bg-gradient-to-br ${a.bg} ring-1 ${a.ring} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon className={`size-5 ${a.text}`} aria-hidden="true" />
                </div>

                <div className="relative mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold gradient-text sm:text-5xl">
                    <Counter to={s.value} />
                  </span>
                  <span className={`font-display text-3xl font-semibold sm:text-4xl ${a.text}`}>
                    {s.suffix}
                  </span>
                </div>

                <p className="relative mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                  {s.label}
                </p>

                <motion.div
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r ${a.bg}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
