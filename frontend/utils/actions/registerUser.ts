import { RegistrationFormValues } from '@/types/form';

export const registerUser = async (data: RegistrationFormValues) => {
    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        cache: 'no-store',
    });
    const userInfo = await res.json();
    return userInfo;
};