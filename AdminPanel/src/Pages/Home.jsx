import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import AdminContent from '../components/AdminContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import ListFooditems from './ListFoodItems';
import { MobileMenuProvider } from '../Context/Context';

export function Home() {
    return (
        <>
            <div className="flex h-full w-full flex-col sm:grid sm:grid-cols-[1fr_6fr] sm:grid-rows-[1fr_10fr]">
                <MobileMenuProvider>
                    <Navbar />
                    <BrowserRouter>
                        <MobileMenu />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Suspense fallback="Loading">
                                        <AdminContent className={''} />
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
                                        <AdminContent
                                            className={'bg-red-900'}
                                        />
                                    </Suspense>
                                }
                            ></Route>
                        </Routes>
                    </BrowserRouter>
                </MobileMenuProvider>
            </div>
        </>
    );
}
