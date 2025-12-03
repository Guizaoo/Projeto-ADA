// src/components/Header.jsx

export default function Header() {
  return (
    <header className="w-full bg-indigo-600 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wide text-indigo-100">
            Menu online
          </span>
          <h1 className="text-2xl font-bold">ESTAÇÃO ADA</h1>
        </div>

        <div className="text-right text-sm leading-tight">
          <p>Horário de funcionamento:</p>
          <p className="font-semibold">Seg a Dom, 10h às 22h</p>
        </div>
      </div>
    </header>
  );
}
