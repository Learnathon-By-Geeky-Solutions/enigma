'use client';

import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutImg from '@/assets/images/about-img.png';
import aboutShape from '@/assets/images/about-shape.svg';
import studentGrp from '@/assets/images/student-grp.png';

import '@/styles/h-about.css';

import ArrowButton from '../ui/arrow-button';
import Container from '../ui/container';
import PlayIcon from '../ui/icons/play-icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

const HAboutUs = () => {
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
                            
                            <Dialog>
                                <DialogTrigger className='popup-video'>
                                    <PlayIcon />
                                </DialogTrigger>
                                
                                <DialogContent className='bg-slate-100'>
                                    <DialogHeader>
                                        <DialogTitle className='hidden' />
                                        <DialogDescription className='hidden' />
                                    </DialogHeader>
                                    
                                    <iframe
                                        src='https://youtube.com/embed/zpOULjyy-n8?rel=0'
                                        title='youtube video'
                                        className='w-full h-48 md:h-52 lg:h-56 xl:h-60'
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                        allowFullScreen
                                    />
                                </DialogContent>
                            </Dialog>
                            
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
                            <div className='section-title'>
                                <span className='sub-title'>Get More About Us</span>
                                <h2 className='title'>
                                    Thousand Of Top
                                    <span className='relative mx-2'>
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
                                        Courses
                                    </span>
                                    Now in One Place
                                </h2>
                            </div>
                            
                            <p className='mb-5 leading-[1.75] text-body-color'>
                                Our intuitive shared learning platform makes it easy for team members to organize,
                                prioritize, and access educational content. Learn about our Web Platform Baseline and
                                how it enhances your learning experience.
                            </p>
                            
                            <ul>
                                <li className='about-info-list-item'>
                                    <span>
                                        <ChevronRight size={18} />
                                    </span>
                                    <p>The Most World Class Instructors</p>
                                </li>
                                <li className='about-info-list-item'>
                                    <span>
                                        <ChevronRight size={18} />
                                    </span>
                                    <p>Access Your Class anywhere</p>
                                </li>
                                <li className='about-info-list-item'>
                                    <span>
                                        <ChevronRight size={18} />
                                    </span>
                                    <p>Flexible Course Plan</p>
                                </li>
                            </ul>
                            
                            <div className='lg:hidden'>
                                <div className='btn-wrap' data-aos='fade-right' data-aos-delay='200'>
                                    <ArrowButton href='/about-us' className='btn arrow-btn'>
                                        Start Free Trial
                                    </ArrowButton>
                                </div>
                            </div>
                            
                            <div className='hidden overflow-hidden lg:block'>
                                <div className='btn-wrap' data-aos='fade-left' data-aos-delay='200'>
                                    <ArrowButton href='/about-us' className='btn arrow-btn'>
                                        Get More About Us
                                    </ArrowButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HAboutUs;