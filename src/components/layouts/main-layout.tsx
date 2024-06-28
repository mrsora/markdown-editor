import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="mainLayout">
            {children}
        </main>
    )
}

MainLayout.Column = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mainLayout__column">
            {children}
        </div>
    )
}


export default MainLayout;