
import { useState, useMemo } from "react";
import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import { produtos, categorias } from "./data/produtos.js";

export default function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const produtosFiltrados = useMemo(() => {
    if (categoriaSelecionada === "Todos") return produtos;
    return produtos.filter((p) => p.categoria === categoriaSelecionada);
  }, [categoriaSelecionada]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
       <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mb-4 sm:mb-6 space-y-1">
            <p className="text-sm font-semibold text-indigo-600">Cardápio</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
              Escolha seu pedido
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Toque nas categorias ou role para ver as opções com preços e
              observações rápidas, no estilo de apps de delivery.
            </p>
          </div>

          {/* Filtros */}
          <CategoryFilter
            categorias={categorias}
            categoriaAtiva={categoriaSelecionada}
            onChange={setCategoriaSelecionada}
          />

          {/* Grid de produtos */}
          {produtosFiltrados.length === 0 ? (
            <p className="text-sm text-slate-500">
              Nenhum produto encontrado nessa categoria.
            </p>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {produtosFiltrados.map((produto) => (
                <ProductCard key={produto.id} produto={produto} />
              ))}
            </div>
          )}

          {/* Observação */}
          <p className="text-xs sm:text-sm text-slate-500 mt-8 sm:mt-10 leading-relaxed">
            Valores e disponibilidade podem mudar sem aviso prévio. Consulte a
            loja para confirmar. As imagens são ilustrativas e os preços podem
            variar conforme promoções em andamento.
          </p>
        </section>
      </main>
    </div>
  );
}
