import Button from './Button'
import BrandLogo from './BrandLogo'

function Navbar() {
    return (
        <header className="h-[6rem] w-full border-solid font-Satohi font-[900] px-2">
            <nav className="flex h-full w-full items-center justify-between sm:justify-between">
                <BrandLogo className={'w-[40%] justify-start sm:w-[33%]'} />
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
                <li className="shrink-0 border-b-2 border-transparent px-1 py-2 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    Home
                </li>
                <li className="shrink-0 border-b-2 border-transparent px-1 py-2 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    Menu
                </li>
                <li className="shrink-0 border-b-2 border-transparent px-1 py-2 text-xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    Contact Us
                </li>
            </ul>
        </span>
    )
}

function NavbarRightsideList() {
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
                    <Button
                        className={
                            'border-orange-600 bg-orange-600 hover:text-orange-600 active:text-orange-500'
                        }
                    >
                        Sign In
                    </Button>
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
                fill="currentColor"
                className="size-6 sm:size-10"
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
                fill="currentColor"
                className="size-6 sm:size-10"
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
