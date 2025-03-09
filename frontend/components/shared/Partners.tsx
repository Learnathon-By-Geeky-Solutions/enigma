import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import brand01 from '@/assets/images/partners/brand01.png';
import brand02 from '@/assets/images/partners/brand02.png';
import brand03 from '@/assets/images/partners/brand03.png';
import brand04 from '@/assets/images/partners/brand04.png';
import brand05 from '@/assets/images/partners/brand05.png';
import brand06 from '@/assets/images/partners/brand06.png';
import star from '@/assets/images/icons/brand-star.svg';

const Partners = () => {
    const brands = [brand01, brand02, brand03, brand04, brand05, brand06, brand02, brand04, brand03, brand05];

    return (
        <section className='py-5 bg-color-black'>
            <Marquee pauseOnHover pauseOnClick speed={30}>
                {brands.map((brand, index) => (
                    <div key={`partner-${index}`} className='flex items-center gap-9 mr-9'>
                        <figure className='overflow-hidden hover:cursor-pointer'>
                            <Image
                                src={brand}
                                alt={`partner brand ${index + 1}`}
                                className='hover:drop-shadow-[0_1000px_0_#B5B4C1] hover:transform hover:translate-y-[-1000px]'
                            />
                        </figure>
                        
                        <figure>
                            <Image src={star} alt='icon' />
                        </figure>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default Partners;