import Image from 'next/image';

interface SkillsProps {
    heading_title: string;
    datas: Array<{
        title: string;
        description: string;
        image: string;
    }>;
}
function Skills({
    heading_title = 'Skills nè',
    datas = [
        {
            title: 'HTML',
            description: '',
            image: 'https://cdn.svgporn.com/logos/html-5.svg',
        },
    ],
}: SkillsProps) {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2 className="heading mb-9 md:mb-14 relative pb-4 font-bold text-xl md:text-[32px] text-white leading-normal text-left left">
                    {heading_title}
                </h2>
                <div className="list-skill grid justify-items-center grid-cols-6 max-lg:gap-10 lg:gap-20 lg:px-20">
                    {datas &&
                        datas.map((skill, index) => (
                            <div
                                className="flex flex-col items-center justify-center transition-all max-w-[67px] max-h-[67px] relative"
                                key={index}
                            >
                                <Image
                                    src={skill.image}
                                    alt={skill.title}
                                    width={67}
                                    height={67}
                                    className="w-full h-full"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
