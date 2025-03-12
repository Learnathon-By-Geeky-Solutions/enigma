import Image from 'next/image';
import Link from 'next/link';

import { APPLE_STORE_URL, PLAY_STORE_URL } from '@/config/constants';

import '@/styles/footer.css';

import APPLE_STORE from '@/assets/images/others/apple-store.png';
import GOOGLE_PLAY from '@/assets/images/others/google-play.png';
import SECONDARY_LOGO from '@/assets/images/logo/secondary-logo.png';

import Social from './social';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className='px-5 py-20 lg:px-14 bg-color-black'>
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

                    <div className='mb-6 md:ml-10 lg:ml-8 xl:ml-16 lg:mb-0'>
                        <h2 className='footer-title'>Useful Links</h2>

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
                            <li className='mb-3'>
                                <Link href='#' className='list-wrap'>
                                    Become a partner
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='list-wrap'>
                                    Work at Future Learn
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='mb-6 lg:ml-2 xl:ml-10 md:mb-0'>
                        <h2 className='footer-title'>Our Company</h2>

                        <ul className='font-medium text-color-gray-1'>
                            <li className='mb-3'>
                                <Link href='/contact-us' className='list-wrap'>
                                    Contact Us
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

                    <div className='md:ml-10 lg:ml-0 xl:ml-8'>
                        <h2 className='footer-title'>Get In Touch</h2>

                        <div className='text-color-gray-1'>
                            <p className='mb-4'>
                                when an unknown printer took
                                <br />
                                galley type and scrambled
                            </p>

                            <Social
                                className='flex items-center gap-4'
                                urlClassName='hover:text-theme-secondary'
                                youtubePolygonClassName='fill-color-black'
                            />

                            <div className='app-download'>
                                <Link href={PLAY_STORE_URL} className='md:w-full'>
                                    <Image
                                        src={GOOGLE_PLAY}
                                        alt='Download our app from Google Play Store'
                                        width={144}
                                        height={48}
                                        loading='lazy'
                                        className='w-full h-[43px] md:h-[52px] lg:h-[41px] xl:h-[48px]'
                                    />
                                </Link>
                                <Link href={APPLE_STORE_URL} className='md:w-full'>
                                    <Image
                                        src={APPLE_STORE}
                                        alt='Download our app from App Store'
                                        width={148}
                                        height={47}
                                        loading='lazy'
                                        className='w-full h-[43px] md:h-[52px] lg:h-[41px] xl:h-[48px]'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2 px-5 py-8 font-medium md:justify-between lg:px-14 bg-color-dark text-color-gray-2 md:flex-row'>
                <div>
                    <p className='text-center'>© 2010-{currentYear} skillgro.com. All rights reserved.</p>
                </div>
                <div className='flex justify-center gap-3 font-medium'>
                    <Link href='#' className='list-wrap' aria-label='Terms of Use'>
                        Term of Use
                    </Link>
                    <p>|</p>
                    <Link href='#' className='list-wrap' aria-label='Privacy & Policy'>
                        Privacy & Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;