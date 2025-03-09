import Image from 'next/image';

import faqImg from '@/assets/images/others/faq-img.png';

import '@/styles/faq.css';

import { generateCircleLetters } from '@/utils/circleLetters';

import { Accordion } from '../ui/accordion';
import Container from '../ui/container';
import DecorativeShape from '../ui/icons/decorative-shape';
import FaqLearningCurve from '../ui/icons/faq-learning-curve';
import FaqItem from './FaqItem';

const Faq = () => {
    const circleText: string = '* EDUCATION * SYSTEM * CAN * MAKE * CHANGE *';

    const letters = generateCircleLetters(circleText);

    return (
        <section className='faq-area'>
            <Container>
                <div className='flex flex-col flex-wrap lg:flex-row items-center'>
                    <div className='w-full lg:w-1/2 px-4 lg:pl-4 lg:pr-2 xl:px-12'>
                        <div className='faq-img-wrap'>
                            <div className='faq-round-text'>
                                <div className='curved-circle'>
                                    <div aria-label={circleText} style={{ position: 'relative', height: '12.5381em' }}>
                                        {letters.map((letter) => (
                                            <span
                                                key={letter.id}
                                                style={{
                                                    position: 'absolute',
                                                    bottom: 'auto',
                                                    left: '50%',
                                                    transform: `translateX(${letter.translation}em) rotate(${letter.rotation}deg)`,
                                                    transformOrigin: 'center 14em',
                                                }}
                                            >
                                                {letter.text}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='faq-img'>
                                <Image src={faqImg} alt='faq' />
                                <div className='shape-one'>
                                    <DecorativeShape />
                                </div>
                                <div className='shape-two'>
                                    <span className='svg-icon'>
                                        <FaqLearningCurve />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-4 lg:pl-2 lg:pr-4 xl:px-12'>
                        <div className='faq-content'>
                            <div className='section-title'>
                                <span className='sub-title'>Faqs</span>
                                <h2 className='title'>
                                    Start Learning From
                                    <br />
                                    World’s Pro Instructors
                                </h2>
                            </div>
                            <p>
                                Our FAQ section provides answers to commonly asked questions about our educational
                                platform, courses, and instructors to help you get started quickly.
                            </p>
                            <div className='faq-wrap'>
                                <Accordion type='single' collapsible className='w-full'>
                                    <FaqItem
                                        value='item-1'
                                        question='What’s SkillGro Want to give you?'
                                        answer='SkillGro offers an intuitive platform with expert-led resources to help you grow your skills.'
                                    />
                                    <FaqItem
                                        value='item-2'
                                        question='Why choose us for your education?'
                                        answer='We provide career-focused, expert-led courses to help you advance professionally.'
                                    />
                                    <FaqItem
                                        value='item-3'
                                        question='How We Provide Service For you?'
                                        answer='We offer flexible online courses with top-quality resources and support.'
                                    />
                                    <FaqItem
                                        value='item-4'
                                        question='Are you Affordable For Your Course?'
                                        answer='We offer affordable pricing with flexible plans to suit your needs.'
                                    />
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Faq;