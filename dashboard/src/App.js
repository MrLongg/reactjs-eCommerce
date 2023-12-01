import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';

import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Home from './pages/Home/Home';

const cx = classNames.bind(styles);
function App() {
    return (
        <div className="App">
            <Topbar />
            <div className={cx('container')}>
                <Sidebar />
                <Home />
            </div>
        </div>
    );
}

export default App;
