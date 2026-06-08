import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect('/login');
  }

  const userData = session.user;

  const joinDate = userData.createdAt 
    ? new Date(userData.createdAt).toLocaleDateString("en-US", { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) 
    : 'Unknown';

  return (
    <div className=" bg-[#f7fff7] pt-36 px-4 sm:px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#1a535c]">
            My Profile
          </h1>
          <p className="text-[#1a535c]/60 mt-1">
            Manage your account settings and view your information.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#1a535c]/10 overflow-hidden">
          
          <div className="flex flex-col md:flex-row">
            
            {/* Left Side: Avatar Section */}
            <div className="w-full md:w-1/3 bg-[#f7fff7] p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#1a535c]/10">
              <div className="relative">
                {/* Avatar with Secondary Color Border */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#4ecdc4] shadow-lg overflow-hidden">
                  <Image 
                    src={userData.image || "https://via.placeholder.com/150"} 
                    alt="Profile" 
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Online Status / Verification Indicator */}
                <div className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 border-[#f7fff7] ${
                  userData.emailVerified 
                  ? "bg-green-500" 
                  : "bg-yellow-400"
                }`} title={userData.emailVerified ? "Verified" : "Unverified"}></div>
              </div>

              <div className="mt-6 text-center">
                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold border ${
                  userData.emailVerified 
                  ? "bg-green-50 text-green-700 border-green-200" 
                  : "bg-yellow-50 text-yellow-700 border-yellow-200"
                }`}>
                  {userData.emailVerified ? "Verified User" : "Pending Verification"}
                </span>
              </div>
            </div>

            {/* Right Side: Details Section */}
            <div className="w-full md:w-2/3 p-8 md:p-12 space-y-6">
              
              {/* Name */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#1a535c] mb-2">
                  {userData.name || "Unknown User"}
                </h2>
                <p className="text-[#1a535c]/50 text-sm font-mono uppercase tracking-wider">
                  USER ID: {userData.id.substring(0, 8)}...
                </p>
              </div>

              <div className="h-px bg-[#1a535c]/10 w-full"></div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Email Field */}
                <div>
                  <label className="block text-xs font-bold text-[#4ecdc4] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <p className="text-[#1a535c] font-medium bg-[#f7fff7]/50 px-4 py-2 rounded-lg border border-[#1a535c]/10">
                    {userData.email}
                  </p>
                </div>

                {/* Join Date Field */}
                <div>
                  <label className="block text-xs font-bold text-[#4ecdc4] uppercase tracking-wider mb-1">
                    Member Since
                  </label>
                  <p className="text-[#1a535c] font-medium bg-[#f7fff7]/50 px-4 py-2 rounded-lg border border-[#1a535c]/10">
                    {joinDate}
                  </p>
                </div>


                {/* Update Profile Button */}
                <Link
                    className="w-full flex justify-center bg-[#1a535c] hover:bg-[#e05e5e] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    href="/profile/update-profile"
                >
                    Update Profile
                </Link>
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;