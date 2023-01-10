import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "../src/components/Home.jsx";
import Foods from "./components/Foods.jsx";
import Food from "./components/Food.jsx";


function App() {
 
  return (
    
    
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/foods" element={<Foods/>} />
        <Route path="/foods/:id" element={<Food/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
