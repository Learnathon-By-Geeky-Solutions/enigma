import Banner from '@/components/home/Banner';
import Faq from '@/components/home/Faq';
import HAboutUs from '@/components/home/HAboutUs';
import TopCategories from '@/components/home/TopCategories';
import Newsletter from '@/components/shared/Newsletter';
import Partners from '@/components/shared/Partners';

import '@/styles/home.css';

export const metadata = {
  title: 'SkillGrow | Home',
  description: 'AI-Powered Online Job Preparation Platform',
};

export default function Home() {
  return (
    <>
      <Banner />
      <TopCategories />
      <Partners />
      <HAboutUs />
      <Newsletter />
      <Faq />
      {/* latest blogs */}
    </>
  );
}
