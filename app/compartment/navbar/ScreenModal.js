import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function ScreenModal() {
    const [searchGlow, setSearchGlow] = useState('text-blue-900');

    const glowSearch = (color) => {
        setSearchGlow(color);
    };

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-white z-[100]'>
            <div className='w-full mx-8 h-full'>
                <div className='h-10 mt-5 flex justify-start items-center'>
                    <button className='hover:text-orange-400 text-blue-600'>
                        <div className='font-calibri'>
                            X
                        </div>
                    </button>
                    <div className="max-h-8 pl-10">
                        <Image src="/site-header-logo.png" alt="cnbc site image" width={100} height={100} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="max-h-10 ml-auto mr-10 flex items-baseline" 
                        onMouseEnter={() => glowSearch('text-orange-400')} 
                        onMouseLeave={() => glowSearch('text-blue-900')}
                    >
                        <div className={`text-xs font-calibri font-bold ${searchGlow}`}>
                            SEARCH
                        </div>
                        <div className="max-h-8 pl-1">
                            <Image src={"/magnifier.png"} width={23} height={23} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenModal;
