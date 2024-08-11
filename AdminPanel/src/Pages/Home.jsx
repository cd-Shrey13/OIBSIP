import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AdminContent from '../components/AdminContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import ListFooditems from './ListFoodItems';
export function Home() {
    return (
        <>
            <div className="grid h-full w-full grid-cols-[1fr_6fr] grid-rows-[1fr_10fr] gap-2 p-2 ">
                <Navbar/>
                <BrowserRouter>
                    <Sidebar className={"h-full bg-[var(--color-purple)]"}/>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Suspense fallback="Loading">
                                    <AdminContent className={"h-full w-full  bg-[var(--color-purple)]"}/>
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="/ListItems"
                            element={
                                <Suspense fallback="Loading">
                                    <ListFooditems className={"h-full w-full  bg-[var(--color-purple)]"}/>
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="/ViewOrders"
                            element={
                                <Suspense fallback="Loading">
                                    <AdminContent className={'bg-red-900'} />
                                </Suspense>
                            }
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}
