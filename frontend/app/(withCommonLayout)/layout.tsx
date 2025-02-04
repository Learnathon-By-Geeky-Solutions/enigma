import { cn } from "@/lib/utils";

interface CommonLayoutProps {
    children: React.ReactNode;
    className?: string;
};

const CommonLayout = ({ children, className }: CommonLayoutProps) => {
    return (
        <div className={cn("flex min-h-screen flex-col", className)}>
            {/* navbar */}
            <header>
                <nav>Navbar</nav>
            </header>
            <main className="flex-grow">{children}</main>
            {/* footer */}
            <footer>Footer</footer>
        </div>
    );
};

export default CommonLayout;