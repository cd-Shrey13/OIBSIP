import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import AdminContent from '../components/AdminContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
export function Home() {
    return (
        <>
            <div className="grid h-full w-full grid-cols-[1fr_5fr] grid-rows-[1fr_10fr] gap-2 bg-white p-2">
                <Navbar />
                <BrowserRouter>
                <Sidebar />
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
                                    <AdminContent className={"bg-red-500"}/>
                                </Suspense>
                            }
                        ></Route>
                        <Route
                            path="/ViewOrders"
                            element={
                                <Suspense fallback="Loading">
                                    <AdminContent className={"bg-red-900"}/>
                                </Suspense>
                            }
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}
