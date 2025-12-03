// src/components/Header.jsx

export default function Header() {
  return (
    <header className="w-full bg-indigo-600 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          
          <div>
            <h1 className="text-2xl font-bold leading-tight">ESTAÇÃO ADA</h1>
            <p className="text-sm text-indigo-100 leading-snug">
              Pedido rápido direto do celular ou do seu desktop.
            </p>
          </div>
        </div>

        <div className="text-sm leading-tight bg-indigo-500/60 sm:bg-transparent px-4 sm:px-0 py-3 sm:py-0 rounded-xl flex sm:block items-center justify-between gap-3">
          <div>
            <p className="font-semibold">Horário de funcionamento</p>
            <p className="text-indigo-100">Seg a Dom, 10h às 22h</p>
          </div>
          <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold bg-white text-indigo-700 rounded-full shadow-sm">
            Retirada e delivery
          </span>
        </div>
      </div>
    </header>
  );
}
