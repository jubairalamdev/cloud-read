import LeftSideBar from "@/Components/Books/LeftSideBar";
import BookCard from "@/Components/Shared/BookCard";
import SearchBar from "@/Components/Books/SearchBar";
import { getBooksBySearchQuery, getCategories } from "@/lib/books/actions";

export default async function SearchResultsPage({ params }) {
  console.log(params)
  const { searchQuery } = await params;
  const decodedQuery = decodeURIComponent(searchQuery);
  console.log(searchQuery, decodedQuery)
  const booksData = await getBooksBySearchQuery(decodedQuery);

  const categories = await getCategories()

  return (
    <div className="bg-[#f7fff7] min-h-screen pb-20 pt-36 px-4 sm:px-6">
      <div className="max-w-300 mx-auto">
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
          <LeftSideBar categories={categories} activeId={null} />
          {
            booksData.length > 0
              ?
              <div className="grid grid-cols-1 col-span-9 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {booksData.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
              :
              <p className="text-[#1a535c]/70 text-lg col-span-9 text-center">
                No Books Found in this Query.
              </p>
          }
        </div>
      </div>
    </div>
  );
}