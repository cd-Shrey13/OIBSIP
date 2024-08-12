import { twMerge } from 'tailwind-merge';
import BrandLogo from './BrandLogo';
export default function Navbar({ className }) {
    return (
        <div
            className={twMerge(
                'col-start-1 col-end-3 row-start-1 row-end-2 h-[8rem] rounded-[12px] bg-[var(--color-purple)] px-8 bg-[#181818]',
                className
            )}
        >
            <BrandLogo />
        </div>
    );
}
