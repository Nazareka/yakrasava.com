import React from 'react'
import ReactDOM from 'react-dom'
import App from './scripts/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './scripts/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()

// REACT_APP_API_URL=https://api-yakrasava.herokuapp.com
// REACT_APP_API_WEBSOCKETS_URL=wss://api-yakrasava.herokuapp.com
// REACT_APP_FRONT_URL=https://yakrasava.herokuapp.com

// REACT_APP_API_URL=http://localhost:8000
// REACT_APP_API_WEBSOCKETS_URL=ws://localhost:8000
// REACT_APP_FRONT_URL=http://localhost:3000
