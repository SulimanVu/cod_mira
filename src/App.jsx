import { Routes, Route } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "features/applicationSlice";
import { useEffect, useState } from "react";
import RequestForm from "./pages/requestForm/RequestForm";
import FermerPage from "./pages/FermerPage/FermerPage";
import PaymentOptions from "./components/Payment/Payment";
import AddProd from "./components/Profile/AddProd";
import Request from "./components/Request/Request";

function App() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");

  const token = useSelector((state)=> state.application.token)
  const [alert, setAlert] = useState(false);


  useEffect(() => {
    dispatch(userActions.initAuthData());
}, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fermers" element={<Fermers />} />
        <Route path="/bascket" element={<Bascket />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/profile/bookmarks" element={<Bookmarks />} />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/credit" element={<CreditCard />} />
        <Route path="/profile/address" element={<Address />} />
        <Route path="/profile/contacts" element={<Contacts />} />
        <Route path="/profile/addProd" element={<AddProd />} />
        <Route path="/fermer/:id" element={<FermerPage />} />
        <Route path="/pay" element={<PaymentOptions />} />
        <Route path="/delivery" element={<RequestForm setAlert={setAlert} />} />
        <Route path="/request" element={<Request />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
