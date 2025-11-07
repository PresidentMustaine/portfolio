import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 mt-8">
      <div className="flex justify-center gap-4">
        <a href="https://github.com/PresidentMustaine" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
        <a href="https://linkedin.com/in/luigi-ferrarini-borghi" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
      </div>
      <p className="text-sm mt-2">© 2025 Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  );
}
