import { RegistrationFormValues } from '@/types/form';

export const registerUser = async (data: RegistrationFormValues) => {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Registration failed with status: ${res.status}`);
        }
        
        const userInfo = await res.json();
        return userInfo;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};