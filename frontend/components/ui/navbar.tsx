'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { LayoutGrid, UserRound } from 'lucide-react';

import { LOGO_URL } from '@/config/constants';
import { navLink } from '@/config/navigation';

import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import Container from './container';

import Social from './social';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <header className='fixed top-0 left-0 right-0 z-50 px-4 py-6 text-[#161439] bg-green-100'>
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
                                            pathname === url ? 'text-[#5751E1]' : ''
                                        } font-semibold hover:text-[#5751E1]`}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link
                        href='/login'
                        className='px-7 py-2 font-semibold rounded-full bg-[#FFC224] hover:text-white hover:bg-[#5751E1] hidden lg:block border border-gray-400'
                        aria-label='Log in to your account'
                    >
                        Log in
                    </Link>

                    <div className='flex items-center gap-4 lg:hidden'>
                        <Link
                            href='/login'
                            className='bg-[#f4f4f4] text-[#6D6C80] hover:bg-[#5751E1] hover:text-white p-2 rounded-full'
                        >
                            <UserRound />
                        </Link>

                        {/* Mobile menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <button type='button' className='text-[#5751E1]'>
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
                                                    pathname === url ? 'text-[#5751E1]' : ''
                                                } font-medium hover:text-[#5751E1]`}
                                            >
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <SheetFooter>
                                    <Social
                                        className='flex justify-between w-full'
                                        urlClassName='size-10 flex justify-center items-center border rounded text-gray-500 hover:bg-[#5751E1] hover:text-white group'
                                        iconClassName='fill-white group-hover:fill-[#5751E1]'
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
