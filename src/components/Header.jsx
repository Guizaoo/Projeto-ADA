export default function Header() {
  return (
    <header className=".bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200 px-6 sm:px-8 py-6 sm:py-8">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-100 text-amber-700 font-black text-xl sm:text-2xl flex items-center justify-center shadow-sm">
          ADA
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Estação Ada
            </h1>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 uppercase tracking-wide">
              <span className="h-2 w-2 rounded-full bg-red-500" aria-hidden />
              ao vivo
            </span>
            <span className="text-sm text-slate-500">Pedido mínimo R$ 18,00</span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Cardápio enxuto, com lanches, bebidas e sobremesas selecionadas para você receber rapidinho em casa.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-medium">
              🚚 Retirada e delivery
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-medium">
              ⏰ Seg a Dom, 10h às 22h
            </span>
            <button
              type="button"
              className="ml-auto text-sm font-semibold text-amber-600 hover:text-amber-700 transition"
            >
              Ver mais
            </button>
          </div>
        </div>

        <div className="text-right bg-slate-900 text-white px-3 sm:px-4 py-3 rounded-2xl shadow-md leading-tight">
          <p className="text-xs text-slate-200">Avaliação</p>
          <p className="text-lg sm:text-xl font-bold flex items-center justify-end gap-1">
            5.0 <span aria-hidden>⭐</span>
          </p>
        </div>
      </div>
    </header>
  );
}
