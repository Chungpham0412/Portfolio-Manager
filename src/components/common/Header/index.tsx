import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <>
            <header className="relative z-20 py-5 mb-5 lg:mb-8 lg:py-9">
                <div className="flex items-center justify-between layout-container">
                    <Link className="flex items-baseline" href="/">
                        {/* <Image
                            src="/evondev-logo.png"
                            alt="evondev"
                            className="max-w-[12px] lg:max-w-[15px] relative top-[0.5px]"
                        /> */}
                        <strong className="text-lg leading-none text-white lg:text-2xl">vondev</strong>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;
