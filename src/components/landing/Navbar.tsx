import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";

const LINKS = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#professor", label: "Professor" },
  { href: "#oferta", label: "Oferta" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
        style={{ marginInline: "1rem" }}
      >
        <a href="#top" className="flex items-center gap-2 font-display font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow shadow-glow">
            <BookMarked className="size-4 text-white" />
          </span>
          <span className="hidden sm:inline text-sm">Português PMMA & BMMA</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:text-white hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta-final"
          className="btn-primary hidden sm:inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide"
        >
          Garantir acesso
        </a>
      </nav>
    </motion.header>
  );
}
