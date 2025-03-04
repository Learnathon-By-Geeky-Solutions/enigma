import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import brand01 from '@/assets/images/partners/brand01.png';
import brand02 from '@/assets/images/partners/brand02.png';
import brand03 from '@/assets/images/partners/brand03.png';
import brand04 from '@/assets/images/partners/brand04.png';
import brand05 from '@/assets/images/partners/brand05.png';
import brand06 from '@/assets/images/partners/brand06.png';
import star from '@/assets/images/brand-star.svg';

const Partners = () => {
    return (
        <section className='py-5 bg-color-black'>
            <Marquee pauseOnHover pauseOnClick>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand01} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand02} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand03} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand04} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand05} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand06} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand02} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand04} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand03} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
                <div className='flex items-center gap-[35px] mr-[35px]'>
                    <figure className='overflow-hidden hover:cursor-pointer'>
                        <Image src={brand05} alt='partner' className=' hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]' />
                    </figure>
                    <figure>
                        <Image src={star} alt='icon' />
                    </figure>
                </div>
            </Marquee>
        </section>
    );
};

export default Partners;