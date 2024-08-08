import { twMerge } from 'tailwind-merge';
import Button from '../components/Button';
export default function AdminContent({className}) {
    return (
        <>
            <div className={twMerge("col-start-2 col-end-3 row-start-2 row-end-3 flex items-center justify-center gap-4 rounded-[24px] p-4", className)}>
                <form>
                    <div className="flex w-[30rem] flex-col items-center justify-evenly gap-8 rounded-[24px] border-2 border-solid border-gray-500 bg-slate-100 p-4">
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
                                >
                                    <option value="">Please select</option>
                                    <option value="JM">John Mayer</option>
                                    <option value="SRV">
                                        Stevie Ray Vaughn
                                    </option>
                                    <option value="JH">Jimi Hendrix</option>
                                    <option value="BBK">B.B King</option>
                                    <option value="AK">Albert King</option>
                                    <option value="BG">Buddy Guy</option>
                                    <option value="EC">Eric Clapton</option>
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
                                />
                            </div>

                            {/* <Link to="/signin"> */}
                            {/* </Link> */}
                        </div>
                        <Button
                            className={
                                'w-full rounded-md border-green-600 bg-green-600 text-white shadow-lg hover:bg-green-800 active:text-green-500 lg:px-[24px] lg:py-[8px]'
                            }
                        >
                            Upload
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
