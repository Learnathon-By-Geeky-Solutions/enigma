'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { LOGO_URL } from '@/config/constants';
import { navLink } from '@/config/navigation';

import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import AvatarDropdown from './avatar-dropdown';
import Container from './container';
import Social from './social';

type UserProps = {
    user?: {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    };
};

type ThrottledFunction = (...args: unknown[]) => void;

const Navbar = ({ session }: { session: UserProps | null }) => {
    const pathname = usePathname();
    const [hasShadow, setHasShadow] = useState(false);
    const SCROLL_THRESHOLD = 44;

    const mobileNavLink = session?.user ? navLink : [...navLink, { title: 'Log in', url: '/login' }];

    useEffect(() => {
        // Throttle function to limit execution frequency
        const throttle = (func: ThrottledFunction, limit: number): ThrottledFunction => {
            let inThrottle: boolean;

            const resetThrottle = () => {
                inThrottle = false;
            };

            const throttledFunction: ThrottledFunction = function (this: unknown, ...args: unknown[]) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(resetThrottle, limit);
                }
            };

            return throttledFunction;
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
        <header
            className={`sticky top-0 left-0 right-0 z-50 px-4 bg-white py-5 md:py-6 text-heading-color transition-shadow duration-300 ${
                hasShadow ? 'shadow-[0_10px_15px_rgba(25,25,25,0.1)]' : 'shadow-none'
            }`}
        >
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
                                        } font-medium hover:text-theme-primary`}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {session?.user ? (
                        <AvatarDropdown />
                    ) : (
                        <Link
                            href='/login'
                            className='hidden py-2 font-semibold border rounded-full border-border-color-1 px-7 bg-theme-secondary hover:text-white hover:bg-theme-primary lg:block'
                            aria-label='Log in to your account'
                        >
                            Log in
                        </Link>
                    )}

                    <div className='flex items-center gap-4 lg:hidden'>
                        {session?.user && <AvatarDropdown />}

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
                                    {mobileNavLink.map(({ title, url }, index) => (
                                        <li
                                            key={title}
                                            className={`py-2 border-t ${
                                                index === mobileNavLink.length - 1 ? 'border-b' : ''
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