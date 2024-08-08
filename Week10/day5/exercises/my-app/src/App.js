import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import BookList from "./features/books/BookList";

const App = () => (
    <Provider store={store}>
      <BookList />
    </Provider>
);

export default App;
