'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

import '@/styles/login.css';

import { loginUser } from '@/utils/actions/loginUser';
import { validateEmail } from '@/utils/form';

import AuthLayout from '../shared/AuthLayout';
import FormInput from '../form/FormInput';
import SubmitButton from '../form/SubmitButton';

const LoginCard = () => {
    const router = useRouter();
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({ email: '', password: '' });

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const newErrors: { email?: string; password?: string } = {};

        if (!email) newErrors.email = 'Email is a required field';
        else if (!validateEmail(email)) newErrors.email = 'Email must be a valid email';

        if (!password) newErrors.password = 'Password is a required field';

        if (Object.keys(newErrors).length) {
            setErrors((prev) => ({ ...prev, ...newErrors }));
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
        <AuthLayout
            title='Welcome back!'
            description="Hey there! Ready to log in? Just enter your username and password below and you'll be back in action in no time. Let's go!"
        >
            <form className='account__form' onSubmit={loginHandler}>
                <FormInput 
                    label='Email' 
                    name='email' 
                    type='text' 
                    placeholder='Email' 
                    error={errors.email}
                />
                <FormInput
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Password'
                    error={errors.password}
                />
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
                <SubmitButton text='Sign In' isLoading={isLoading} />
            </form>
            <div className='account__switch'>
                <p>
                    Don&apos;t have an account?{' '}
                    <Link href='/registration' className='underline text-theme-primary hover:text-theme-secondary'>
                        Sign Up
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default LoginCard;