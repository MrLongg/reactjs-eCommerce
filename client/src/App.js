import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ProductPage from './pages/ProductPage/ProductPage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    const user = true
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={user ? <Navigate to ="/" /> : <Login />} />
                <Route path="/register" element={user ? <Navigate to ="/" /> : <Register />} />
            </Routes>
        </Router>
    );
}

export default App;
