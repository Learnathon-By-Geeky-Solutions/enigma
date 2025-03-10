import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import TopNav from '@/components/ui/topnav';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <TopNav />
            <Navbar />
            <main className='flex-grow'>{children}</main>
            <Footer />
        </div>
    );
};

export default CommonLayout;