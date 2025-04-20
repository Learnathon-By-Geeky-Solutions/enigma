import { LoginFormValues } from '@/types/form';

export const loginUser = async (data: LoginFormValues) => {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Login failed with status: ${res.status}`);
        }
        
        const userInfo = await res.json();
        return userInfo;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};