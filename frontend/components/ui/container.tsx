import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <div className={cn('mx-auto max-w-7xl', className)}>{children}</div>
    );
};

export default Container;