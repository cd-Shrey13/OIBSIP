import { Link } from 'react-router-dom';

export function Sidebar() {
    return (
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col gap-4 rounded-[24px] bg-[white] p-4">
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

                        <span class="text-sm"> Option 1 </span>
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

                        <span class="text-sm"> Option 2 </span>
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

                        <span class="text-sm"> Option 3 </span>
                    </label>
                </div>
            </Link>
        </div>
    );
}
