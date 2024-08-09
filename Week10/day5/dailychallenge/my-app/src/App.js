import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import TaskList from "./features/TaskList"

const App = () => (
    <Provider store={store}>
      <TaskList />
    </Provider>
);

export default App;
