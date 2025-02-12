import Image from 'next/image';
import Link from 'next/link';

import '@/styles/footer.css';

import SECONDARY_LOGO from '@/assets/images/secondary-logo.png';
import GOOGLE_PLAY from '@/assets/images/google-play.png';
import APPLE_STORE from '@/assets/images/apple-store.png';

import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from './icons/social-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <div className='px-4 py-20 md:px-14 bg-color-black'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='mb-6 lg:mb-0'>
                        <figure>
                            <Image src={SECONDARY_LOGO} alt='Logo' width={156} height={38} />
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
                            <span className='absolute bottom-0 left-0 w-10 h-1 rounded-full bg-theme-primary' />
                        </h2>
                        <ul className='font-medium text-color-gray-1'>
                            <li className='mb-3'>
                                <Link href='#' className='list-wrap'>
                                    Our values
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='#' className='list-wrap'>
                                    Our advisory board
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='#' className='list-wrap'>
                                    Our partners
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='list-wrap'>
                                    Work at Future Learn
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='mb-6 lg:ml-8 md:mb-0'>
                        <h2 className='relative pb-4 mb-5 text-2xl font-semibold text-white'>
                            Our Company
                            <span className='absolute bottom-0 left-0 w-10 h-1 rounded-full bg-theme-primary' />
                        </h2>
                        <ul className='font-medium text-color-gray-1'>
                            <li className='mb-3'>
                                <Link href='#' className='list-wrap'>
                                    Contact Us
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='#' className='list-wrap'>
                                    Become a partner
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='#' className='list-wrap'>
                                    Blog
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='#' className='list-wrap'>
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='md:ml-16 lg:ml-0'>
                        <h2 className='relative pb-4 mb-5 text-2xl font-semibold text-white'>
                            Get In Touch
                            <span className='absolute bottom-0 left-0 w-10 h-1 rounded-full bg-theme-primary' />
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
                                        <FacebookIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.twitter.com' className='hover:text-theme-secondary'>
                                        <TwitterIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.instagram.com' className='hover:text-theme-secondary'>
                                        <InstagramIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.linkedin.com' className='hover:text-theme-secondary'>
                                        <LinkedInIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.youtube.com' className='hover:text-theme-secondary'>
                                        <YouTubeIcon className='fill-[#06042E]' />
                                    </Link>
                                </li>
                            </ul>
                            <div className='app-download'>
                                <Link href='/' className='md:w-full'>
                                    <Image
                                        src={GOOGLE_PLAY}
                                        alt='Download our app from Google Play Store'
                                        width={144}
                                        height={48}
                                        loading='lazy'
                                        className='md:w-full'
                                    />
                                </Link>
                                <Link href='/' className='md:w-full'>
                                    <Image
                                        src={APPLE_STORE}
                                        alt='Download our app from App Store'
                                        width={148}
                                        height={47}
                                        loading='lazy'
                                        className='md:w-full'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2 px-10 py-8 font-medium md:justify-between md:px-14 bg-color-dark text-color-gray-2 md:flex-row'>
                <div>
                    <p className='text-center'>© 2010-{currentYear} skillgro.com. All rights reserved.</p>
                </div>
                <div className='flex gap-3 font-medium'>
                    <Link href='/' className='list-wrap'>
                        Term of Use
                    </Link>
                    <p>|</p>
                    <Link href='/' className='list-wrap'>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
