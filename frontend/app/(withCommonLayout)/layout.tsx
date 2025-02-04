const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {/* navbar */}
            Navbar
            <div className="min-h-[calc(100vh-92px)]">{children}</div>
            {/* footer */}
            Footer
        </>
    );
};

export default CommonLayout;