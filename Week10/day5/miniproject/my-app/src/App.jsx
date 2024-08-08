import "./App.css";
import PostsList from "./features/posts/PostsList";

import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';

const App = () => (
    <Provider store={store}>
        <PostsList />
    </Provider>
);

export default App;
