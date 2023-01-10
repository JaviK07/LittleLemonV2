import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/components/Home.jsx";

function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/foods" element={<foods/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
