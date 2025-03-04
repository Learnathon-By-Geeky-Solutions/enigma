import Banner from '@/components/home/Banner';
import HAboutUs from '@/components/home/HAboutUs';
import TopCategories from '@/components/home/TopCategories';
import Partners from '@/components/shared/Partners';
import Container from '@/components/ui/container';

import '@/styles/home.css';

export const metadata = {
  title: 'Create Next App | Home',
  description: 'AI-Powered Online Job Preparation Platform',
};

export default function Home() {
  return (
    <>
      <Banner />
      <TopCategories />
      <Partners />
      <HAboutUs />
      <Container>
        {/* our partner */}
        {/* feature job types */}
        {/* out mission */}
        Hello Everyone
      </Container>
    </>
  );
}
