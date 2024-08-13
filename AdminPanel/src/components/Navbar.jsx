import { twMerge } from 'tailwind-merge';
import BrandLogo from './BrandLogo';
import Button from './Button';
import { useMobileMenuContext } from '../Context/Context';

export default function Navbar() {
    const mobileMenuVisibility = useMobileMenuContext();
    const { setMobileMenuVisibility } = mobileMenuVisibility;

    return (
        <div
            className={twMerge(
                'flex items-center justify-between bg-[#181818] py-4 sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2'
            )}
        >
            <BrandLogo className="h-[4.5rem]" />
            <Button
                className="border-none"
                onClickHandler={() => setMobileMenuVisibility((prev) => !prev)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 72 72"
                    width="8px"
                    height="8px"
                    fill="var(--color-golden)"
                    className="size-[3.5rem]"
                >
                    <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z" />
                </svg>
            </Button>
        </div>
    );
}
