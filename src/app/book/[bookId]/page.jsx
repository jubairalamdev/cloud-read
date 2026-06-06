import React from 'react';

const bookDetailsPage = async({params}) => {
    const {bookId} = await params;

    return (
        <div>
            This is Book Details Page for id = {bookId}
        </div>
    );
};

export default bookDetailsPage;