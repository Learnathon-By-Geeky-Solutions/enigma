import '@/styles/feature.css';

import Container from '../ui/container';

import BookIcon from '../icons/book-icon';
import CertificateIcon from '../icons/certificate-icon';
import GraduationIcon from '../icons/graduation-icon';
import StarsIcon from '../icons/stars-icon';

const Features = () => {
    const features = [
        {
            id: 1,
            icon: GraduationIcon,
            title: 'Expert Tutors',
            description: 'Learn from industry professionals with years of teaching experience.',
        },
        {
            id: 2,
            icon: BookIcon,
            title: 'Effective Courses',
            description: 'Our courses are designed to maximize learning outcomes efficiently.',
        },
        {
            id: 3,
            icon: CertificateIcon,
            title: 'Earn Certificate',
            description: 'Receive industry-recognized certificates upon course completion.',
        },
    ];

    return (
        <section className='pt-[100px] md:pt-[120px] pb-[70px] md:pb-[90px] bg-color-gray-4'>
            <Container>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-full lg:w-2/3 xl:w-1/2'>
                        <div className='section-title text-center mb-10'>
                            <span className='sub-title'>Our Top Features</span>
                            <h2 className='title'>Achieve Your Goal With SkillGro</h2>
                            <p className='mt-[15px] leading-[1.75] text-body-color'>
                                SkillGro provides comprehensive educational resources tailored to your needs
                                <br className='hidden md:block' />
                                <span className='ml-1 md:ml-0'>helping you achieve your educational and career goals.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='features-item-wrap'>
                    {features.map((feature) => (
                        <div key={feature.id} className='w-full px-4 md:w-1/2 lg:w-1/3'>
                            <div className='features-item'>
                                <div className='features-content'>
                                    <div className='content-top'>
                                        <div className='features-icon'>
                                            <feature.icon />
                                        </div>
                                        <h2 className='title'>{feature.title}</h2>
                                    </div>
                                    <p>{feature.description}</p>
                                </div>
                                
                                <div className='features-item-shape'>
                                    <StarsIcon />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;
