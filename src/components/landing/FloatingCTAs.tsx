import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { KIRVANO_CHECKOUT_URL } from "./Offer";

export function FloatingCTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:bottom-6"
    >
      <div className="flex w-full max-w-md items-center gap-2 rounded-full glass-strong p-1.5 shadow-elegant sm:max-w-lg">
        <a
          href="https://wa.me/559881595051"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-xs font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-all hover:brightness-110 hover:-translate-y-0.5 sm:text-sm"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={KIRVANO_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Comprar e-book"
          className="btn-primary group inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-semibold sm:text-sm"
        >
          <ShoppingBag className="size-4" aria-hidden="true" />
          Comprar e-book
        </a>
      </div>
    </motion.div>
  );
}
