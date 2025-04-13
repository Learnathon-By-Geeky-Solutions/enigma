'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

import '@/styles/login.css';

import GOOGLE_ICON from '@/assets/images/icons/google.svg';

import { registerUser } from '@/utils/actions/registerUser';
import { validateEmail } from '@/utils/form';

import ArrowRightIcon from '../icons/arrow-right-icon';

const RegistrationCard = () => {
    const router = useRouter();
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    
    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''});

        const formData = new FormData(e.currentTarget);
        const firstName = formData.get('fname')?.toString();
        const lastName = formData.get('lname')?.toString();
        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();
        const confirmPassword = formData.get('c_password')?.toString();

        if (!firstName) {
            setErrors(prev => ({...prev, firstName: 'First name is a required field'}));
            setIsLoading(false);
            return;
        }

        if (!lastName) {
            setErrors(prev => ({...prev, lastName: 'Last name is a required field'}));
            setIsLoading(false);
            return;
        }

        if (!email) {
            setErrors(prev => ({...prev, email: 'Email is a required field'}));
            setIsLoading(false);
            return;
        }
        
        if (!validateEmail(email)) {
            setErrors(prev => ({...prev, email: 'Email must be a valid email'}));
            setIsLoading(false);
            return;
        }

        if (!password) {
            setErrors(prev => ({...prev, password: 'Password is a required field'}));
            setIsLoading(false);
            return;
        }

        if (!confirmPassword) {
            setErrors(prev => ({...prev, confirmPassword: 'Password is a required field'}));
            setIsLoading(false);
            return;
        }

        if (confirmPassword !== password) {
            setErrors(prev => ({...prev, confirmPassword: 'Both password must be same'}));
            setIsLoading(false);
            return;
        }

        const registrationData = { firstName, lastName, email, password };

        try {
            const res = await registerUser(registrationData);
            if (res.success) {
                toast('Registration successfully');
                router.push('/login');
            } else {
                toast.error(res.message || 'Registration failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred during registration');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='w-full md:w-[92%] lg:w-3/5 xl:w-[45%]'>
            <div className='signUp-wrap'>
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
                                <p className='form_error'>{errors.firstName}</p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='form-grp'>
                                <label htmlFor='last-name'>Last Name</label>
                                <input type='text' name='lname' id='last-name' placeholder='Last Name' />
                                <p className='form_error'>{errors.lastName}</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-grp'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' name='email' type='text' placeholder='Email' />
                        <p className='form_error'>{errors.email}</p>
                    </div>
                    <div className='form-grp'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' name='password' type='password' placeholder='Password' />
                        <p className='form_error'>{errors.password}</p>
                    </div>
                    <div className='form-grp'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input id='confirm-password' name='c_password' type='password' placeholder='Confirm Password' />
                        <p className='form_error'>{errors.confirmPassword}</p>
                    </div>
                    <button type='submit' className='btn btn-two arrow-btn' disabled={isLoading}>
                        {isLoading ? 'Processing...' : 'Sign Up'} {!isLoading && <ArrowRightIcon />}
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