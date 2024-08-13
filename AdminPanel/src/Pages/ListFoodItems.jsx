import { useEffect, useState } from 'react';
import { food_list } from '../../../Frontend/src/assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

export default function ListFooditems({ className }) {
    const [itemList, setItemList] = useState(null);
    const URL = 'http://localhost:3000';

    async function removeItemFromList(filterItemId) {
        await axios.post(`${URL}/food/removefooditems`, {
            id: filterItemId,
        });
        if (!response.data.success) {
            toast.error('Some Error occured');
            return;
        }
        toast('Some Item removed!');
        fetchFoodList();
    }

    async function fetchFoodList() {
        const response = await axios.get(`${URL}/food/listfooditems`);
        // alert("request sent!")

        if (!response.data.success) {
            toast.error('Some Error occured');
            return;
        }
        setItemList(response.data.data);
    }

    useEffect(() => {
        fetchFoodList();
    }, []);

    return (
        <>
            {itemList ? (
                <section
                    className={twMerge(
                        'flex h-full w-full flex-col items-center justify-start gap-2 bg-[#181818] px-2 py-4 font-Satohi',
                        className
                    )}
                >
                    <header className="flex w-full flex-col items-start justify-center gap-2 rounded-[12px] px-2 py-4">
                        <h2 className="text-[2rem] font-[900] text-white">
                            All Food List
                        </h2>
                        {/* <div className="hidden w-full border-2 border-slate-950">
                            <ul className="flex w-full justify-between text-[1.3rem] font-[600]">
                                <li className="w-[20%] p-2 text-center">
                                    Image{' '}
                                </li>
                                <li className="w-[20%] p-2 text-center">
                                    Name
                                </li>
                                <li className="w-[20%] p-2 text-center">
                                    Category
                                </li>
                                <li className="w-[20%] p-2 text-center">
                                    Price
                                </li>
                                <li className="w-[20%] p-2 text-center">
                                    Action
                                </li>
                            </ul>
                        </div> */}
                    </header>
                    <div className="flex h-[65vh] w-full flex-col items-center justify-start gap-2 overflow-y-scroll rounded-lg bg-black p-2">
                        {itemList.map((item, index) => (
                            <CartItemCard
                                product={item}
                                removeItemFromList={removeItemFromList}
                                key={index}
                            />
                        ))}
                    </div>
                </section>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

function CartItemCard({ product, removeItemFromList }) {
    const { _id, name, image, price, description, category } = product;

    function handleOnClick(id) {
        removeItemFromList(id);
    }
    return (
        // <li className="mb-4 flex w-full items-center justify-center rounded-[12px] bg-slate-100">
        <div className="flex w-full items-center justify-between rounded-lg bg-white p-2 text-[1.3rem] font-[600]">
            <div className="flex items-center justify-center">
                <img
                    src={`http://localhost:3000/images/${image}`}
                    alt=""
                    className="size-[5rem] rounded object-cover"
                />
            </div>
            <div className="flex w-[60%] flex-col items-start justify-center px-2">
                <h3 className="text-[1.2rem] font-[900]">{name}</h3>
                <p className="inline text-[.9rem] font-[700] text-gray-700">
                    {category}
                </p>
                <p className="inline text-[.9rem] font-[900] text-red-700">
                    {price}₹
                </p>
            </div>
            <div className="flex items-center justify-center p-2">
                {/* <span className="flex items-center justify-center bg-red-200"> */}
                <button
                    className="flex items-center justify-center text-gray-600 transition hover:text-red-600"
                    onClick={() => removeItemFromList(_id)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-[1.5rem]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
