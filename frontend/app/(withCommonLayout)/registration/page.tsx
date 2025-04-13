import Breadcrumbs from '@/components/shared/Breadcrumbs';
import RegistrationCard from '@/components/ui/registration-card';

export const metadata = {
    title: 'SkillGrow | Registration',
    description: 'AI-Powered Online Job Preparation Platform',
};

export default function Registration() {
    return (
        <>
            <Breadcrumbs title='Registration' />
            <div className='py-[100px] md:py-[120px]'>
                <h1 className="sr-only">User Registration</h1>
                <div className='flex justify-center px-4'>
                    <RegistrationCard />
                </div>
            </div>
        </>
    );
}