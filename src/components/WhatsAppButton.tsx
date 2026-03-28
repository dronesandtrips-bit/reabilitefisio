import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?l=pt_BR&phone=5554991879915";

const WhatsAppButton = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="WhatsApp"
    >
      <motion.div
        whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
        className="relative bg-whatsapp text-whatsapp-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      >
        {/* Ping pulse */}
        {!prefersReducedMotion && (
          <motion.span
            className="absolute inset-0 rounded-full bg-whatsapp"
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3.8, ease: "easeOut" }}
          />
        )}
        <MessageCircle className="w-7 h-7 relative z-10" />
      </motion.div>
    </a>
  );
};

export default WhatsAppButton;
