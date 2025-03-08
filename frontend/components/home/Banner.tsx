'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import author01 from '@/assets/images/banner/banner-author01.png';
import author02 from '@/assets/images/banner/banner-author02.png';
import banner from '@/assets/images/banner/banner-bg.png';
import bannerImg from '@/assets/images/banner/banner-img.png';
import dots from '@/assets/images/banner/bg-dots.svg';
import shape01 from '@/assets/images/banner/banner-shape01.svg';
import shape1 from '@/assets/images/banner/banner-shape01.png';
import shape02 from '@/assets/images/banner/banner-shape02.svg';
import shape2 from '@/assets/images/banner/banner-shape02.png';

import '@/styles/banner.css';

import ArrowButton from '../ui/arrow-button';
import AuthorAvatar from '../ui/author-avatar';
import Container from '../ui/container';

const Banner = () => {
    useEffect(() => {
        AOS.init();

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <section className='mt-0 banner-bg' style={{ backgroundImage: `url(${banner.src})` }}>
            <Container className='lg:px-4 xl:px-0'>
                <div className='flex flex-col items-start justify-between lg:flex-row xl:w-[1280px]'>
                    <div className='w-full lg:w-6/12 xl:w-5/12'>
                        <div className='banner-content'>
                            <h3 className='title' data-aos='fade-right' data-aos-delay='400'>
                                Never Stop
                                <span className='relative md:ml-2'>
                                    <span className='svg-icon'>
                                        <svg
                                            width='100%'
                                            height='100%'
                                            viewBox='0 0 61 68'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                            role='img'
                                            aria-label='learning-curve'
                                        >
                                            <title>learning-curve</title>
                                            <path
                                                d='M10.9456 42.4604C12.35 35.8453 15.0985 20.3798 14.8574 11.4385'
                                                stroke='#031333'
                                                strokeWidth='3.07158'
                                                strokeLinejoin='round'
                                                style={{ strokeDasharray: '32, 34', strokeDashoffset: 0 }}
                                            />
                                            <path
                                                d='M27.4487 52.5191C33.5478 49.598 47.4807 42.3448 54.4199 36.7009'
                                                stroke='#031333'
                                                strokeWidth='3.07158'
                                                strokeLinejoin='round'
                                                style={{ strokeDasharray: '32, 34', strokeDashoffset: 0 }}
                                            />
                                            <path
                                                d='M20.1039 44.2553C23.1559 40.986 29.8591 33.2239 32.2559 28.3291'
                                                stroke='#031333'
                                                strokeWidth='3.07158'
                                                strokeLinejoin='round'
                                                style={{ strokeDasharray: '21, 23', strokeDashoffset: 0 }}
                                            />
                                        </svg>
                                    </span>
                                    <svg
                                        x='0px'
                                        y='0px'
                                        preserveAspectRatio='none'
                                        viewBox='0 0 209 59'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        role='img'
                                        aria-label='decorative underline'
                                    >
                                        <title>decorative underline</title>
                                        <path
                                            d='M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565'
                                            fill='currentcolor'
                                        />
                                    </svg>
                                    Learning
                                </span>
                                <br />
                                Life <b>Never Stop</b> Teaching
                            </h3>
                            
                            <p data-aos='fade-right' data-aos-delay='600' className='tracking-tight'>
                                Every teaching and learning journey is unique. We&apos;ll help guide your way.
                            </p>
                            
                            <div className='banner-btn-wrap' data-aos='fade-right' data-aos-delay='800'>
                                <ArrowButton href='/contact' className='btn arrow-btn'>
                                    Start Free Trial
                                </ArrowButton>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full lg:w-6/12'>
                        <div className='banner-images'>
                            <Image src={bannerImg} alt='img' className='main-img' priority={true} />
                            
                            <div className='px-4 shape big-shape' data-aos='fade-up-right' data-aos-delay='600'>
                                <Image src={shape1} alt='shape' className='max-w-full shape-transform-1' />
                            </div>
                            
                            <Image src={dots} alt='shape' className='shape bg-dots rotateme' priority={true} />
                            
                            <Image src={shape2} alt='shape' className='shape small-shape shape-transform-2' />
                            
                            <div className='banner-author'>
                                <AuthorAvatar imageSrc={author01} name='Robert Fox' />
                                <AuthorAvatar imageSrc={author02} name='Michel Jones' />
                                <Image src={shape02} alt='shape' className='absolute top-[9px] left-[calc(100%-11px)] -z-10' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            
            <Image src={shape01} alt='shape' className='line-shape' data-aos='fade-right' data-aos-delay='1600' priority={true} />
        </section>
    );
};

export default Banner;
