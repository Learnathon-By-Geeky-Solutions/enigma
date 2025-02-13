import { YouTubeIconProps } from '@/types/icons';

export const FacebookIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        className='main-grid-item-icon size-5'
        fill='currentColor'
        role='img'
        aria-labelledby='facebook-title'
    >
        <title id='facebook-title'>facebook</title>
        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
);

export const TwitterIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        className='main-grid-item-icon size-5'
        fill='currentColor'
        role='img'
        aria-labelledby='twitter-title'
    >
        <title id='twitter-title'>twitter</title>
        <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
    </svg>
);

export const LinkedInIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        className='main-grid-item-icon size-5'
        fill='currentColor'
        role='img'
        aria-labelledby='linkedin-title'
    >
        <title id='linkedin-title'>linkedin</title>
        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
        <rect height='12' width='4' x='2' y='9' />
        <circle cx='4' cy='4' r='2' />
    </svg>
);

export const InstagramIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        className='main-grid-item-icon size-5'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        role='img'
        aria-labelledby='instagram-title'
    >
        <title id='instagram-title'>instagram</title>
        <rect height='20' rx='5' ry='5' width='20' x='2' y='2' />
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
        <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>
);

export const YouTubeIcon = ({ className }: YouTubeIconProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        className='main-grid-item-icon size-5'
        fill='currentColor'
        stroke='none'
        role='img'
        aria-labelledby='youtube-title'
    >
        <title id='youtube-title'>youtube</title>
        <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />
        <polygon
            points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'
            className={className}
        />
    </svg>
);