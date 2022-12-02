import logo from './logo.svg';
import './App.css';
import Signin from "./components/Signin";
import Registration from "./components/Registration";
import ViewProducts from './components/ViewProducts';
import Home from './components/Home';
import AdminViewProducts from './components/AdminViewProducts';
import AdminAddProducts from './components/AdminAddProducts';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={ <Registration/> } />
        <Route path="/signin" element={ <Signin/> } />
        <Route path="/viewProducts" element={<ViewProducts />} />
        
      {/* Admin */}
        <Route path="/admin/viewProducts" element={<AdminViewProducts />} />
        <Route path="/admin/addProducts" element={<AdminAddProducts />} />

      </Routes>
    </div>
  );
}

export default App;
