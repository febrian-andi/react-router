import HeroImage from '../assets/hero.svg'

function Beranda() {
    return (
        <div className='container my-3'>
            <div className='row'>
                <div className='col-6 d-flex align-items-center'>
                    <div>
                        <h1 className='fs-3 fw-bold' style={{textAlign: 'justify'}}>PaDi UMKM Hadir Sebagai Satu Solusi Bisnis bagi UMKM, BUMN, dan Pemerintah.</h1>
                        <p className='fs-6' style={{textAlign: 'justify'}}>Mempertemukan UMKM berkualitas dengan perusahaan BUMN Maupun Swasta untuk mendapatkan transaksi dengan harga dan kualitas terbaik.</p>
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <img src={HeroImage} />
                </div>
            </div>
        </div>
    )
}

export default Beranda;