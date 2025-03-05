import Link from 'next/link';

import { ArrowButtonProps } from '@/types/navigation';

const ArrowButton = ({ href, className, children }: ArrowButtonProps) => {
    return (
        <Link href={href} className={className}>
            {children}{' '}
            <svg
                width='16'
                height='14'
                viewBox='0 0 16 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-label='arrow-right'
                role='img'
            >
                <path
                    d='M1 7L15 7M15 7L9 1M15 7L9 13'
                    stroke='currentcolor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </Link>
    );
};

export default ArrowButton;