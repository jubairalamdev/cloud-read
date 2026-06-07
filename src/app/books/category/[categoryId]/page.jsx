import LeftSideBar from "@/Components/Books/LeftSideBar";
import BookCard from "@/Components/Shared/BookCard";
import { getCategories, getBooksByCategoryId } from "@/lib/books/actions"
import SearchBar from "@/Components/Books/SearchBar";

export default async function AllBooksPage({ params }) {

  const { categoryId } = await params;
  // console.log(categoryId)

  const categories = await getCategories()
  // console.log(categories)

  const booksData = await getBooksByCategoryId(categoryId);
  console.log(booksData)

  return (
    <div className="bg-[#f7fff7] min-h-screen pb-20 pt-36 px-4 sm:px-6">
      <div className="max-w-300 mx-auto">

        {/* Page Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a535c] mb-2">
            Explore Collection
          </h1>
          <p className="text-[#1a535c]/70 text-lg">
            Browse through our extensive library of curated titles.
          </p>
        </div>
        <SearchBar />
        <div className="grid grid-cols-12 gap-6">
          <LeftSideBar categories={categories} activeId={categoryId} />
          {/* Books Grid */}
          <div className="grid grid-cols-1 col-span-9 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksData.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}