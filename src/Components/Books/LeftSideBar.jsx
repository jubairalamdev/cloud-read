import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div className="col-span-3">
            <h4 className="text-xl text-gray-700 font-semibold">Categories</h4>
            <ul className="list-none text-xl text-gray-400 font-medium my-5">
                {
                    categories.map(category =>
                        <li
                            className={`
                                    ${activeId == category.id && "bg-slate-200 text-gray-700"}
                                    rounded-lg
                                `}
                            key={category.id}>
                            <Link
                                href={`/books/category/${category.id}`}
                                className='py-4 px-5 block'
                            >
                                {category.category}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;