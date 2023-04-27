import { CSSProperties } from 'react';

function Loader() {
    const style: CSSProperties = {
        opacity: 0,
        visibility: 'hidden',
    };

    return (
        <>
            <div
                id="globalLoader"
                className="fixed inset-0 z-50 flex items-center justify-center p-10 transition-all bg-darkMain"
                style={style}
            >
                <div className="w-10 h-10 border-4 rounded-full border-secondary animate-spin border-t-transparent loader"></div>
            </div>
        </>
    );
}

export default Loader;
