import React from 'react';

import faqImg from '@/assets/images/others/faq-img.png';

import '@/styles/faq.css';

import Container from '../ui/container';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
    return (
        <section className='faq-area'>
            <Container>
                <div className='flex flex-col flex-wrap lg:flex-row items-center'>
                    <div className='w-full lg:w-1/2 px-4 lg:pl-4 lg:pr-2 xl:px-12'>
                        <div className='faq-img-wrap'>
                            <div className='faq-round-text'>
                                <div className='curved-circle'>
                                    <div
                                        aria-label='* EDUCATION * SYSTEM * CAN * MAKE * CHANGE *'
                                        style={{ position: 'relative', height: '12.5381em' }}
                                    >
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.319688em) rotate(-81.6509deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            *
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(-78.9206deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.45875em) rotate(-75.5398deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            E
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(-71.1198deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            D
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(-66.5713deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            U
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(-62.0227deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            C
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.467812em) rotate(-57.5603deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            A
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.411875em) rotate(-53.4459deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            T
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(-50.2844deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            I
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.514062em) rotate(-46.6449deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            O
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(-41.9662deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            N
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(-38.4569deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.319688em) rotate(-35.7266deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            *
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(-32.9962deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.45875em) rotate(-29.6155deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            S
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.45875em) rotate(-25.3242deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            Y
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.45875em) rotate(-21.0328deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            S
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.430625em) rotate(-16.873deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            T
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.45875em) rotate(-12.7132deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            E
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.541563em) rotate(-8.03456deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            M
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(-4.26649deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.319688em) rotate(-1.53617deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            *
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(1.19415deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(4.70352deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            C
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(9.2521deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            A
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(13.8007deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            N
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(17.31deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.319688em) rotate(20.0404deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            *
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(22.7707deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.541563em) rotate(26.5388deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            M
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(31.3461deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            A
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(35.8946deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            K
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.45875em) rotate(40.3146deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            E
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(43.6953deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.319688em) rotate(46.4257deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            *
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(49.156deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(52.6653deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            C
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(57.2139deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            H
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(61.7625deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            A
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.48625em) rotate(66.3111deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            N
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.514062em) rotate(70.9898deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            G
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.45875em) rotate(75.5398deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            E
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.264062em) rotate(78.9206deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            &nbsp;
                                        </span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 'auto',
                                                left: '50%',
                                                transform: 'translateX(-0.319688em) rotate(81.6509deg)',
                                                transformOrigin: 'center 14em',
                                            }}
                                        >
                                            *
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='faq-img'>
                                <Image src={faqImg} alt='faq' />
                                <div className='shape-one'>
                                    <svg
                                        width='243'
                                        height='201'
                                        viewBox='0 0 243 201'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='injectable injectable tg-motion-effects4'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M33.4888 2.33732C51.0788 -4.90402 74.7375 10.3492 95.1583 10.1059C112.054 9.90458 124.917 -1.94773 142.286 1.04108C161.229 4.30087 182.771 11.4675 196.311 27.5126C209.823 43.525 204.073 64.7482 211.768 83.3776C219.978 103.254 244.371 120.756 242.796 140.051C241.244 159.064 219.234 165.093 204.324 174.576C191.463 182.756 177.07 187.574 161.728 191.613C144.966 196.024 128.585 200.247 110.135 199.366C85.6793 198.199 52.9607 207.808 36.8703 185.654C19.1764 161.292 51.8095 136.455 44.5608 109.082C38.4883 86.1502 3.04428 71.7681 0.682568 48.9991C-1.5703 27.2795 15.2076 9.8632 33.4888 2.33732Z'
                                            fill='currentcolor'
                                        />
                                        <svg
                                            width='100%'
                                            height='100%'
                                            viewBox='0 0 243 201'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M33.4888 2.33732C51.0788 -4.90402 74.7375 10.3492 95.1583 10.1059C112.054 9.90458 124.917 -1.94773 142.286 1.04108C161.229 4.30087 182.771 11.4675 196.311 27.5126C209.823 43.525 204.073 64.7482 211.768 83.3776C219.978 103.254 244.371 120.756 242.796 140.051C241.244 159.064 219.234 165.093 204.324 174.576C191.463 182.756 177.07 187.574 161.728 191.613C144.966 196.024 128.585 200.247 110.135 199.366C85.6793 198.199 52.9607 207.808 36.8703 185.654C19.1764 161.292 51.8095 136.455 44.5608 109.082C38.4883 86.1502 3.04428 71.7681 0.682568 48.9991C-1.5703 27.2795 15.2076 9.8632 33.4888 2.33732Z'
                                                fill='currentcolor'
                                                style={{ strokeDasharray: '745, 747', strokeDashoffset: '0' }}
                                            />
                                        </svg>
                                    </svg>
                                </div>
                                <div className='shape-two'>
                                    <span className='svg-icon'>
                                        <svg
                                            width='100%'
                                            height='100%'
                                            viewBox='0 0 54 66'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M3.76256 36.4136C7.34334 29.8191 15.1459 14.2331 17.71 4.64484'
                                                stroke='#031333'
                                                strokeWidth='3.07158'
                                                strokeLinejoin='round'
                                                style={{ strokeDasharray: '35, 37', strokeDashoffset: '0' }}
                                            />
                                            <path
                                                d='M18.1469 52.3203C25.5569 51.1365 42.6675 47.8153 51.8301 44'
                                                stroke='#031333'
                                                strokeWidth='3.07158'
                                                strokeLinejoin='round'
                                                style={{ strokeDasharray: '35, 37', strokeDashoffset: '0' }}
                                            />
                                            <path
                                                d='M12.9399 41.2119C17.218 38.6967 26.7978 32.5534 30.8916 28.1021'
                                                stroke='#031333'
                                                strokeWidth='3.07158'
                                                strokeLinejoin='round'
                                                style={{ strokeDasharray: '23, 25', strokeDashoffset: '0' }}
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-4 lg:pl-2 lg:pr-4 xl:px-12'>
                        <div className='faq-content'>
                            <div className='section-title'>
                                <span className='sub-title'>Faq&apos;s</span>
                                <h2 className='title'>
                                    Start Learning From
                                    <br />
                                    World’s Pro Instructors
                                </h2>
                            </div>
                            <p>
                                Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize
                                and.In this episode.
                            </p>
                            <div className='faq-wrap'>
                                <Accordion type='single' collapsible className='w-full'>
                                    <AccordionItem value='item-1'>
                                        <AccordionTrigger>What’s SkillGro Want to give you?</AccordionTrigger>
                                        <AccordionContent>
                                            Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value='item-2'>
                                        <AccordionTrigger>Why choose us for your education?</AccordionTrigger>
                                        <AccordionContent>
                                            Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value='item-3'>
                                        <AccordionTrigger>How We Provide Service For you?</AccordionTrigger>
                                        <AccordionContent>
                                            Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value='item-4'>
                                        <AccordionTrigger>Are you Affordable For Your Course</AccordionTrigger>
                                        <AccordionContent>
                                            Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                                        </AccordionContent>
                                    </AccordionItem>
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
