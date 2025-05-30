'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';

import '@/styles/login.css';

import { registerUser } from '@/utils/actions/registerUser';
import { validateEmail } from '@/utils/form';

import AuthLayout from '../shared/AuthLayout';
import FormInput from '../form/FormInput';
import SubmitButton from '../form/SubmitButton';

const RegistrationCard = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });

        const formData = new FormData(e.currentTarget);
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;
        const newErrors: {
            firstName?: string;
            lastName?: string;
            email?: string;
            password?: string;
            confirmPassword?: string;
        } = {};

        if (!firstName) newErrors.firstName = 'First name is a required field';

        if (!lastName) newErrors.lastName = 'Last name is a required field';

        if (!email) newErrors.email = 'Email is a required field';
        else if (!validateEmail(email)) newErrors.email = 'Email must be a valid email';

        if (!password) newErrors.password = 'Password is a required field'; // NOSONAR

        if (!confirmPassword) newErrors.confirmPassword = 'Confirm password is a required field';
        else if (confirmPassword !== password) newErrors.confirmPassword = 'Both passwords must be the same';

        if (Object.keys(newErrors).length) {
            setErrors((prev) => ({ ...prev, ...newErrors }));
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
                toast.error(res.message ?? 'Registration failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred during registration');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout
            title='Create Your Account'
            description="Hey there! Ready to join the party? We just need a few details from you to get started. Let's do this!"
        >
            <form className='account__form' onSubmit={registrationHandler}>
                <div className='flex flex-col gap-0 md:gap-5 md:flex-row'>
                    <div className='w-full'>
                        <FormInput
                            label='First Name'
                            name='firstName'
                            type='text'
                            placeholder='First Name'
                            error={errors.firstName}
                        />
                    </div>
                    <div className='w-full'>
                        <FormInput
                            label='Last Name'
                            name='lastName'
                            type='text'
                            placeholder='Last Name'
                            error={errors.lastName}
                        />
                    </div>
                </div>
                <FormInput label='Email' name='email' type='text' placeholder='Email' error={errors.email} />
                <div className='relative'>
                    <FormInput
                        label='Password'
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        error={errors.password}
                    />
                    <button
                        type='button'
                        className='absolute right-5 top-12'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <IoEyeOff /> : <IoEye />}
                    </button>
                </div>
                <div className='relative'>
                    <FormInput
                        label='Confirm Password'
                        name='confirmPassword'
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Confirm Password'
                        error={errors.confirmPassword}
                    />
                    <button
                        type='button'
                        className='absolute right-5 top-12'
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                    </button>
                </div>
                <SubmitButton text='Sign Up' isLoading={isLoading} />
            </form>
            <div className='account__switch'>
                <p>
                    Already have an account?{' '}
                    <Link href='/login' className='underline text-theme-primary hover:text-theme-secondary'>
                        Login
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default RegistrationCard;