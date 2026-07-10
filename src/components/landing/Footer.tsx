import { BookMarked } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-12 pb-28 sm:pb-32">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-10">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow shadow-glow">
            <BookMarked className="size-4 text-white" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Português PMMA & BMMA 2026</p>
            <p className="text-xs text-muted-foreground">Prof. Maurílio Alencar</p>
          </div>
        </div>

        <nav aria-label="Links do rodapé">
          <ul className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {year} Maurílio Alencar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
