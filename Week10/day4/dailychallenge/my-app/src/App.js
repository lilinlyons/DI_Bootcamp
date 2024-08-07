import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Counter from "./features/ageCounter/ageCounter";

const App = () => (
    <Provider store={store}>
      <Counter />
    </Provider>
);

export default App;
