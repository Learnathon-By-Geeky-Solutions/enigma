import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="max-w-7xl mx-auto">{children}</div>
    );
};

export default Container;