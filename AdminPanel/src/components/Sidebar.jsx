import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <div className="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 h-full w-full">
                <div className="h-full w-full flex  flex-col gap-4  bg-[#181818] p-4">
                  

                    <Link to={'/'}>
                        <div
                        >
                            <label
                                htmlFor="Option1"
                                className="block w-full cursor-pointer rounded-lg border border-gray-200 bg-white p-3 text-gray-600 focus:bg-green-600"
                                tabIndex="0"
                            >
                                <input
                                    className="sr-only"
                                    id="Option1"
                                    type="radio"
                                    tabIndex="-1"
                                    name="option"
                                />

                                <span className="text-sm"> Add FoodItem </span>
                            </label>
                        </div>
                    </Link>

                    <Link to={'/ListItems'}>
                        <div
                          
                        >
                            <label
                                htmlFor="Option2"
                                className="block w-full cursor-pointer rounded-lg border border-gray-200 bg-white p-3 text-gray-600 focus:bg-green-600"
                                tabIndex="0"
                            >
                                <input
                                    className="sr-only"
                                    id="Option2"
                                    type="radio"
                                    tabIndex="-1"
                                    name="option"
                                />

                                <span className="text-sm"> View Food List </span>
                            </label>
                        </div>
                    </Link>

                    <Link to={'/ViewOrders'}>
                        <div
                          
                        >
                            <label
                                htmlFor="Option3"
                                className="block w-full cursor-pointer rounded-lg border border-gray-200 bg-white p-3 text-gray-600 focus:bg-green-600"
                                tabIndex="0"
                            >
                                <input
                                    className="sr-only"
                                    id="Option3"
                                    type="radio"
                                    tabIndex="-1"
                                    name="option"
                                />

                                <span className="text-sm"> View Orders </span>
                            </label>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
