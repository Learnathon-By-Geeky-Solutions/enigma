import Link from 'next/link';

import ArrowRightIcon from './icons/arrow-right-icon';

import { ArrowButtonProps } from '@/types/navigation';

const ArrowButton = ({ href, className, children }: ArrowButtonProps) => {
    return (
        <Link href={href} className={className}>
            {children}{' '}
            <ArrowRightIcon />
        </Link>
    );
};

export default ArrowButton;