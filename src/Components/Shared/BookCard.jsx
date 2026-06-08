import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="group relative bg-[#f7fff7] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#1a535c]/5">
      <div className="relative h-72 overflow-hidden bg-gray-200">
        <Image 
          src={book.image_url} 
          alt={book.title} 
          height={400}
          width={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-[#1a535c]/90 backdrop-blur-sm text-[#f7fff7] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
            {book.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#1a535c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 text-center relative z-10">
        <h3 className="text-xl font-bold text-[#1a535c] mb-1 truncate" title={book.title}>
          {book.title}
        </h3>
        <p className="text-sm text-[#1a535c]/60 mb-5 font-medium">
          by {book.author}
        </p>
        <Link href={`/book/${book.id}`}>
          <button className="w-full bg-[#ff6b6b] hover:bg-[#e05e5e] text-white font-bold py-2.5 rounded-xl transition-colors shadow-md hover:shadow-lg cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;