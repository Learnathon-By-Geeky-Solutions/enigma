'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { LayoutGrid, UserRound } from 'lucide-react';

import { LOGO_URL } from '@/config/constants';
import { navLink } from '@/config/navigation';

import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import Container from './container';
import Social from './social';

const Navbar = () => {
    const pathname = usePathname();
    const [hasShadow, setHasShadow] = useState(false);
    const SCROLL_THRESHOLD = 44;

    useEffect(() => {
        // Throttle function to limit execution frequency
        const throttle = (func: (...args: unknown[]) => void, limit: number): (...args: unknown[]) => void => {
            let inThrottle: boolean;

            return function(this: unknown, ...args: unknown[]) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        };
        
        const handleScroll = throttle(() => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        }, 100);
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 px-4 bg-white py-6 text-heading-color transition-shadow duration-300 ${hasShadow ? 'shadow-[0_10px_15px_rgba(25,25,25,0.1)]' : 'shadow-none'}`}>
            <Container>
                <nav className='flex items-center justify-between'>
                    <Link href='/'>
                        <Image src={LOGO_URL} alt='Logo' width={153} height={38} />
                    </Link>

                    <div className='hidden lg:block'>
                        <ul className='flex gap-6'>
                            {navLink.map(({ title, url }) => (
                                <li key={title}>
                                    <Link
                                        href={url}
                                        className={`${
                                            pathname === url ? 'text-theme-primary' : ''
                                        } font-semibold hover:text-theme-primary`}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link
                        href='/login'
                        className='hidden py-2 font-semibold border rounded-full border-border-color-1 px-7 bg-theme-secondary hover:text-white hover:bg-theme-primary lg:block'
                        aria-label='Log in to your account'
                    >
                        Log in
                    </Link>

                    <div className='flex items-center gap-4 lg:hidden'>
                        <Link
                            href='/login'
                            className='p-2 rounded-full bg-color-gray text-body-color hover:bg-theme-primary hover:text-white'
                        >
                            <UserRound />
                        </Link>

                        {/* Mobile menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <button type='button' className='text-theme-primary'>
                                    <LayoutGrid className='size-8' />
                                </button>
                            </SheetTrigger>

                            <SheetContent className='w-3/5 bg-white'>
                                <SheetHeader>
                                    <Image src={LOGO_URL} alt='Logo' width={153} height={38} />
                                    <SheetTitle className='hidden' />
                                    <SheetDescription className='hidden' />
                                </SheetHeader>

                                <ul className='flex flex-col mt-8 mb-6'>
                                    {navLink.map(({ title, url }, index) => (
                                        <li
                                            key={title}
                                            className={`py-2 border-t ${
                                                index === navLink.length - 1 ? 'border-b' : ''
                                            }`}
                                        >
                                            <Link
                                                href={url}
                                                className={`${
                                                    pathname === url ? 'text-theme-primary' : ''
                                                } font-medium hover:text-theme-primary`}
                                            >
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <SheetFooter>
                                    <Social
                                        className='flex justify-between w-full'
                                        urlClassName='size-10 flex justify-center items-center border rounded text-body-color hover:bg-theme-primary hover:text-white group hover:opacity-80 focus:ring-2'
                                        youtubePolygonClassName='fill-white group-hover:fill-theme-primary'
                                    />
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
