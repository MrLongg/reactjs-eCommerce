import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from '../../dashboard/src/components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GlobalStyles>,
);
