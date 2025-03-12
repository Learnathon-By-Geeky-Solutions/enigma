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

import DecorativeUnderline from '../icons/decorative-underline';
import LearningCurve from '../icons/learning-curve';

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
                                        <LearningCurve stroke='#031333' />
                                    </span>
                                    <DecorativeUnderline />
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
                                <Image
                                    src={shape02}
                                    alt='shape'
                                    className='absolute top-[9px] left-[calc(100%-11px)] -z-10'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Image
                src={shape01}
                alt='shape'
                className='line-shape'
                data-aos='fade-right'
                data-aos-delay='1600'
                priority={true}
            />
        </section>
    );
};

export default Banner;
