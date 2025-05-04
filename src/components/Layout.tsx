import { ReactNode } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="font-bold text-xl">Mitkadem</div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">Главная</Link>
          <Link to="/posts" className="hover:underline">Посты</Link>
          <Link to="/leads" className="hover:underline">Заявки</Link>
          <LanguageSwitcher />
        </div>
      </nav>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
