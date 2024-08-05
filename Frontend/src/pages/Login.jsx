import React, { useState } from 'react'
import Button from '../components/Button'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/context'
import H1 from '../components/H1'

function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { isLoggedIn, login, logout } = useAuth()

    // Handle input changes
    const handleEmailChange = (event) => {
        const { value } = event.target

        setFormData((prevData) => ({
            ...prevData,
            email: value,
        }))
    }

    const handlePasswordChange = (event) => {
        const { value } = event.target

        setFormData((prevData) => ({
            ...prevData,
            password: value,
        }))

        console.log(formData)
    }

    async function handleOnClick() {
        console.log(formData)
        axios
            .post('http://localhost:3000/signin', formData)
            .then(() => {
                navigate('/')
                login()
            })
            .catch((err) => console.log('err'))
    }

    return (
        <div className="absolute z-[999999] flex h-[100vh] w-[100vw] items-center justify-center bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-lgp-2 mx-auto">
                <H1 className={'mb-[4rem] text-black'}>Get started today</H1>

                <form
                    action="#"
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">
                        Sign in to your account
                    </p>

                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                onChange={handleEmailChange}
                                name="email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                onChange={handlePasswordChange}
                                name="password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <Button
                        className={
                            'border-green-600 bg-green-600 text-white shadow-lg hover:bg-green-800 active:text-green-500 lg:px-[24px] lg:py-[8px]'
                        }
                        onClickHandler={handleOnClick}
                    >
                        Sign In
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                        No account?
                        <Link to={'/signup'}>
                            <p className="inline-block underline">Sign up</p>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
