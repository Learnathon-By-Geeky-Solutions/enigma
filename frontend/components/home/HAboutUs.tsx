'use client';

import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ArrowButton from '../ui/arrow-button';
import Container from '../ui/container';

import aboutImg from '@/assets/images/about-img.png';
import aboutShape from '@/assets/images/about-shape.svg';
import studentGrp from '@/assets/images/student-grp.png';

import '@/styles/h-about.css';

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
                            <Link href='' className='popup-video'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='22'
                                    height='28'
                                    viewBox='0 0 22 28'
                                    fill='none'
                                    aria-label='play video'
                                >
                                    <path
                                        d='M0.19043 26.3132V1.69421C0.190288 1.40603 0.245303 1.12259 0.350273 0.870694C0.455242 0.6188 0.606687 0.406797 0.79027 0.254768C0.973854 0.10274 1.1835 0.0157243 1.39936 0.00193865C1.61521 -0.011847 1.83014 0.0480663 2.02378 0.176003L20.4856 12.3292C20.6973 12.4694 20.8754 12.6856 20.9999 12.9535C21.1245 13.2214 21.1904 13.5304 21.1904 13.8456C21.1904 14.1608 21.1245 14.4697 20.9999 14.7376C20.8754 15.0055 20.6973 15.2217 20.4856 15.3619L2.02378 27.824C1.83056 27.9517 1.61615 28.0116 1.40076 27.9981C1.18536 27.9847 0.97607 27.8983 0.792638 27.7472C0.609205 27.596 0.457661 27.385 0.352299 27.1342C0.246938 26.8833 0.191236 26.6008 0.19043 26.3132Z'
                                        fill='currentcolor'
                                    />
                                </svg>
                            </Link>
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
                                    Thousand Of Top{''}
                                    <span className='relative mx-2'>
                                        <svg
                                            x='0px'
                                            y='0px'
                                            preserveAspectRatio='none'
                                            viewBox='0 0 209 59'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565'
                                                fill='currentcolor'
                                            ></path>
                                        </svg>
                                        Courses
                                    </span>
                                    Now in One Place
                                </h2>
                            </div>
                            <p className='mb-5 leading-[1.75] text-body-color'>Our intuitive shared learning platform makes it easy for team members to organize, prioritize, and access educational content. Learn about our Web Platform Baseline and how it enhances your learning experience.</p>
                            <ul className=''>
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
                            <div className='btn-wrap' data-aos='fade-left' data-aos-delay='200'>
                                <ArrowButton href='/about-us' className='btn arrow-btn'>
                                    Start Free Trial
                                </ArrowButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HAboutUs;