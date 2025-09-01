// Ícones otimizados para reduzir bundle size
// Importa apenas os ícones específicos que precisamos

export { 
  FiArrowDown,
  FiDownload, 
  FiMail,
  FiCode,
  FiTarget,
  FiUsers
} from "react-icons/fi";

export { 
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaAlignJustify,
  FaRegEnvelope,
  FaRocket
} from "react-icons/fa";

// Componentes de ícones otimizados para casos específicos
export const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
);

export const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);
