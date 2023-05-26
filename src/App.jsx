import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Fermers from "./pages/Fermers/Fermers";
import Bascket from "./pages/Bascket/Bascket";
import About from "pages/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
<<<<<<< HEAD
=======
        <Route path="/fermers" element={<Fermers />} />
        <Route path="/bascket/:id" element={<Bascket />} />
        <Route path="/about" element={<About />} />
>>>>>>> main
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
