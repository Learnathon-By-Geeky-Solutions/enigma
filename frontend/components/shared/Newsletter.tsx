'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import newsletterImg from '@/assets/images/others/newsletter-img.png';
import shape01 from '@/assets/images/others/newsletter-shape01.png';
import shape02 from '@/assets/images/others/newsletter-shape02.png';
import shape03 from '@/assets/images/others/newsletter-shape03.png';

import '@/styles/newsletter.css';

import Container from '../ui/container';

const Newsletter = () => {
    useEffect(() => {
        AOS.init();

        return () => {
            AOS.refresh();
        };
    }, []);
        
    return (
        <section className='newsletter-area'>
            <Container className='px-4'>
                <div className='flex flex-wrap items-center'>
                    <div className='w-full px-4 lg:w-1/3'>
                        <div className='newsletter-img-wrap'>
                            <Image src={newsletterImg} alt='newsletter' />
                            <Image src={shape01} alt='newsletter shape 1' data-aos='fade-up' data-aos-delay='400' />
                            <Image src={shape02} alt='newsletter shape 2' className='alltuchtopdown' />
                        </div>
                    </div>

                    <div className='w-full lg:px-4 lg:w-2/3'>
                        <div className='newsletter-content'>
                            <h2 className='title'>
                                Want to stay{' '}
                                <span>informed</span> 
                                {' '}about
                                <br />
                                new{' '}
                                <span>courses & study?</span> 
                            </h2>

                            <div className='newsletter-form'>
                                <form>
                                    <input type='email' placeholder='Type your e-mail' />
                                    <button type='submit' className='btn'>Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            
            <div className='newsletter-shape'>
                <Image src={shape03} alt='newsletter shape 3' data-aos='fade-left' data-aos-delay='400' />
            </div>
        </section>
    );
};

export default Newsletter;