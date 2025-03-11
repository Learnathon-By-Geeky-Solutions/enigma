'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutImg from '@/assets/images/others/about-img.png';
import aboutShape from '@/assets/images/others/about-shape.svg';
import studentGrp from '@/assets/images/others/student-grp.png';

import '@/styles/about.css';

import AboutContent from '../about/AboutContent';

import PopupVideo from '../shared/popup-video';

import Container from '../ui/container';

const HAboutUs = () => {
    const title = {
        text1: 'Thousand Of Top',
        text2: 'Courses',
        text3: 'Now in One Place'
    };

    useEffect(() => {
        AOS.init();

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <section className='py-[100px] md:py-[120px]'>
            <Container className='px-4'>
                <div className='flex flex-col flex-wrap items-center justify-center md:flex-row'>
                    <div className='w-full md:px-4 md:w-3/4 lg:w-1/2'>
                        <div className='about-images'>
                            <Image src={aboutImg} alt='about img' className='w-full h-auto' />
                            <Image src={aboutShape} alt='about shape' className='shape alltuchtopdown' />

                            <PopupVideo />

                            <div data-aos='fade-right' data-aos-delay='200' className='about-enrolled'>
                                <p className='title'>
                                    <span>36K+</span> Active Subscribers
                                </p>
                                <Image src={studentGrp} alt='student grp' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:px-4 lg:w-1/2'>
                        <div className='about-content'>
                            <AboutContent title={title} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HAboutUs;