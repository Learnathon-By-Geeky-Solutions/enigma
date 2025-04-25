import '@/styles/contact.css';

import Container from '../ui/container';

import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactArea = () => {
    return (
        <section className='py-[100px] md:py-[120px]'>
            <Container>
                <div className='flex flex-col px-4 lg:flex-row xl:px-0'>
                    <div className='w-full lg:w-1/3'>
                        <ContactInfo />
                    </div>
                    <div className='w-full lg:w-2/3 lg:pl-[30px]'>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactArea;