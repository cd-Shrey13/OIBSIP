import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Button from './Button';
import { useMobileMenuContext } from '../Context/Context';

export default function MobileMenu({ className }) {
    const mobileMenuContext = useMobileMenuContext();
    const { mobileMenuVisibility, setMobileMenuVisibility } = mobileMenuContext;
    return (
        <div
            className={twMerge(
                'absolute flex h-full w-full flex-col items-center justify-center gap-4 rounded-[24px] p-4 backdrop-blur-md sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3',
                mobileMenuVisibility ? 'flex' : 'hidden'
            )}
        >
            <div className="top-1/4 flex w-full flex-col gap-4 rounded-[24px] bg-[#181818] p-4">
                <Button
                    className="border-none"
                    onClickHandler={() =>
                        setMobileMenuVisibility((prev) => !prev)
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="8px"
                        height="8px"
                        fill="var(--color-golden)"
                        className="inline-block size-[3rem]"
                    >
                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z" />
                    </svg>
                </Button>

                <Link to={'/'}>
                    <div
                        onClick={() => setMobileMenuVisibility((prev) => !prev)}
                    >
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
                    <div
                        onClick={() => setMobileMenuVisibility((prev) => !prev)}
                    >
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
                    <div
                        onClick={() => setMobileMenuVisibility((prev) => !prev)}
                    >
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
        </div>
    );
}
