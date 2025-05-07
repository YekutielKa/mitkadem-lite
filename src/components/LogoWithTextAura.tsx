// /src/components/LogoWithTextAura.tsx

import logo from '@/assets/logo.png';

export default function LogoWithTextAura() {
  return (
    <div className="flex items-center gap-3 relative">
      {/* Логотип с аурой */}
      <div className="relative h-10 w-10 shrink-0">
        <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
        <img
          src={logo}
          alt="Mitkadem Logo"
          className="relative z-10 h-10 w-10 object-contain"
        />
      </div>

      {/* Название с аурой и градиентом */}
      <div className="relative">
        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
          Mitkadem
        </span>
        <div className="absolute inset-0 blur-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-40"></div>
      </div>
    </div>
  );
}
