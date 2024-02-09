import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@redux/configure-store';
import { Router } from '@components/router';

import 'antd/dist/antd.css';
import 'normalize.css';
import './index.css';
import './index.module.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
);
