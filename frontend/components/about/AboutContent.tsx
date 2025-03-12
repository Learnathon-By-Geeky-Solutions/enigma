import { ChevronRight } from 'lucide-react';

import DecorativeUnderline from '../icons/decorative-underline';

import ArrowButton from '../ui/arrow-button';

interface AboutContentProps {
    title: {
        text1: string;
        text2: string;
        text3: string;
    };
}

const AboutContent = ({ title }: AboutContentProps) => {
    const items = [
        {
            id: 1,
            text: 'The Most World Class Instructors',
        },
        {
            id: 2,
            text: 'Access Your Class anywhere',
        },
        {
            id: 3,
            text: 'Flexible Course Plan',
        }
    ];

    return (
        <>
            <div className='section-title'>
                <span className='sub-title'>Get More About Us</span>
                <h2 className='title'>
                    {title.text1}
                    <span className='relative mx-2'>
                        <DecorativeUnderline />
                        {title.text2}
                    </span>
                    {title.text3}
                </h2>
            </div>

            <p className='mb-[22px] leading-[1.75] text-body-color'>
                Our intuitive shared learning platform makes it easy for team members to organize, prioritize, and
                access educational content. Learn about our Web Platform Baseline and how it enhances your learning
                experience.
            </p>

            <ul className='about-info-list'>
                {items.map((item) => (
                    <li className='about-info-list-item' key={item.id}>
                        <span>
                            <ChevronRight size={18} />
                        </span>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>

            <div className='btn-wrap'>
                <ArrowButton href='/about-us' className='btn arrow-btn'>
                    Start Free Trial
                </ArrowButton>
            </div>
        </>
    );
};

export default AboutContent;