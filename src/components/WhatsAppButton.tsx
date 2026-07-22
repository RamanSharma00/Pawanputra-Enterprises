import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918946955587?text=Hello%20Pawanputra%20Enterprises,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20construction%20services.%20Kindly%20provide%20details%20regarding%20project%20execution,%20estimated%20cost,%20timeline,%20and%20quotation.%0A%0AThank%20you."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-xl z-50 flex items-center justify-center transition-all hover:scale-110"
    >
      <FaWhatsapp size={36} />
    </a>
  );
}