import Link from 'next/link';
import React from 'react';

export default function PageHeader({ breadcrumb, buttonText, buttonLink }) {
    return (
        <div className="flex justify-between items-center mb-6">
            <nav className="text-sm">
                <ol className="list-reset flex text-gray-500">
                    {breadcrumb.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {item.link ? (
                                <Link href={item.link} className="text-blue-600 hover:underline">
                                    {item.text}
                                </Link>
                            ) : (
                                <span className="text-gray-700">{item.text}</span>
                            )}
                            {index < breadcrumb.length - 1 && <span className="mx-2">/</span>}
                        </li>
                    ))}
                </ol>
            </nav>
            <Link href={buttonLink} className="duration-500 hover:bg-white hover:text-black flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded shadow-md">
                {buttonText}
            </Link>
        </div>
    );
}