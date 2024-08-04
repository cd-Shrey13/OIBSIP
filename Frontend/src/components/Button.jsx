import { twMerge } from 'tailwind-merge'

function Button({ children, className, onClickHandler}) {
    return (
        <button
            type="button"
            className={twMerge(
                "font-lg inline-block text-nowrap rounded border px-4 py-1 text-[900] text-white hover:bg-transparent focus:outline-none focus:ring",
                className
            )} onClick={onClickHandler}
        >
            {children}
        </button>
    )
}

export default Button
