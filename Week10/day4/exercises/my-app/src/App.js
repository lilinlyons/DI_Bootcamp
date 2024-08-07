import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import UserData from './components/userData';

const App = () => (
    <Provider store={store}>
        <UserData />
    </Provider>
);

export default App;
