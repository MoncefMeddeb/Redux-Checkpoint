import React from 'react';
import { Provider } from 'react-redux';
import store from './Components/store';
import AddTask from './Components/add';
import ListTask from './Components/ListTask';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
