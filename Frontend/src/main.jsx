import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Login />
        <Navbar />
        <Home />
        <Footer />
    </React.StrictMode>
)
