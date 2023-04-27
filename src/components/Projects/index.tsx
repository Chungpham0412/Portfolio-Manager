import Image from 'next/image';
import Link from 'next/link';

interface ProjectsProps {
    heading_title: string;
    datas: Array<{
        title: string;
        description: string;
        image: string;
    }>;
}
function Projects({
    heading_title = 'Projects nè',
    datas = [
        {
            title: 'HTML',
            description: '',
            image: 'https://cdn.svgporn.com/logos/html-5.svg',
        },
    ],
}: ProjectsProps) {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="heading mb-9 md:mb-14 relative pb-4 font-bold text-xl md:text-[32px] text-white leading-normal text-left left">
                    {heading_title}
                </h2>
                <div className="list-project grid lg:grid-cols-4 gap-8 lg:gap-16 max-lg:grid-flow-col max-lg:auto-cols-[215px] max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory scroll-hidden">
                    {datas &&
                        datas.map((project, index) => (
                            <div className="snap-start" key={index}>
                                <Link
                                    href="/"
                                    className="h-[133px] lg:h-[200px] border border-dark3 rounded-2xl block overflow-hidden group relative"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={300}
                                        height={200}
                                        className="object-cover w-full h-full rounded-2xl group-hover:scale-105"
                                    />
                                    <h3 className="mt-5 mb-3 text-base font-bold leading-normal md:text-xl text-grey200">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs leading-normal md:text-sm lg:text-base">
                                        {project.description}
                                    </p>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
