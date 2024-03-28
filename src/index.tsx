import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router } from '@components/router/router';
import { store } from '@redux/configure-store';
import { ConfigProvider } from 'antd';
import moment from 'moment';

import { locale } from './locale/locale';

import 'antd/dist/antd.css';
import 'normalize.css';
import './index.css';
import './index.module.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

moment.locale('ru', {
    week: {
        dow: 1,
    },
});

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider locale={locale}>
                <Router />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>,
);
