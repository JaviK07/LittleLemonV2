import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "../src/components/Home.jsx";




function App() {
 
  return (
    
    
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path="/foods" element={<Foods/>} /> */}
        {/* <Route  element={<Food/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
