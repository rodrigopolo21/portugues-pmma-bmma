import useEmblaCarousel from "embla-carousel-react";
import { Quote } from "lucide-react";
import { useCallback, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/landing-data";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });

  const autoplay = useCallback(() => {
    if (!embla) return;
    const id = window.setInterval(() => {
      if (embla.canScrollNext()) embla.scrollNext();
      else embla.scrollTo(0);
    }, 3800);
    return () => window.clearInterval(id);
  }, [embla]);

  useEffect(() => {
    const cleanup = autoplay();
    return cleanup;
  }, [autoplay]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Depoimentos"
          title={
            <>
              Espaço reservado para{" "}
              <span className="gradient-text">quem estuda com o material</span>
            </>
          }
          description="Os cards abaixo são exemplos e serão substituídos por depoimentos reais após o lançamento."
        />

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]"
              >
                <div className="h-full rounded-2xl glass p-6">
                  <Quote className="size-5 text-primary-glow" aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-white/90">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-sm font-semibold text-white"
                    >
                      {t.name.split(" ").slice(-1)[0].charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
