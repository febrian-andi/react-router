import padiUmkmLogo from "../assets/padi-umkm.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = sessionStorage.getItem("login") === "true";

  const handleLogout = () => {
    sessionStorage.removeItem("login");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={padiUmkmLogo} alt="padi-umkm-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Beranda
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/tentang-kami">
                Tentang Kami
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/bantuan">
                Bantuan
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/media">
                Media
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/kontak">
                Kontak
              </Link>
            </li>
            {!isLoggedIn ? (
              <li className="nav-item mx-2">
                <Link
                  to="/login"
                  className="btn btn-light fw-bold"
                  style={{ color: "#029da8", border: "1px solid #029da8" }}
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-2">
                <button
                  onClick={handleLogout}
                  className="btn btn-danger fw-bold"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
