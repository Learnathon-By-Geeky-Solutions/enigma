import { getServerSession } from 'next-auth';

import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import TopNav from '@/components/ui/topnav';

import { authOptions } from '@/utils/authOptions';

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions);

    return (
        <div className='flex flex-col min-h-screen'>
            <TopNav />
            <Navbar session={session} />
            <main className='flex-grow'>{children}</main>
            <Footer />
        </div>
    );
};

export default CommonLayout;