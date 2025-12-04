import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import { produtos, categorias } from "./data/produtos.js";

export default function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [busca, setBusca] = useState("");

  const produtosFiltrados = useMemo(() => {
    const normalizarTexto = (texto) =>
      texto
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase();

    const termoNormalizado = normalizarTexto(busca.trim());

    return produtos.filter((produto) => {
      const combinaCategoria =
        categoriaSelecionada === "Todos" ||
        produto.categoria === categoriaSelecionada;

      if (!combinaCategoria) return false;
      if (!termoNormalizado) return true;

      const textoProduto = normalizarTexto(
        `${produto.nome} ${produto.descricao}`
      );
      return textoProduto.includes(termoNormalizado);
    });
  }, [busca, categoriaSelecionada]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 px-4 py-6 sm:py-8 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden ring-1 ring-slate-200/80">
          <Header />

          <main className="px-6 sm:px-8 pb-10 pt-4 sm:pt-6 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-amber-600">Cardápio</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Escolha seu pedido
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Navegue pelas categorias, busque por um sabor ou digite um
                ingrediente para encontrar rapidamente o que procura.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  🔎
                </span>
                <input
                  type="search"
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                  placeholder="Buscar no cardápio"
                  aria-label="Buscar itens do cardápio"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-11 pr-4 py-3 text-sm sm:text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-300 transition"
                />
              </div>

              <CategoryFilter
                categorias={categorias}
                categoriaAtiva={categoriaSelecionada}
                onChange={setCategoriaSelecionada}
              />
            </div>

            {produtosFiltrados.length === 0 ? (
              <p className="text-sm text-slate-500">
                Nenhum produto encontrado para a busca atual.
              </p>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {produtosFiltrados.map((produto) => (
                  <ProductCard key={produto.id} produto={produto} />
                ))}
              </div>
            )}

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Valores e disponibilidade podem mudar sem aviso prévio. Consulte a
              loja para confirmar. As imagens são ilustrativas e os preços podem
              variar conforme promoções em andamento.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
