import Navbar from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

interface CommonLayoutProps {
    children: React.ReactNode;
    className?: string;
};

const CommonLayout = ({ children, className }: CommonLayoutProps) => {
    return (
        <div className={cn("flex min-h-screen flex-col", className)}>
            <Navbar />

            <main className="flex-grow">{children}</main>
            
            <footer>Footer</footer>
        </div>
    );
};

export default CommonLayout;