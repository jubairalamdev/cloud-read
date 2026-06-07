import BookSpotlight from '@/Components/Shared/BookSpotlight';
import React from 'react';

const booksLayout = ({children}) => {
    return (
        <>
            {children}
            <BookSpotlight />
        </>
    );
};

export default booksLayout;