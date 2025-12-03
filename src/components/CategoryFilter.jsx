// src/components/CategoryFilter.jsx

export default function CategoryFilter({
  categorias,
  categoriaAtiva,
  onChange,
}) {
  return (
    <div className="-mx-4 sm:mx-0 mb-6 overflow-x-auto pb-2">
      <div className="flex gap-3 px-4 sm:px-0 min-w-full snap-x">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition shadow-sm snap-start
              ${
                categoriaAtiva === cat
                  ? "bg-indigo-600 text-white border-indigo-600 shadow"
                  : "bg-white/90 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
