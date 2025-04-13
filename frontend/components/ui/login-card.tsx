'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

import '@/styles/login.css';

import GOOGLE_ICON from '@/assets/images/icons/google.svg';

import { loginUser } from '@/utils/actions/loginUser';
import { validateEmail } from '@/utils/form';

import ArrowRightIcon from '../icons/arrow-right-icon';

const LoginCard = () => {
    const router = useRouter();
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    
    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({email: '', password: ''});

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();

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

        const loginData = { email, password };

        try {
            const res = await loginUser(loginData);
            if (res.success) {
                if (typeof window !== 'undefined') {
                    localStorage.setItem('accessToken', res.accessToken);
                }
                toast('Login successfully');
                router.push('/');
            } else {
                toast.error(res.message || 'Login failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='w-full md:w-[92%] lg:w-3/5 xl:w-[45%]'>
            <div className='signUp-wrap'>
                <h2 className='title'>Welcome back!</h2>
                <p className='tracking-tight text-body-color'>
                    Hey there! Ready to log in? Just enter your username and password below and you&apos;ll be back in
                    action in no time. Let&apos;s go!
                </p>
                <button className='account__social-btn'>
                    <Image src={GOOGLE_ICON} alt='Google' />
                    Continue with google
                </button>
                <div className='account__divider'>
                    <span>or</span>
                </div>
                <form className='account__form' onSubmit={loginHandler}>
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
                    <div className='account__check'>
                        <div className='account__check-remember'>
                            <input type='checkbox' className='form-check-input' id='terms-check' value='' />
                            <label htmlFor='terms-check' className='form-check-label'>
                                Remember me
                            </label>
                        </div>
                        <div className='account__check-forgot'>
                            <Link
                                href='/forgot-password'
                                className='underline text-theme-primary hover:text-theme-secondary'
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-two arrow-btn' disabled={isLoading}>
                        {isLoading ? 'Processing...' : 'Sign In'} {!isLoading && <ArrowRightIcon />}
                    </button>
                </form>
                <div className='account__switch'>
                    <p>
                        Don&apos;t have an account?{' '}
                        <Link href='/registration' className='underline text-theme-primary hover:text-theme-secondary'>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LoginCard;