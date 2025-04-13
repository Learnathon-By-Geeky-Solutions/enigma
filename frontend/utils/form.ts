export const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov)$/i;
    return pattern.test(email);
};