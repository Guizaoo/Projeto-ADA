// src/components/ProductCard.jsx

export default function ProductCard({ produto }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col border border-slate-100">
      {/* Imagem */}
      <div className="w-full .aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col p-4 sm:p-5">        
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-tight">
            {produto.nome}
          </h3>
          <span className="text-indigo-600 font-bold text-sm sm:text-base">
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </span>
        </div>

        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
          {produto.descricao}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
            {produto.categoria}
          </span>

          {/* Botão só visual, não faz pedido ainda */}
          <button
            type="button"
            className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-2 rounded-lg transition"
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
