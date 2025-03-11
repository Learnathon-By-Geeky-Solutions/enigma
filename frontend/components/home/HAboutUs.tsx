'use client';

import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import aboutImg from '@/assets/images/others/about-img.png';
import aboutShape from '@/assets/images/others/about-shape.svg';
import studentGrp from '@/assets/images/others/student-grp.png';

import '@/styles/about.css';

import ArrowButton from '../ui/arrow-button';
import Container from '../ui/container';

import DecorativeUnderline from '../icons/decorative-underline';

import PopupVideo from '../shared/popup-video';

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
                            <div className='section-title'>
                                <span className='sub-title'>Get More About Us</span>
                                <h2 className='title'>
                                    Thousand Of Top
                                    <span className='relative mx-2'>
                                        <DecorativeUnderline />
                                        Courses
                                    </span>
                                    Now in One Place
                                </h2>
                            </div>

                            <p className='mb-[22px] leading-[1.75] text-body-color'>
                                Our intuitive shared learning platform makes it easy for team members to organize,
                                prioritize, and access educational content. Learn about our Web Platform Baseline and
                                how it enhances your learning experience.
                            </p>

                            <ul className='about-info-list'>
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

                            <div className='btn-wrap'>
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
