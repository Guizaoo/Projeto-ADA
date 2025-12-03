// src/components/CategoryFilter.jsx

export default function CategoryFilter({
  categorias,
  categoriaAtiva,
  onChange,
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categorias.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition
            ${
              categoriaAtiva === cat
                ? "bg-indigo-600 text-white border-indigo-600 shadow"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
