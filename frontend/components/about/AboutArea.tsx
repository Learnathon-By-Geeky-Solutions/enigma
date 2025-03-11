import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import innerAboutImg from '@/assets/images/others/inner-about-img.png';

import '@/styles/about.css';

import ArrowButton from '../ui/arrow-button';
import Container from '../ui/container';

import LearningCurve from '../icons/learning-curve';
import DecorativeUnderline from '../icons/decorative-underline';

import PopupVideo from '../shared/popup-video';

const AboutArea = () => {
    return (
        <section className='py-[100px] md:py-[120px]'>
            <Container>
                <div className='flex flex-col flex-wrap items-center justify-center md:flex-row'>
                    <div className='w-full px-4 md:w-3/4 lg:w-1/2'>
                        <div className='inner-about-images'>
                            <Image src={innerAboutImg} alt='about img' className='w-full h-auto' />

                            <span className='svg-icon'>
                                <LearningCurve stroke='#5751E1' />
                            </span>

                            <PopupVideo />
                        </div>
                    </div>

                    <div className='w-full px-4 lg:w-1/2'>
                        <div className='inner-about-content'>
                            <div className='section-title'>
                                <span className='sub-title'>Get More About Us</span>
                                <h2 className='title'>
                                    Empowering Students to reach their
                                    <span className='relative mx-2'>
                                        <DecorativeUnderline />
                                        potential
                                    </span>
                                    Goal For Next Level Challenge.
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

export default AboutArea;