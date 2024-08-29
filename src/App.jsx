import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from '../src/components/Beranda';
import TentangKami from '../src/components/TentangKami';
import Bantuan from '../src/components/Bantuan';
import Media from '../src/components/Media';
import Kontak from '../src/components/Kontak';
import Login from '../src/components/Login';
import PrivateRoute from '../src/components/Router/PrivateRoute';
import NotFound from '../src/components/NotFound';

function App() {

  return (
    <Router>
      <div className="container-fluid">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<PrivateRoute element={<Beranda />} />} />
            <Route path="/tentang-kami" element={<PrivateRoute element={<TentangKami />} />} />
            <Route path="/bantuan" element={<PrivateRoute element={<Bantuan />} />} />
            <Route path="/media" element={<PrivateRoute element={<Media />} />} />
            <Route path="/kontak" element={<PrivateRoute element={<Kontak />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App
