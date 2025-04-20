import Breadcrumbs from '@/components/shared/Breadcrumbs';
import LoginCard from '@/components/ui/login-card';

export const metadata = {
    title: 'SkillGrow | Login',
    description: 'AI-Powered Online Job Preparation Platform',
};

export default function Login() {
    return (
        <>
            <Breadcrumbs title='Login' />
            <div className='py-[100px] md:py-[120px]'>
                <div className='flex justify-center px-4'>
                    <LoginCard />
                </div>
            </div>
        </>
    );
}