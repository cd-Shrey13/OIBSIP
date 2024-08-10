import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AdminContent from '../components/AdminContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import ListFooditems from './ListFoodItems';
export function Home() {
    return (
        <>
            <div className="grid h-full w-full grid-cols-[1fr_5fr] grid-rows-[1fr_10fr] gap-2 p-2 bg-[#6a2626]">
                <Navbar/>
                <BrowserRouter>
                    <Sidebar  className="h-[10%]" />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Suspense fallback="Loading">
                                    <AdminContent />
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="/ListItems"
                            element={
                                <Suspense fallback="Loading">
                                    <ListFooditems />
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
