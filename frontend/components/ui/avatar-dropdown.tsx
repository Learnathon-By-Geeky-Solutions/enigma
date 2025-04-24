import { UserRound } from 'lucide-react';
import { signOut } from 'next-auth/react';
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
            <DropdownMenuTrigger
                aria-label='Open user menu'
                className='p-2 rounded-full outline-none bg-color-gray text-body-color hover:bg-theme-primary hover:text-white'
            >
                <UserRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40 bg-white' align='end' sideOffset={5}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-gray-100' />
                <DropdownMenuItem asChild>
                    <Link href='/profile'>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                    onClick={() => {
                        if (window.confirm('Are you sure you want to log out?')) {
                            signOut({ callbackUrl: '/' });
                        }
                    }}
                >
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AvatarDropdown;