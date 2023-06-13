import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowProduct from './DetailProject/ShowProduct';
import ProductDetail from './DetailProject/Detail';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
