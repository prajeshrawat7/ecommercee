import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Categories from "./components/Categories";

const App = () => {
  return (<div className="w-[100%] h-[100vh] overflow-x-hidden">
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/category/:category" element={<Categories/>} />
        </Routes>
  </div>)
};

export default App;
