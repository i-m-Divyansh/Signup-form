import React from 'react'
import './App.css';

import Signup from './Signup';
import { Provider } from 'react-redux';
import store from './app/store';

const App = () => {
    return (
        <Provider store={store}>
            <Signup />
        </Provider>
    )
}

export default App
