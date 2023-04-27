import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <main className="container">
                <div id="content">{children}</div>
            </main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
