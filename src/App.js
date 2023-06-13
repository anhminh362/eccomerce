import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ShowProduct from './DetailProject/ShowProduct';
import Footer from './Part/Footer';
import Header from './Part/Header';
import ProductDetail from './DetailProject/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Header></Header>
        <ShowProduct></ShowProduct>
        <Footer></Footer>



        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
