import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { AuthProvider, CartProvider } from './Contexts/context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <AuthProvider>
                <CartProvider>
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Suspense fallback={'loading...'}>
                                    <Home />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="/signup"
                            element={
                                <Suspense fallback={'loading...'}>
                                    <SignUp />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="/signin"
                            element={
                                <Suspense fallback={'loading...'}>
                                    <Login />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="/cart"
                            element={
                                <Suspense fallback={'loading...'}>
                                    <Cart />
                                </Suspense>
                            }
                        ></Route>
                    </Routes>
                </CartProvider>
            </AuthProvider>
        </React.StrictMode>
    </BrowserRouter>
)
