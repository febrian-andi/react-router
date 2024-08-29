function CardBantuan({ icon, title, detail }) {
  return (
    <div className="col-4">
      <div className="border py-2 px-3 rounded-4 py-3">
        <div className="d-flex justify-content-start align-items-center mb-2">
          <img src={icon} width={40} height={40} />
          <h1 className="fs-6 fw-bold ms-1">{title}</h1>
        </div>
        <div style={{ height: "200px" }}>
          {detail.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <button
          className="btn btn-light"
          style={{ color: "#029da8", border: "1px solid #029da8" }}
        >
          Lihat Semua Artikel
        </button>
      </div>
    </div>
  );
}

export default CardBantuan;
