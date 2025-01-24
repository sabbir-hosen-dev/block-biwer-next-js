import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email) {
    redirect('/api/auth/login');
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-2xl text-gray-800 font-semibold">
          Welcome to your profile!
        </h1>
        <div className="flex justify-center items-center overflow-hidden rounded-full mt-4">
          {user?.picture ? (
            <img
              className="w-40 h-40 rounded-full"
              src={user?.picture}
              alt={`${user?.given_name}'s profile`}
            />
          ) : (
            <div className="w-40 h-40 flex items-center justify-center bg-gray-200 text-gray-500 rounded-full">
              No Image
            </div>
          )}
        </div>
        <div className="mt-4">
          <h4 className="text-lg text-gray-900 font-medium">
            {user?.family_name || 'No Name'}
          </h4>
          <p className="text-gray-800">{user?.email}</p>
        </div>
        <div
          className="flex justify-between gap-4  
        ">
          <div className=""></div>
          <Link
            className="px-3 py-2 rounded-md text-gray-900 bg-red-200 hover:bg-red-500"
            href="/api/auth/logout">
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
