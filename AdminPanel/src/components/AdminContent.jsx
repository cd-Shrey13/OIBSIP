import { twMerge } from 'tailwind-merge';
import Button from '../components/Button';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AdminContent({ className }) {
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
            .post('http://localhost:3000/food/addfooditems', formData)
            .then((response) => {
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
                className={twMerge(
                    'col-start-2 col-end-3 row-start-2 row-end-3 flex items-center justify-center gap-4 rounded-[24px] p-4',
                    className
                )}
            >
                <ToastContainer />
                <form>
                    <div className="flex w-[30rem] flex-col items-center justify-evenly gap-8 rounded-[24px] border-2 border-solid border-gray-500 bg-slate-100 p-4">
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
                        <div className="w-full">
                            <label
                                for="productImage"
                                class="block text-lg font-[500] text-black"
                            >
                                {' '}
                                Product Image:{' '}
                            </label>

                            <input
                                type="file"
                                id="productImage"
                                placeholder="Type Here"
                                class="mt-1 rounded-md border-gray-400 bg-gray-300 p-2 shadow-sm sm:text-sm"
                                onChange={(e) => {
                                    setUploadedImage(e.target.files[0]);
                                }}
                            />
                        </div>

                        <div className="w-full">
                            <label
                                for="productName"
                                class="block text-lg font-[500] text-black"
                            >
                                {' '}
                                Product Name:{' '}
                            </label>

                            <input
                                type="text"
                                id="productName"
                                placeholder="Type Here"
                                class="mt-1 w-full rounded-md border-gray-200 p-2 shadow-sm sm:text-sm"
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
                                class="block text-lg font-[500] text-black"
                            >
                                {' '}
                                Product Description:{' '}
                            </label>

                            <textarea
                                id="Product_Description"
                                placeholder="Type Here"
                                class="mt-1 w-full resize-none rounded-md border-gray-200 p-2 shadow-sm sm:text-sm"
                                rows="8"
                                onChange={(e) => {
                                    setProductData((prev) => ({
                                        ...prev,
                                        description: e.target.value,
                                    }));
                                }}
                            />
                        </div>

                        <div className="flex w-full items-center justify-between gap-2 p-2">
                            <div>
                                <label
                                    for="Product_Category"
                                    class="block text-lg font-[500] text-black"
                                >
                                    {' '}
                                    Product Category:{' '}
                                </label>

                                <select
                                    name="Product_Category"
                                    id="Product_Category"
                                    className="mt-1.5 w-full rounded-lg border-gray-300 p-2 text-gray-700 sm:text-sm"
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
                                    class="block text-lg font-[500] text-black"
                                >
                                    {' '}
                                    Product Price:{' '}
                                </label>

                                <input
                                    type="text"
                                    id="productPrice"
                                    placeholder="Type Here"
                                    class="mt-1 w-full rounded-md border-gray-200 p-2 shadow-sm sm:text-sm"
                                    onChange={(e) => {
                                        setProductData((prev) => ({
                                            ...prev,
                                            price: e.target.value,
                                        }));
                                    }}
                                />
                            </div>

                            {/* <Link to="/signin"> */}
                            {/* </Link> */}
                        </div>
                        <Button
                            className={
                                'w-full rounded-md border-green-600 bg-green-600 text-white shadow-lg hover:bg-green-800 active:text-green-500 lg:px-[24px] lg:py-[8px]'
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
