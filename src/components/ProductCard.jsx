export default function ProductCard({ produto }) {
  const detalhes = produto.detalhes ?? [];

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100 p-4 sm:p-5 flex gap-4 sm:gap-5">
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-slate-100 .flex-shrink-0">
        <img
          src={produto.imagem}
          alt={produto.nome}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-3">
        <header className="flex items-start justify-between gap-3">
          <div className="min-w-0 space-y-1">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700">
              {produto.categoria}
            </span>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-tight">
              {produto.nome}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
              {produto.descricao}
            </p>
          </div>
          <span className="text-indigo-700 font-bold text-sm sm:text-base whitespace-nowrap">
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </span>
        </header>

        {detalhes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {detalhes.map((detalhe) => (
              <span
                key={detalhe}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700"
              >
                {detalhe}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500">Detalhes rápidos no estilo iFood.</p>
          <button
            type="button"
            className="text-xs sm:text-sm font-semibold text-indigo-700 hover:text-indigo-800"
          >
            Ver mais
          </button>
        </div>
      </div>
    </article>
  );
}
