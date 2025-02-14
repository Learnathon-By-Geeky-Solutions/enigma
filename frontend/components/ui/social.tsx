import Link from 'next/link';

import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL, YOUTUBE_URL } from '@/config/constants';
import { SocialProps } from '@/types/social';

import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from './icons/social-icons';

const Social = ({ className, urlClassName, iconClassName }: SocialProps) => {
    return (
        <ul className={className} aria-label='Social media links'>
            <li>
                <Link href={FACEBOOK_URL} className={urlClassName}>
                    <FacebookIcon />
                </Link>
            </li>
            <li>
                <Link href={TWITTER_URL} className={urlClassName}>
                    <TwitterIcon />
                </Link>
            </li>
            <li>
                <Link href={INSTAGRAM_URL} className={urlClassName}>
                    <InstagramIcon />
                </Link>
            </li>
            <li>
                <Link href={LINKEDIN_URL} className={urlClassName}>
                    <LinkedInIcon />
                </Link>
            </li>
            <li>
                <Link href={YOUTUBE_URL} className={urlClassName}>
                    <YouTubeIcon className={iconClassName} />
                </Link>
            </li>
        </ul>
    );
};

export default Social;
