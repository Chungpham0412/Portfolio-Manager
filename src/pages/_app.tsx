import type { AppProps } from 'next/app';
import '@/styles/_tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
