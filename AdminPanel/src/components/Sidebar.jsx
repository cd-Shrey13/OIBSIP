import { useState } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function Sidebar({ className }) {
    // const [checkedButton, setCheckedButton] = useState[true,false,false]
    return (
        <div
            className={twMerge(
                'col-start-1 col-end-2 row-start-2 row-end-3 flex h-[90%] flex-col gap-4 rounded-[24px] p-4 bg-[#181818]',
                className
            )}
        >
            <Link to={'/'}>
                <div>
                    <label
                        htmlFor="Option1"
                        class="block w-full cursor-pointer rounded-lg border border-gray-200 bg-white p-3 text-gray-600 focus:bg-green-600"
                        tabindex="0"
                    >
                        <input
                            class="sr-only"
                            id="Option1"
                            type="radio"
                            tabindex="-1"
                            name="option"
                        />

                        <span class="text-sm"> Add FoodItem </span>
                    </label>
                </div>
            </Link>

            <Link to={'/ListItems'}>
                <div>
                    <label
                        htmlFor="Option2"
                        class="block w-full cursor-pointer rounded-lg border border-gray-200 bg-white p-3 text-gray-600 focus:bg-green-600"
                        tabindex="0"
                    >
                        <input
                            class="sr-only"
                            id="Option2"
                            type="radio"
                            tabindex="-1"
                            name="option"
                        />

                        <span class="text-sm"> View Food List </span>
                    </label>
                </div>
            </Link>

            <Link to={'/ViewOrders'}>
                <div>
                    <label
                        htmlFor="Option3"
                        class="block w-full cursor-pointer rounded-lg border border-gray-200 bg-white p-3 text-gray-600 focus:bg-green-600"
                        tabindex="0"
                    >
                        <input
                            class="sr-only"
                            id="Option3"
                            type="radio"
                            tabindex="-1"
                            name="option"
                        />

                        <span class="text-sm"> View Orders </span>
                    </label>
                </div>
            </Link>
        </div>
    );
}
