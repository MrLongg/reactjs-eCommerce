import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';

import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';

const cx = classNames.bind(styles);
function App() {
    return (
        <Router>
            <Topbar />
            <div className={cx('container')}>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/users" element={<UserList />} />
                    <Route path='/user/:userId' element={<User />} />
                    <Route path='/newUser' element={<NewUser />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
