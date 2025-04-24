import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}(?:\.[a-z]{2,})*$/i;
    return pattern.test(email);
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
    if (!phoneNumber.startsWith('+')) {
        return false; 
    }

    try {
        const parsedNumber = parsePhoneNumberFromString(phoneNumber);
        return parsedNumber?.isValid() ?? false;
    } catch (error) {
        console.error('Error parsing phone number:', error);
        return false;
    }
};