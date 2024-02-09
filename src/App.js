import { Home } from '@mui/icons-material';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom" ;
import Index from "./pages/Index";
import About from "./pages/About";
import Setting from "./pages/Setting";
import Product from './pages/Product';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" exact element={<Index/>}></Route>
    <Route path="/about" exact element={<About/>}></Route>
    <Route path="/setting" exact element={<Setting/>}></Route>
    <Route path="/product" exact element={<Product/>}></Route>
   </Routes>
   
   </BrowserRouter>
    </div>
  );
}

export default App;
