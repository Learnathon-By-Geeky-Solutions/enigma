export const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}(?:\.[a-z]{2,})*$/i;
    return pattern.test(email);
};