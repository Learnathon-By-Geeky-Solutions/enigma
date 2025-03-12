import AboutArea from '@/components/about/AboutArea';
import Features from '@/components/about/Features';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Newsletter from '@/components/shared/Newsletter';
import Partners from '@/components/shared/Partners';

export const metadata = {
    title: 'SkillGrow | About',
    description: 'AI-Powered Online Job Preparation Platform',
};

export default function About() {
    return (
        <>
            <Breadcrumbs title='Who We Are' />
            <AboutArea />
            <Partners />
            <Features />
            <Newsletter />
        </>
    );
}
