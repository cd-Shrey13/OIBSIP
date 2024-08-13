import { twMerge } from 'tailwind-merge';
import Button from '../components/Button';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminContent({ className }) {
    const URL = 'http://localhost:3000';
    const [uploadedImage, setUploadedImage] = useState(null);
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Salad',
    });

    async function onSubmitHandler(e) {
        const { name, description, category, price } = productData;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('image', uploadedImage);
        await axios
            .post(`${URL}/food/addfooditems`, formData)
            .then(() => {
                setProductData({
                    name: '',
                    description: '',
                    price: '',
                    category: 'Salad',
                });
                setUploadedImage(null);
                toast('Food item added successfully!');
            })
            .catch((err) => console.log(err.message));
    }
    return (
        <>
            <div
                className={
                    'flex items-center justify-center bg-slate-50 p-2 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3'
                }
            >
                <ToastContainer />
                <form className="w-full">
                    <div className="flex flex-col items-center justify-evenly gap-8 rounded-[24px] p-4">
                        {uploadedImage && (
                            <span>
                                <img
                                    src={
                                        uploadedImage
                                            ? URL.createObjectURL(uploadedImage)
                                            : ''
                                    }
                                    className="mt-8 rounded-[24px]"
                                    alt="Image"
                                />
                            </span>
                        )}
                        <div className="">
                            <p className="block text-lg font-[500] text-black">
                                {' '}
                                Product Image:{' '}
                            </p>
                            <label
                                htmlFor="productImage"
                                className="font-lg flex items-center justify-center gap-2 rounded-[8px] bg-green-500 px-[16px] py-[8px] text-lg font-[500] text-white active:bg-green-700"
                            >
                                {' '}
                                Choose File{' '}
                                <svg
                                    width="8px"
                                    height="8px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="upload"
                                    className="size-[20px]"
                                    fill="#ffffff"
                                >
                                    <path d="M20,15a1,1,0,0,0-1,1V20a.22.22,0,0,1-.15.05H5.14C5.05,20,5,20,5,20V16a1,1,0,0,0-2,0v4a2.08,2.08,0,0,0,2.14,2H18.86A2.08,2.08,0,0,0,21,20V16A1,1,0,0,0,20,15Z"></path>
                                    <path d="M8.71,7.71,11,5.41V16a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4h0a1.15,1.15,0,0,0-.33-.21.94.94,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21h0l-4,4A1,1,0,1,0,8.71,7.71Z"></path>
                                </svg>
                            </label>

                            <input
                                type="file"
                                id="productImage"
                                placeholder="Type Here"
                                className="hidden"
                                onChange={(e) => {
                                    setUploadedImage(e.target.files[0]);
                                }}
                            />
                        </div>

                        <div className="w-full">
                            <label
                                for="productName"
                                className="block text-lg font-[500] text-black"
                            >
                                {' '}
                                Product Name:{' '}
                            </label>

                            <input
                                type="text"
                                id="productName"
                                placeholder="Type Here"
                                className="mt-1 w-full rounded-md border-gray-200 p-2 shadow-sm sm:text-sm"
                                onChange={(e) => {
                                    setProductData((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }));
                                }}
                            />
                        </div>

                        <div className="w-full">
                            <label
                                for="Product_Description"
                                className="block text-lg font-[500] text-black"
                            >
                                {' '}
                                Product Description:{' '}
                            </label>

                            <textarea
                                id="Product_Description"
                                placeholder="Type Here"
                                className="mt-1 w-full resize-none rounded-md border-gray-200 p-2 shadow-sm sm:text-sm"
                                rows="8"
                                onChange={(e) => {
                                    setProductData((prev) => ({
                                        ...prev,
                                        description: e.target.value,
                                    }));
                                }}
                            />
                        </div>

                        <div className="flex w-full flex-col items-start justify-center gap-2 p-2">
                            <div>
                                <label
                                    for="Product_Category"
                                    className="block text-lg font-[500] text-black"
                                >
                                    {' '}
                                    Product Category:{' '}
                                </label>

                                <select
                                    name="Product_Category"
                                    id="Product_Category"
                                    className="mt-1.5 rounded-lg border-gray-300 bg-white p-2 px-[16px] py-[8px] text-gray-700 sm:text-sm"
                                    onChange={(e) => {
                                        setProductData((prev) => ({
                                            ...prev,
                                            category: e.target.value,
                                        }));
                                    }}
                                >
                                    <option value="Salad">Salad</option>
                                    <option value="Rolls">Rolls</option>
                                    <option value="Deserts">Deserts</option>
                                    <option value="Sandwich">Sandwich</option>
                                    <option value="Cake">Cake</option>
                                    <option value="Pure Veg">Pure Veg</option>
                                    <option value="Pasta">Pasta</option>
                                    <option value="Noodles">Noodles</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    for="productPrice"
                                    className="block text-lg font-[500] text-black"
                                >
                                    {' '}
                                    Product Price:{' '}
                                </label>

                                <input
                                    type="number"
                                    id="productPrice"
                                    placeholder="Type Here"
                                    className="mt-1 rounded-md border-gray-200 p-2 shadow-sm sm:text-sm"
                                    onChange={(e) => {
                                        setProductData((prev) => ({
                                            ...prev,
                                            price: e.target.value,
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                        <Button
                            className={
                                'font-lg flex items-center justify-center gap-2 rounded-[8px] bg-green-500 px-[32px] py-[8px] text-lg font-[500] text-white active:bg-green-700'
                            }
                            onClickHandler={onSubmitHandler}
                        >
                            Upload
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
