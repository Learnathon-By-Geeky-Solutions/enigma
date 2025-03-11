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
            icon: BookIcon,
            title: 'Expert Tutors',
            description: 'when an unknown printer took a galley offe type and scrambled makes.',
        },
        {
            id: 2,
            icon: GraduationIcon,
            title: 'Effective Courses',
            description: 'when an unknown printer took a galley offe type and scrambled makes.',
        },
        {
            id: 3,
            icon: CertificateIcon,
            title: 'Earn Certificate',
            description: 'when an unknown printer took a galley offe type and scrambled makes.',
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
                                when an unknown printer took a galley of type and scrambled make
                                <br className='hidden md:block' />
                                <span className='ml-1 md:ml-0'>specimen book has survived not only five centuries</span>
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
