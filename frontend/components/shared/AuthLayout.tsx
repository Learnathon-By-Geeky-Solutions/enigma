import Image from 'next/image';
import { signIn } from 'next-auth/react';

import GOOGLE_ICON from '@/assets/images/icons/google.svg';

const AuthLayout = ({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children: React.ReactNode;
}) => {
    return (
        <section className='w-full md:w-[92%] lg:w-3/5 xl:w-[45%]'>
            <div className='signUp-wrap'>
                <h2 className='title'>{title}</h2>
                <p className='tracking-tight text-body-color'>{description}</p>
                <button
                    className='account__social-btn'
                    onClick={() =>
                        signIn('google', {
                            callbackUrl: 'http://localhost:3000',
                        })
                    }
                >
                    <Image src={GOOGLE_ICON} alt='Google' />
                    Continue with Google
                </button>
                <div className='account__divider'>
                    <span>or</span>
                </div>
                {children}
            </div>
        </section>
    );
};

export default AuthLayout;