import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Meu Portfólio
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:underline">
            Início
          </Link>
          <Link to="/projects" className="hover:underline">
            Projetos
          </Link>
          <Link to="/contact" className="hover:underline">
            Contato
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
