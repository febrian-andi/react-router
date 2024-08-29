function CardMedia({ image, title, detail }) {
    console.log(title)
    return (
        <div className="col-4">
            <div className="border py-2 px-3 rounded-4">
                <div className="d-flex justify-content-center">
                    <img height={320} src={image} />
                </div>
                <h2 className="fs-4">{title}</h2>
                <p>{detail}</p>
            </div>
        </div>
    )

}

export default CardMedia;