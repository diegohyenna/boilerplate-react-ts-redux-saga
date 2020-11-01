import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import SignIn from './pages/SignIn';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
}

export default App;
