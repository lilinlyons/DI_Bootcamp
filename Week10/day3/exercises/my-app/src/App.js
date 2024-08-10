import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';

import ManageTodo from "./features/manageTodo/manageTodo";

const App = () => (
    <Provider store={store}>
      <ManageTodo />
    </Provider>
);

export default App;
