import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/store/index.js'
import { fetchNotice, fetchReview } from '@/store/board';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import '@/assets/css/reset.css'

store.dispatch(fetchNotice());
store.dispatch(fetchReview());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
