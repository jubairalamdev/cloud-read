import Link from "next/link";
import { getBookById } from "@/lib/books/actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import BorrowButton from "@/Components/BookDetailsPage/BorrowButton";

const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;
  const book = await getBookById(bookId);
  if (!book) {
    notFound();
  }

  return (
    <div className="bg-[#f7fff7] min-h-screen pb-20 pt-36 px-4 sm:px-6">
      <div className="max-w-300 mx-auto">
        <div className="mb-8">
          <Link href="/books" className="text-[#1a535c]/60 hover:text-[#ff6b6b] font-medium transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Collection
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          <div className="w-full md:w-5/12 flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4ecdc4]/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative group">
              <Image 
                src={book.image_url} 
                alt={book.title}
                width={300}
                height={600}
                className="w-full max-w-sm rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute top-4 -right-4 bg-[#1a535c] text-[#f7fff7] font-bold text-sm px-4 py-2 rounded-lg shadow-lg border border-[#f7fff7]/10">
                {book.category}
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a535c] leading-tight mb-4">
                {book.title}
              </h1>
              <p className="text-xl md:text-2xl text-[#1a535c]/70 italic font-serif">
                by {book.author}
              </p>
            </div>
            <div className="prose prose-lg text-[#1a535c]/80 leading-relaxed">
              <p>
                {book.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 py-4 border-y border-[#1a535c]/10">
              <div className="flex items-center gap-3">
                <div className="bg-[#f7fff7] border border-[#1a535c]/10 p-3 rounded-lg">
                  <span className="block text-xs text-[#1a535c]/60 uppercase tracking-wider">Availability</span>
                  <span className={`font-bold text-lg ${book.available_quantity > 0 ? "text-[#4ecdc4]" : "text-[#ff6b6b]"}`}>
                    {book.available_quantity} Left
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#f7fff7] border border-[#1a535c]/10 p-3 rounded-lg">
                  <span className="block text-xs text-[#1a535c]/60 uppercase tracking-wider">Category</span>
                  <span className="font-bold text-lg text-[#1a535c]">
                    {book.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-4 flex gap-4">
              <BorrowButton book={book} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetailsPage;