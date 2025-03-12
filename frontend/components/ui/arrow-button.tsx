import Link from 'next/link';

import { ArrowButtonProps } from '@/types/navigation';

import ArrowRightIcon from '../icons/arrow-right-icon';

const ArrowButton = ({ href, className, children }: ArrowButtonProps) => {
    return (
        <Link href={href} className={className}>
            {children} <ArrowRightIcon />
        </Link>
    );
};

export default ArrowButton;