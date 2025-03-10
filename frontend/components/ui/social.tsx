import Link from 'next/link';

import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL, YOUTUBE_URL } from '@/config/constants';
import { SocialProps } from '@/types/social';

import FacebookIcon from './icons/facebook-icon';
import InstagramIcon from './icons/instagram-icon';
import LinkedInIcon from './icons/linkedin-icon';
import TwitterIcon from './icons/twitter-icon';
import YouTubeIcon from './icons/youtube-icon';

const Social = ({ className, urlClassName, youtubePolygonClassName }: SocialProps) => {
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
                    <YouTubeIcon className={youtubePolygonClassName} />
                </Link>
            </li>
        </ul>
    );
};

export default Social;
