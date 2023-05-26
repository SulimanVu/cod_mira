import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Bascket from "./pages/Bascket/Bascket";
import About from "./pages/About/About";
import Category from "pages/Category/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bascket/:id" element={<Bascket />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
