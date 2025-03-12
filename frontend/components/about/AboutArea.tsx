import Image from 'next/image';

import innerAboutImg from '@/assets/images/others/inner-about-img.png';

import '@/styles/about.css';

import LearningCurve from '../icons/learning-curve';

import PopupVideo from '../shared/popup-video';

import Container from '../ui/container';

import AboutContent from './AboutContent';

const AboutArea = () => {
    const title = {
        text1: 'Empowering Students to reach their',
        text2: 'potential',
        text3: 'Goal For Next Level Challenge'
    };

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
                            <AboutContent title={title} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutArea;