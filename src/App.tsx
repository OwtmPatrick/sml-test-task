import React from 'react';
import { Provider } from 'react-redux';
import Form from './views/Form';
import store from './store';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

const App: React.FC = () => (
    <Provider store={store}>
        <Form />
    </Provider>
);

export default App;
