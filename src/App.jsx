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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 py-8">
          {/* Título da página */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Cardápio / Itens da Loja
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Veja abaixo os produtos disponíveis. Este menu é apenas para
              consulta de itens e valores.
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
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {produtosFiltrados.map((produto) => (
                <ProductCard key={produto.id} produto={produto} />
              ))}
            </div>
          )}

          {/* Observação */}
          <p className="text-xs text-slate-400 mt-8">
            Valores e disponibilidade podem mudar sem aviso prévio. Consulte a
            loja para confirmar.
          </p>
        </section>
      </main>
    </div>
  );
}
