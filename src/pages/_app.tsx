import type { AppProps } from 'next/app';
import '@/styles/_tailwind.css';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
