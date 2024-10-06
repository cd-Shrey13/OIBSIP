import Button from './Button'
import BrandLogo from './BrandLogo'
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/context'
import { useStoreContext } from '../Contexts/StoreContxt'
import { useEffect } from 'react'

function Navbar() {
    return (
        <header className="sticky top-0 z-[9999] h-[6rem] w-full border-solid bg-[#181818] px-2 font-Satohi font-[900]">
            <nav className="flex h-full w-full items-center justify-between px-2 sm:justify-between">
                <Link to="/" className={'ml-2 w-[40%] sm:w-[33%]'}>
                    <BrandLogo className={'ml-2 w-[100%] justify-start'} />
                </Link>
                <NavbarMiddleList />
                <NavbarRightsideList />
            </nav>
        </header>
    )
}

function NavbarMiddleList() {
    return (
        <span className="hidden h-full items-center justify-center md:flex md:w-[33%]">
            <ul className="flex h-full w-full items-center justify-evenly gap-4 px-4">
                <li className="shrink-0 border-b-2 border-transparent px-1 py-2 text-xl font-medium text-[var(--color-golden)] hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]">
                    <Link
                        to="/"
                        className={'ml-2 w-[40%] justify-start sm:w-[33%]'}
                    >
                        Home
                    </Link>
                </li>
                <li className="shrink-0 border-b-2 border-transparent px-1 py-2 text-xl font-medium text-[var(--color-golden)] hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]">
                    <a href="#menu">Menu</a>
                </li>
                <li className="shrink-0 border-b-2 border-transparent px-1 py-2 text-xl font-medium text-[var(--color-golden)] hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]">
                    <a href="#footer">Contact Us</a>
                </li>
            </ul>
        </span>
    )
}

function NavbarRightsideList() {
    const { isLoggedIn, login, logout } = useAuth()

    return (
        <span className="flex h-full w-[60%] items-center justify-end sm:w-[33%]">
            <ul className="flex h-full items-center justify-center gap-4 pr-2 sm:w-full sm:justify-end">
                <li className="flex justify-center">
                    <button type="button">
                        <SearchIcon />
                    </button>
                </li>
                <li className="flex justify-center">
                    <button type="button">
                        <CartIcon />
                    </button>
                </li>
                <li className="flex justify-center">
                    {isLoggedIn ? (
                        <Link to="/">
                            <Button
                                className={
                                    'active:text-ogreen500 border-green-600 bg-green-600 text-white shadow-lg hover:bg-green-800 lg:px-[24px] lg:py-[8px]'
                                }
                                onClickHandler={() => {
                                    localStorage.removeItem('key');
                                    logout();
                                }}
                            >
                                Sign Out
                            </Button>
                        </Link>
                    ) : (
                        <Link to="/signin">
                            <Button
                                className={
                                    'border-green-600 bg-green-600 text-white shadow-lg hover:bg-green-800 active:text-green-500 lg:px-[24px] lg:py-[8px]'
                                }
                            >
                                Sign In
                            </Button>
                        </Link>
                    )}
                </li>
            </ul>
        </span>
    )
}

function SearchIcon() {
    return (
        <span title="Search Items">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgb(93 60 148)"
                className="hidden size-8 rounded-md bg-white p-2 shadow-lg transition-all hover:-translate-y-[2px] sm:flex sm:size-10"
            >
                <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                />
            </svg>
        </span>
    )
}

function CartIcon() {
    const { itemsInCart } = useStoreContext()
    const NumberOfItemsInCart = itemsInCart.reduce((acc, curr) => {
      return acc +=    curr.quantity
    },0)
    return (
        <>
            {NumberOfItemsInCart ? (
                <span className="absolute right-[7.5rem] top-[20px] z-[9999999999] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-600 lg:right-[8.7rem] lg:top-[20px]">
                    <p className="p-1 text-[.8rem] font-[900] text-white">
                        {NumberOfItemsInCart}
                    </p>
                </span>
            ) : (
                <></>
            )}
            <Link to="/cart">
                <span
                    className="flex size-8 items-center justify-center rounded-md bg-white shadow-lg transition-all hover:-translate-y-[2px] sm:size-10"
                    title="View Cart"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                </span>
            </Link>
        </>
    )
}

export default Navbar
