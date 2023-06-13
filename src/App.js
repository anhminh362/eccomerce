import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ShowProduct from './DetailProject/ShowProduct';
import Footer from './Part/Footer';
import Header from './Part/Header';
import ProductDetail from './DetailProject/ProductDetail';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path="/clothes/:id" element={<ProductDetail />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
