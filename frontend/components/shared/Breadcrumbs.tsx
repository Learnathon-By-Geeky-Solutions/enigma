'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import subBanner from '@/assets/images/bg/breadcrumb-bg.jpg';
import shape01 from '@/assets/images/others/breadcrumb-shape01.svg';
import shape02 from '@/assets/images/others/breadcrumb-shape02.svg';
import shape03 from '@/assets/images/others/breadcrumb-shape03.svg';
import shape04 from '@/assets/images/others/breadcrumb-shape04.svg';
import shape05 from '@/assets/images/others/breadcrumb-shape05.svg';

import '@/styles/breadcrumb.css';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '../ui/breadcrumb';
import Container from '../ui/container';
import Image from 'next/image';

interface BreadcrumbsProps {
    title: string;
}

const Breadcrumbs = ({ title }: BreadcrumbsProps) => {
    const pathname = usePathname();
    const pathNames = pathname.split('/').filter((path) => path !== '');

    useEffect(() => {
        AOS.init();

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <section className='breadcrumb-bg' style={{ backgroundImage: `url(${subBanner.src})` }}>
            <Container className='px-4 xl:px-0'>
                <div className='flex flex-wrap'>
                    <div className='w-full'>
                        <div className='breadcrumb-content'>
                            <h3 className='title'>{title}</h3>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />

                                    {pathNames.map((link, index) => {
                                        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                                        const displayName = link.replace(/-/g, ' ');

                                        return (
                                            <React.Fragment key={index}>
                                                {pathNames.length !== index + 1 ? (
                                                    <>
                                                        <BreadcrumbItem>
                                                            <BreadcrumbLink href={href}>{displayName}</BreadcrumbLink>
                                                        </BreadcrumbItem>
                                                        <BreadcrumbSeparator />
                                                    </>
                                                ) : (
                                                    <BreadcrumbItem>
                                                        <BreadcrumbPage className='text-theme-primary'>
                                                            {displayName}
                                                        </BreadcrumbPage>
                                                    </BreadcrumbItem>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
            </Container>
            
            <div className='breadcrumb-shape-wrap'>
                <Image src={shape01} alt='shape 1' className='alltuchtopdown' />
                <Image src={shape02} alt='shape 2' data-aos='fade-right' data-aos-delay='300' />
                <Image src={shape03} alt='shape 3' data-aos='fade-up' data-aos-delay='400' />
                <Image src={shape04} alt='shape 4' data-aos='fade-down-left' data-aos-delay='400' />
                <Image src={shape05} alt='shape 5' data-aos='fade-left' data-aos-delay='400' />
            </div>
        </section>
    );
};

export default Breadcrumbs;
