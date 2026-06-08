"use client"
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const BorrowButton = ({ book }) => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    const notifyBorrow = () => {
        if(user) {
            toast.success("Successfully Borrowed Book!");
        }
        else {
            redirect("/login");
        }
    } 
    return (
        <button
            onClick={notifyBorrow}
            disabled={book.available_quantity === 0}
            className={`flex-1 py-4 rounded-xl font-bold text-lg shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer ${book.available_quantity > 0
                ? "bg-[#ff6b6b] hover:bg-[#e05e5e] text-white shadow-[#ff6b6b]/30"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
        >
            {book.available_quantity > 0 ? "Borrow Now" : "Out of Stock"}
        </button>
    );
};

export default BorrowButton;