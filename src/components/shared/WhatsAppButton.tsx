import { FaWhatsapp } from "react-icons/fa6";

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

export function WhatsAppButton({
  phoneNumber = "6281138816881",
}: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with JB School Admission on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-social-whatsapp hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
