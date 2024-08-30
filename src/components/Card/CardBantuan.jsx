function CardBantuan({ icon, title, detail }) {
  return (
    <div className="col-span-1">
      <div className="border border-gray-300 p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img src={icon} className="w-10 h-10" alt={title} />
          <h1 className="text-lg font-semibold ml-3">{title}</h1>
        </div>
        <div className="h-40 overflow-auto">
          {detail.map((item, index) => (
            <p key={index} className="mb-2">
              {item}
            </p>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 text-sky-400 hover:text-white border border-sky-400 rounded hover:bg-sky-400">
          Lihat Semua Artikel
        </button>
      </div>
    </div>
  );
}

export default CardBantuan;
