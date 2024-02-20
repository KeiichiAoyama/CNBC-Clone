import React, { useState } from 'react';
import data from './json/SelectOpt.json';
import Link from 'next/link';

//Not Done Yet

function SelectOpt({ onClose }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const handleCategoryClick = (items) => {
        setSelectedCategory(items);
        setIsSecondModalOpen(true);
    };

    const handleSecondModalMouseLeave = () => {
        if (!isSecondModalOpen) {
            onClose();
        }
    };

    return (
        <div className="relative">
            <div className="absolute w-48 bg-white shadow-lg z-50" onMouseLeave={onClose}>
                <ul className="py-1 text-left">
                    {data.content.map((category, index) => (
                        <li key={index} className="px-4 py-2 flex text-sky-900 border-b-2 border-blue-200 border-opacity-25 hover:bg-gray-200 hover:text-sky-950 hover:font-bold cursor-pointer">
                            <button onClick={() => handleCategoryClick(category[Object.keys(category)])}>
                                {Object.keys(category)[0]}
                            </button>
                            <span className="ml-auto inline-block transform rotate-90">&#8250;</span>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedCategory && (
                <div className="absolute w-48 bg-white shadow-lg z-50" style={{ top: '100%', left: '0' }} onMouseLeave={handleSecondModalMouseLeave}>
                    <ul className="py-1 text-left">
                        <li className="px-4 py-2 text-sky-900 border-b-2 border-blue-200 border-opacity-25 hover:bg-gray-200 hover:text-sky-950 hover:font-bold cursor-pointer">
                            <span className="ml-auto inline-block transform -rotate-90">&#8250;</span>
                            <button onClick={() => setIsSecondModalOpen(false)}>SELECT</button>
                        </li>
                        {selectedCategory.items.map((item, index) => (
                            <li key={index} className="px-4 py-2 text-sky-900 border-b-2 border-blue-200 border-opacity-25 hover:bg-gray-200 hover:text-sky-950 hover:font-bold cursor-pointer">
                                <Link href={item.link}>{item.category}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SelectOpt;
