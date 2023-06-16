import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Component/Header-Footer/HeaderNavigation'
import FooterPage from './Component/Header-Footer/FooterPage'
const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
    <>
    <React.StrictMode>
        <Router>
        <Provider store={store}>
        <Navigation />
            <App/>
        <FooterPage/>    
        </Provider>
        </Router>
    </React.StrictMode>
    </>
)