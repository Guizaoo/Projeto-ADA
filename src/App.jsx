// src/App.jsx

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
        <section className="max-w-5xl mx-auto px-4 .py-8 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Título da página */}
          <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Cardápio / Itens da Loja
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Veja abaixo os produtos disponíveis. Este menu é apenas para
              consulta de itens e valores. Se preferir, escolha a categoria
              para encontrar o que deseja mais rápido.
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
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
