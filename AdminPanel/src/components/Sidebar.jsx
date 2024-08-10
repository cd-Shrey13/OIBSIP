import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function Sidebar({ className }) {
    return (
        <div className={twMerge("col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col gap-4 rounded-[24px] bg-[#e84545] p-4 h-[90%]",className)}>
            <Link to={'/'}>
                <div>
                    <label
                        for="Option1"
                        class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-[var(--color-purple)] has-[:checked]:text-white"
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
                        for="Option2"
                        class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-[var(--color-purple)] has-[:checked]:text-white"
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
                        for="Option3"
                        class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-[var(--color-purple)] has-[:checked]:text-white"
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
