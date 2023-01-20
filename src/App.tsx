import React from 'react';
import { Provider } from 'react-redux';
import Form from './views/Form';
import store from './store';

const App: React.FC = () => (
    <Provider store={store}>
        <Form />
    </Provider>
);

export default App;
