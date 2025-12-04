export default function CategoryFilter({
  categorias,
  categoriaAtiva,
  onChange,
}) {
  return (
    <div className="-mx-2 sm:mx-0 overflow-x-auto pb-2">
      <div className="flex gap-3 px-2 sm:px-0 min-w-full snap-x">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            aria-pressed={categoriaAtiva === cat}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition shadow-sm snap-start
              ${
                categoriaAtiva === cat
                  ? "bg-amber-500 text-white border-amber-500 shadow"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
