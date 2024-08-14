import React from "react";
import { Provider } from 'react-redux';
import store from "./app/store"
import UserData from "./component/UserData";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <UserData />
        </div>
      </Provider>
  );
}

export default App;