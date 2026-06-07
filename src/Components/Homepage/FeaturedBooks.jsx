import Link from "next/link";
import BookCard from "../Shared/BookCard";
import books from "@/database/bookData.json";

const FeaturedBooks = () => {
  const topBooks = books.slice(0, 4);

  return (
    <section className="w-full max-w-300 mx-auto  px-4 sm:px-6 py-30">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <span className="text-[#4ecdc4] font-bold uppercase tracking-widest text-sm mb-2 block">
                New Arrivals
          </span>
          <h2 className="text-4xl font-serif font-bold text-[#1a535c]">
            Featured Books
          </h2>
        </div>
        <Link href="/books" className="hidden md:inline-block">
            <button className="border-2 border-[#1a535c] text-[#1a535c] hover:bg-[#1a535c] hover:text-[#f7fff7] font-bold py-2 px-6 rounded-full transition-all duration-300 cursor-pointer">
                View All Collection
            </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="mt-10 text-center md:hidden">
        <Link href="/books">
            <button className="bg-[#1a535c] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#163e44] transition-colors w-full">
                View All Collection
            </button>
        </Link>
      </div>

    </section>
  );
};

export default FeaturedBooks;