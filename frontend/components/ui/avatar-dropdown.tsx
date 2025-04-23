import { UserRound } from 'lucide-react';
import Link from 'next/link';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './dropdown-menu';

const AvatarDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='p-2 rounded-full bg-color-gray text-body-color hover:bg-theme-primary hover:text-white outline-none'>
                <UserRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40 bg-white' align='end' sideOffset={5}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-gray-100' />
                <DropdownMenuItem>
                    <Link href='/profile'>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AvatarDropdown;