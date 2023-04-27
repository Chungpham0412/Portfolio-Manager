import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import DefaultLayout from '@/layouts/DefaultLayout';
import Head from 'next/head';

export default function Home() {
    const skills = [
        {
            title: 'HTML',
            description: '',
            image: 'https://cdn.svgporn.com/logos/html-5.svg',
        },
        {
            title: 'CSS',
            description: '',
            image: 'https://cdn.svgporn.com/logos/css-3.svg',
        },
        {
            title: 'Javascript',
            description: '',
            image: 'https://cdn.svgporn.com/logos/javascript.svg',
        },
        {
            title: 'ReactJS',
            description: '',
            image: 'https://cdn.svgporn.com/logos/react.svg',
        },
        {
            title: 'NextJS',
            description: '',
            image: 'https://cdn.svgporn.com/logos/nextjs.svg',
        },
        {
            title: 'TailwindCSS',
            description: '',
            image: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
        },
        {
            title: 'Typescript',
            description: '',
            image: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
        },
        {
            title: 'Visual Studio Code',
            description: '',
            image: 'https://cdn.svgporn.com/logos/visual-studio-code.svg',
        },
        {
            title: 'Git',
            description: '',
            image: 'https://cdn.svgporn.com/logos/git-icon.svg',
        },
        {
            title: 'Github',
            description: '',
            image: 'https://cdn.svgporn.com/logos/github-icon.svg',
        },
        {
            title: 'Figma',
            description: '',
            image: 'https://cdn.svgporn.com/logos/figma.svg',
        },
        {
            title: 'PHP',
            description: '',
            image: 'https://cdn.svgporn.com/logos/php.svg',
        },
    ];
    const projects = [
        {
            title: 'CodingUI',
            description:
                'Dự án cá nhân mình phát triển với mục đích chia sẻ các giao diện đơn giản hay gặp, các bạn có thể lấy giao diện chỉ với 1 vài cú nhấp chuột.',
            image: 'https://cdn.svgporn.com/logos/html-5.svg',
            href: 'https://codingui.dev',
        },
    ];

    return (
        <>
            <Head>
                <title>Chungpq Developer</title>
                <meta name="description" content="Chungpq Web Developer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultLayout>
                <Projects heading_title="Sản phẩm của mình" datas={projects} />
                <Skills heading_title="Skills nè" datas={skills} />
            </DefaultLayout>
        </>
    );
}
