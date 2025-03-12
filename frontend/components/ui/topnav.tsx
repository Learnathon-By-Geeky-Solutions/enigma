import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import envelope from '@/assets/images/icons/envelope.svg';
import map from '@/assets/images/icons/map-marker.svg';
import phone from '@/assets/images/icons/phone.svg';

import Container from '@/components/ui/container';

import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL, YOUTUBE_URL } from '@/config/constants';

const TopNav = () => {
    return (
        <header className='hidden px-4 py-3 bg-heading-color lg:block'>
            <Container>
                <div className='flex justify-between'>
                    <div>
                        <ul className='flex items-center gap-y-2.5 gap-x-7'>
                            <li className='flex items-center gap-2 text-sm font-medium text-color-gray-5'>
                                <Image src={map} alt='icons' />
                                <span>589 5th Ave, NY 10024, USA</span>
                            </li>

                            <li className='flex items-center gap-2 text-sm font-medium text-color-gray-5'>
                                <Image src={envelope} alt='icons' />
                                <Link
                                    href='mailto:info@skillgrodemo.com'
                                    className='text-color-gray-5 hover:text-white'
                                >
                                    info@skillgrodemo.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className='flex items-center gap-y-2.5 gap-x-7'>
                            <div className='flex items-center gap-2.5 text-sm font-medium text-color-gray-5'>
                                <Image src={phone} alt='icons' />
                                <span>Call us:</span>
                                <Link href='tel:0123456789' className='text-color-gray-5 hover:text-white'>
                                    +123 599 8989
                                </Link>
                            </div>
                            
                            <ul className='flex items-center gap-y-2.5 gap-x-3 justify-end'>
                                <li className='text-sm font-medium opacity-50 text-color-gray-5'>Follow Us On :</li>
                                <li className='text-color-gray-5 hover:text-white'>
                                    <Link href={FACEBOOK_URL}>
                                        <FaFacebookF />
                                    </Link>
                                </li>
                                <li className='text-color-gray-5 hover:text-white'>
                                    <Link href={TWITTER_URL}>
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li className='text-color-gray-5 hover:text-white'>
                                    <Link href={INSTAGRAM_URL}>
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li className='text-color-gray-5 hover:text-white'>
                                    <Link href={LINKEDIN_URL}>
                                        <FaLinkedinIn />
                                    </Link>
                                </li>
                                <li className='text-color-gray-5 hover:text-white'>
                                    <Link href={YOUTUBE_URL}>
                                        <FaYoutube />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default TopNav;