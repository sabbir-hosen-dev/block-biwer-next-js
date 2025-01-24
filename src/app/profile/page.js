import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'; // or any other authentication library
import { redirect } from 'next/navigation';

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Check if the user is authenticated
  if (!user || !user.email) {
    redirect('/api/auth/login'); // Redirect to login if user is not authenticated
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-2xl text-gray-800 font-semibold">
          Welcome to your profile!
        </h1>
        {/* Render profile info */}
        <p className="mt-4">{user?.email}</p>
      </div>
    </div>
  );
};

// This will run server-side
export async function getServerSideProps(context) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Redirect if user is not logged in
  if (!user || !user.email) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}

export default Profile;
