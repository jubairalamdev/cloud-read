import { redirect } from 'next/navigation';

const defaultCategoryId = 1;

const BooksPage = () => {
    redirect(`/books/category/${defaultCategoryId}`)
};

export default BooksPage;