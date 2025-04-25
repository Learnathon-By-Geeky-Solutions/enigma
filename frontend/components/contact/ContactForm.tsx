'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import { validateEmail, validatePhoneNumber } from '@/utils/form';

import SubmitButton from '../form/SubmitButton';

const ContactForm = () => {
    const [errors, setErrors] = useState({
        message: '',
        user_name: '',
        user_email: '',
        user_phone: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({ message: '', user_name: '', user_email: '', user_phone: '' });

        const formData = new FormData(e.currentTarget);
        const message = formData.get('message') as string;
        const user_name = formData.get('user_name') as string;
        const user_email = formData.get('user_email') as string;
        const user_phone = formData.get('user_phone') as string;
        const newErrors: { message?: string; user_name?: string; user_email?: string; user_phone?: string } = {};

        if (!message) newErrors.message = 'Message is a required field';
        else if (message.length < 30) newErrors.message = 'Message must be at least 30 characters long';

        if (!user_name) newErrors.user_name = 'Name is a required field';
        else if (user_name.length < 3) newErrors.user_name = 'Name must be at least 3 characters long';

        if (!user_email) newErrors.user_email = 'Email is a required field';
        else if (!validateEmail(user_email)) newErrors.user_email = 'Email must be a valid email';

        if (!user_phone) newErrors.user_phone = 'Phone is a required field';
        else if (!validatePhoneNumber(user_phone)) newErrors.user_phone = 'Phone must be a valid phone number';

        if (Object.keys(newErrors).length) {
            setErrors((prev) => ({ ...prev, ...newErrors }));
            setIsLoading(false);
            return;
        }

        const contactData = { message, user_name, user_email, user_phone };

        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                contactData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            );
            console.log(response.text);
            toast('Message sent successfully');
        } catch (error) {
            console.error(error);
            toast.error('An error occurred during submitting contact form');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='contact-form-wrap'>
            <h4 className='title'>Send Us Message</h4>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='form-grp'>
                    <textarea name='message' placeholder='Comment' />
                    {errors.message && <p className='form_error'>{errors.message}</p>}
                </div>
                <div className='flex flex-col gap-0 md:flex-row md:gap-5'>
                    <div className='w-full'>
                        <div className='form-grp'>
                            <input name='user_name' type='text' placeholder='Name *' />
                            {errors.user_name && <p className='form_error'>{errors.user_name}</p>}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='form-grp'>
                            <input name='user_email' type='email' placeholder='E-mail *' />
                            {errors.user_email && <p className='form_error'>{errors.user_email}</p>}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='form-grp'>
                            <input name='user_phone' type='tel' placeholder='Phone *' />
                            {errors.user_phone && <p className='form_error'>{errors.user_phone}</p>}
                        </div>
                    </div>
                </div>
                <SubmitButton text='Submit Now' isLoading={isLoading} />
            </form>
        </div>
    );
};

export default ContactForm;