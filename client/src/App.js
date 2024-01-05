import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ProductPage from './pages/ProductPage/ProductPage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from './pages/Success/Success';
import { useSelector } from 'react-redux';

function App() {
    const user = useSelector(state => state.user.currentUser)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/success" element={<Success />} />
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route path="/register" element={user ? <Home /> : <Register />} />
            </Routes>
        </Router>
    );
}

export default App;
