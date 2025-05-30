import { YouTubeIconProps } from '@/types/social';

const YouTubeIcon = ({ className }: YouTubeIconProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='main-grid-item-icon size-5'
            fill='currentColor'
            stroke='none'
            aria-labelledby='youtube-title'
        >
            <title id='youtube-title'>youtube</title>
            <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />
            <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' className={className} />
        </svg>
    );
};

export default YouTubeIcon;