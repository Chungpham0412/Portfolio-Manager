import DefaultLayout from '@/layouts/DefaultLayout';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Chungpq Developer</title>
                <meta name="description" content="Chungpq Web Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultLayout>trang chủ mè</DefaultLayout>
        </>
    );
}
