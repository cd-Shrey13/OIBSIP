import React, { useState } from 'react'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })

    async function handleOnClick() {
        axios
            .post('http://localhost:3000/signup', formData)
            .then(navigate('/signin'))
            .catch((err) => console.log('err'))
    }

    return (
        <div className="absolute z-[999] mx-auto flex h-[100vh] w-[100vw] max-w-screen-xl items-start justify-center bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-lgp-2 mx-auto">
                <h1 className="text-center text-2xl font-bold text-orange-600 sm:text-3xl">
                    Get started today
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati sunt dolores deleniti inventore quaerat mollitia?
                </p>

                <form
                    action="#"
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-[0px_0px_80px_15px_rgba(0,0,0,0.3)] sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Sign up</p>

                    <div>
                        <label htmlFor="firstname" className="sr-only">
                            First Name
                        </label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Firstname"
                                onChange={(e) =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        firstname: e.target.value,
                                    }))
                                }
                                name="firstname"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="lastname" className="sr-only">
                            First Name
                        </label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Lastname"
                                onChange={(e) =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        lastname: e.target.value,
                                    }))
                                }
                                name="lastname"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                onChange={(e) =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        email: e.target.value,
                                    }))
                                }
                            />
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
                                onChange={(e) =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        password: e.target.value,
                                    }))
                                }
                            />
                        </div>
                    </div>

                    <Button
                        className={
                            'border-orange-600 bg-orange-600 hover:text-orange-600 active:text-orange-500'
                        }
                        onClickHandler={handleOnClick}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
