// AuthContext.js
import { createContext, useContext, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const getAuthToken = () => {
        const token = localStorage.getItem('key')
        if (token) {
            return token
        }
        setIsLoggedIn(false)
    }

    const validateUser = (token) => {
        axios
            .post('http://localhost:3000/validateUser', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
            })
            .then((response) => {
                if (response.data.success) {
                    setIsLoggedIn(true)
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, getAuthToken, validateUser }}
        >
            {children}
        </AuthContext.Provider>
    )
}
