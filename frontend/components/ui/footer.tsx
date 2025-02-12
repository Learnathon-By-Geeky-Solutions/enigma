import Image from 'next/image';
import Link from 'next/link';

import '@/styles/footer.css';

import { SECONDARY_LOGO_URL } from '@/config/constants';

const Footer = () => {
    return (
        <footer>
            <div className='px-4 py-20 md:px-14 bg-color-black'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='mb-6 lg:mb-0'>
                        <figure>
                            <Image src={SECONDARY_LOGO_URL} alt='Logo' width={156} height={38} />
                        </figure>
                        <div className='mt-8 text-color-gray-1'>
                            <p>
                                When an unknown printer took galley of type and scrambled it to make pspecimen bookt
                                has.
                            </p>
                            <div className='mt-4 font-semibold'>
                                <h4>463 7th Ave, NY 10018, USA</h4>
                                <h4 className='mt-1.5'>+123 88 9900 456</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className='mb-6 md:ml-16 lg:mb-0'>
                        <h2 className='relative pb-4 mb-5 text-2xl font-semibold text-white'>
                            Useful Links
                            <span className='absolute bottom-0 left-0 w-10 h-1 rounded-full bg-theme-primary'></span>
                        </h2>
                        <ul className='font-medium text-color-gray-1'>
                            <li className='mb-3'>
                                <Link href='/' className='relative list-wrap'>
                                    Our values
                                </Link>
                            </li>
                            <li className='relative mb-3'>
                                <Link href='/' className='relative list-wrap'>
                                    Our advisory board
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='/' className='relative list-wrap'>
                                    Our partners
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='relative list-wrap'>
                                    Work at Future Learn
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='mb-6 lg:ml-8 md:mb-0'>
                        <h2 className='relative pb-4 mb-5 text-2xl font-semibold text-white'>
                            Our Company
                            <span className='absolute bottom-0 left-0 w-10 h-1 rounded-full bg-theme-primary'></span>
                        </h2>
                        <ul className='font-medium text-color-gray-1'>
                            <li className='mb-3'>
                                <Link href='/' className='relative list-wrap'>
                                    Contact Us
                                </Link>
                            </li>
                            <li className='relative mb-3'>
                                <Link href='/' className='relative list-wrap'>
                                    Become a partner
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='/' className='relative list-wrap'>
                                    Blog
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='/' className='relative list-wrap'>
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='md:ml-16 lg:ml-0'>
                        <h2 className='relative pb-4 mb-5 text-2xl font-semibold text-white'>
                            Get In Touch
                            <span className='absolute bottom-0 left-0 w-10 h-1 rounded-full bg-theme-primary'></span>
                        </h2>
                        <div className='text-color-gray-1'>
                            <p className='mb-4'>
                                when an unknown printer took
                                <br />
                                galley type and scrambled
                            </p>
                            <ul className='flex items-center gap-4'>
                                <li>
                                    <Link href='https://www.facebook.com' className='hover:text-theme-secondary'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 24 24'
                                            width='24'
                                            height='24'
                                            className='main-grid-item-icon size-5'
                                            fill='currentColor'
                                            role='img'
                                            aria-labelledby='facebook-title'
                                        >
                                            <title id='facebook-title'>facebook</title>
                                            <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.twitter.com' className='hover:text-theme-secondary'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 24 24'
                                            width='24'
                                            height='24'
                                            className='main-grid-item-icon size-5'
                                            fill='currentColor'
                                            role='img'
                                            aria-labelledby='twitter-title'
                                        >
                                            <title id='twitter-title'>twitter</title>
                                            <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.instagram.com' className='hover:text-theme-secondary'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 24 24'
                                            width='24'
                                            height='24'
                                            className='main-grid-item-icon size-5'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            role='img'
                                            aria-labelledby='instagram-title'
                                        >
                                            <title id='instagram-title'>instagram</title>
                                            <rect height='20' rx='5' ry='5' width='20' x='2' y='2' />
                                            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                                            <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.linkedin.com' className='hover:text-theme-secondary'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 24 24'
                                            width='24'
                                            height='24'
                                            className='main-grid-item-icon size-5'
                                            fill='currentColor'
                                            role='img'
                                            aria-labelledby='linkedin-title'
                                        >
                                            <title id='linkedin-title'>linkedin</title>
                                            <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                                            <rect height='12' width='4' x='2' y='9' />
                                            <circle cx='4' cy='4' r='2' />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.youtube.com' className='hover:text-theme-secondary'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 24 24'
                                            width='24'
                                            height='24'
                                            className='main-grid-item-icon size-5'
                                            fill='currentColor'
                                            stroke='none'
                                            role='img'
                                            aria-labelledby='youtube-title'
                                        >
                                            <title id='youtube-title'>youtube</title>
                                            <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />
                                            <polygon
                                                points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'
                                                className='fill-[#06042E]'
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                            <div className='app-download'>
                                <Link href='/' className='md:w-full'>
                                    <Image
                                        src='https://skillgro-react.netlify.app/assets/img/others/google-play.svg'
                                        alt='Play Store'
                                        width={144}
                                        height={48}
                                        className='md:w-full'
                                    />
                                </Link>
                                <Link href='/' className='md:w-full'>
                                    <Image
                                        src='https://skillgro-react.netlify.app/assets/img/others/apple-store.svg'
                                        alt='App Store'
                                        width={148}
                                        height={47}
                                        className='md:w-full'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-between py-8 font-medium px-14 bg-color-dark text-color-gray-2'>
                <div>
                    <p>© 2010-2024 skillgro.com. All rights reserved.</p>
                </div>
                <div className='flex gap-3 font-medium'>
                    <Link href='/' className='relative list-wrap'>Term of Use</Link>
                    <p>|</p>
                    <Link href='/' className='relative list-wrap'>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
