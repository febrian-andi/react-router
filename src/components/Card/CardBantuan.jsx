
function CardBantuan({ icon, title, detail }) {
    return (
        <div className="col-4">
            <div className="border py-2 px-3">
                <div className="d-flex justify-content-start">
                    <img src={icon} width={40} height={40}/>
                    <h1 className="fs-6 fw-bold">{title}</h1>
                </div>
                <div style={{ height:'250px'}}>
                    {detail.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <button className="btn btn-light" style={{ color: '#029da8', border: '1px solid #029da8' }}>Lihat Semua Artikel</button>
            </div>
        </div>
    )

}

export default CardBantuan;