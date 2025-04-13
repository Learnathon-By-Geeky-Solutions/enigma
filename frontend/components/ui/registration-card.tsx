'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import '@/styles/login.css';

import GOOGLE_ICON from '@/assets/images/icons/google.svg';

import { registerUser } from '@/utils/actions/registerUser';
import { validateEmail } from '@/utils/form';

import ArrowRightIcon from '../icons/arrow-right-icon';

const RegistrationCard = () => {
    const router = useRouter();
    
    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const first_name = formData.get('fname')?.toString();
        const last_name = formData.get('lname')?.toString();
        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();
        const confirm_password = formData.get('c_password')?.toString();
        const formErrors = document.querySelectorAll('.form_error') as NodeListOf<HTMLParagraphElement>;

        if (!first_name) {
            formErrors[0].textContent = 'First name is a required field';
            return;
        }
        formErrors[0].textContent = '';

        if (!last_name) {
            formErrors[1].textContent = 'Last name is a required field';
            return;
        }
        formErrors[1].textContent = '';

        if (!email) {
            formErrors[2].textContent = 'Email is a required field';
            return;
        }
        
        if (!validateEmail(email)) {
            formErrors[2].textContent = 'Email must be a valid email';
            return;
        }
        formErrors[2].textContent = '';

        if (!password) {
            formErrors[3].textContent = 'Password is a required field';
            return;
        }
        formErrors[3].textContent = '';

        if (!confirm_password) {
            formErrors[4].textContent = 'Password is a required field';
            return;
        }

        if (confirm_password !== password) {
            formErrors[4].textContent = 'Both password must be same';
            return;
        }
        formErrors[4].textContent = '';

        const registrationData = { first_name, last_name, email, password };

        try {
            const res = await registerUser(registrationData);
            if (res.success) {
                toast('Registration successfully');
                router.push('/');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className='w-full md:w-[92%] lg:w-3/5 xl:w-[45%]'>
            <div className='singUp-wrap'>
                <h2 className='title'>Create Your Account</h2>
                <p className='tracking-tight text-body-color'>
                    Hey there! Ready to join the party? We just need a few details from you to get started. Let&apos;s
                    do this!
                </p>
                <button className='account__social-btn'>
                    <Image src={GOOGLE_ICON} alt='Google' />
                    Continue with google
                </button>
                <div className='account__divider'>
                    <span>or</span>
                </div>
                <form className='account__form' onSubmit={registrationHandler}>
                    <div className='flex flex-col gap-0 md:gap-5 md:flex-row'>
                        <div className='w-full'>
                            <div className='form-grp'>
                                <label htmlFor='fast-name'>First Name</label>
                                <input type='text' name='fname' id='fast-name' placeholder='First Name' />
                                <p className='form_error'></p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='form-grp'>
                                <label htmlFor='last-name'>Last Name</label>
                                <input type='text' name='lname' id='last-name' placeholder='Last Name' />
                                <p className='form_error'></p>
                            </div>
                        </div>
                    </div>
                    <div className='form-grp'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' name='email' type='text' placeholder='Email' />
                        <p className='form_error'></p>
                    </div>
                    <div className='form-grp'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' name='password' type='password' placeholder='Password' />
                        <p className='form_error'></p>
                    </div>
                    <div className='form-grp'>
                        <label htmlFor='confirm-password'>Password</label>
                        <input id='confirm-password' name='c_password' type='password' placeholder='Confirm Password' />
                        <p className='form_error'></p>
                    </div>
                    <button type='submit' className='btn btn-two arrow-btn'>
                        Sign Up <ArrowRightIcon />
                    </button>
                </form>
                <div className='account__switch'>
                    <p>
                        Already have an account?{' '}
                        <Link href='/login' className='underline text-theme-primary hover:text-theme-secondary'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RegistrationCard;