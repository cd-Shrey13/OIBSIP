import Button from './Button'
import BrandLogo from './BrandLogo'
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/context'

function Navbar() {
    return (
        <header className=" fixed h-[6rem] w-full border-solid px-2 font-Satohi font-[900] bg-[#181818] z-[9999]">
            <nav className="flex h-full w-full items-center justify-between sm:justify-between px-2">
                <BrandLogo className={'w-[40%] justify-start sm:w-[33%] ml-2'} />
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
                    Home
                </li>
                <li className="shrink-0 border-b-2 border-transparent px-1 py-2 text-xl font-medium text-[var(--color-golden)] hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]">
                    Menu
                </li>
                <li className="shrink-0 border-b-2 border-transparent px-1 py-2 text-xl font-medium text-[var(--color-golden)] hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]">
                    Contact Us
                </li>
            </ul>
        </span>
    )
}

function NavbarRightsideList() {
    const { isLoggedIn, login, logout } = useAuth();

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
                        <Link to="/signout">
                            <Button
                                className={
                                    'border-green-600 bg-green-600 hover:bg-green-800 text-white active:text-ogreen500 lg:px-[24px] lg:py-[8px] shadow-lg'
                                }
                            >
                                Sign Out
                            </Button>
                        </Link>
                    ) : (
                        <Link to="/signin">
                            <Button
                                className={
                                    'border-green-600 bg-green-600 hover:bg-green-800 text-white  active:text-green-500 lg:px-[24px] lg:py-[8px] shadow-lg'
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
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgb(93 60 148)"
                className=" hidden sm:flex size-8 sm:size-10 shadow-lg p-2 bg-white rounded-md hover:-translate-y-[2px] transition-all"
            >
                <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                />
            </svg>
        </>
    )
}

function CartIcon() {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgb(93 60 148)"
                className="size-8 sm:size-10 shadow-lg p-2 bg-white rounded-md hover:-translate-y-[2px] transition-all"
                
            >
                <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clipRule="evenodd"
                />
            </svg>
        </>
    )
}

export default Navbar
