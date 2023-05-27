import { Routes, Route, Outlet } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Fermers from "./pages/Fermers/Fermers";
import Bascket from "./pages/Bascket/Bascket";
import About from "./pages/About/About";
import Category from "pages/Category/Category";
import Contacts from "./components/Profile/Contacts";
import Profile from "./components/Profile/Profile";
import Bookmarks from "./components/Profile/Bookmarks";
import Orders from "./components/Profile/Orders";
import Address from "./components/Profile/Address";
import CreditCard from "./components/Profile/CreditCard";
import { useDispatch } from "react-redux";
import { fetchAuthUser } from "features/applicationSlice";
import { useEffect, useState } from "react";
import RequestForm from "pages/requestForm/RequestForm";
import styles from "./index.scss";
import FermerPage from "pages/FermerPage/FermerPage";

function App() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (id) {
      dispatch(fetchAuthUser(id));
    }
  }, [id]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fermers" element={<Fermers />} />
        <Route path="/bascket" element={<Bascket />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/profile/bookmarks" element={<Bookmarks />} />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/credit" element={<CreditCard />} />
        <Route path="/profile/address" element={<Address />} />
        <Route path="/profile/contacts" element={<Contacts />} />
        <Route path="/fermer/:id" element={<FermerPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
