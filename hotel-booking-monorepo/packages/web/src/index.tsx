import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './pages/Home/Header';
import Footer from './Components/Common/Footer';
import { Provider } from 'react-redux';
import { store } from './appStore/store';
import "../src/sass/main.css"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <Header />
      <App />
      {/* <Footer /> */}
    </Provider>
    </Router>
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
