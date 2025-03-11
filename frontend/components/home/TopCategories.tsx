import Container from '../ui/container';

const TopCategories = () => {
    return (
        <section className='py-[100px] md:py-[120px]'>
            <Container>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-full lg:w-7/12 xl:w-5/12'>
                        <div className='mb-10 text-center'>
                            <span className='bg-color-gray-3 py-1 px-4 font-medium rounded-full mb-3.5 text-theme-primary leading-[1.62] inline-block'>Trending Categories</span>
                            <h2 className='text-3xl sm:text-4xl font-bold capitalize text-heading-color tracking-[-.75px]'>Top Category We Have</h2>
                            <p className='mt-2.5 text-body-color'>Explore our curated selection of top categories to find exactly what you need.</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-wrap'>
                    <div className='w-full basis-auto grow-0 shrink-0'>
                        <div className='relative py-[30px] px-5 md:py-[45px] md:px-[90px] lg:pt-[52px] lg:px-[100px] lg:pb-[45px] xl:px-[145px] rounded-lg md:rounded-full bg-color-gray-4'>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TopCategories;