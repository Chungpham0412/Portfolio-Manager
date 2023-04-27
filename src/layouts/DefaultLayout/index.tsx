import Loader from '@/components/Loader';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Loader />
            <Header />
            <main className="content" id="content">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
