import dataBantuan from "../constants/dataBantuan";
import CardBantuan from "./Card/CardBantuan";

function Bantuan() {
    return (
        <div className="container my-3">
            <h1 className="text-center">Pilih Topik Sesuai Kendalamu</h1>
            <div className="row">
                {dataBantuan.map(data => {
                    return (
                        <CardBantuan icon={data.icon} title={data.title} detail={data.detail} key={data.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Bantuan;