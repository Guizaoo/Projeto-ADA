// src/components/ProductCard.jsx

export default function ProductCard({ produto }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Imagem */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col p-4">        
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-slate-900">
            {produto.nome}
          </h3>
          <span className="text-indigo-600 font-bold text-base">
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </span>
        </div>

        <p className="text-sm text-slate-600 mb-3">{produto.descricao}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
            {produto.categoria}
          </span>

          {/* Botão só visual, não faz pedido ainda */}
          <button
            type="button"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
