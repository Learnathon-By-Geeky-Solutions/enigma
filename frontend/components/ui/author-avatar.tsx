import Image from 'next/image';
import { AuthorAvatarProps } from '@/types/avatar';

const AuthorAvatar = ({ imageSrc, name }: AuthorAvatarProps) => {
    return (
        <div className='banner-author-item'>
            <div className='grow-0 shrink-0 basis-auto'>
                <Image src={imageSrc} alt={`${name} avatar`} priority={false} className='max-w-[30px] rounded-full' />
            </div>
            <h6 className='mb-0 text-sm grow'>{name}</h6>
        </div>
    );
};

export default AuthorAvatar;