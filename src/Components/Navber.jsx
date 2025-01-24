import Link from 'next/link';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <nav className="bg-gray-800 text-white pt-2 ">
      <div className="wrap p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          BlogView
        </Link>

        <div className="flex gap-3">
          <Link
            href="/profile"
            className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Profile
          </Link>

          {user ? (
            <Link
              href="/api/auth/logout"
              className="bg-slate-700  px-4 py-2 rounded-md hover:bg-red-600 transition">
              Log Out
            </Link>
          ) : (
            <>
              <Link
                href="/api/auth/login"
                className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition">
                Login
              </Link>
              <Link
                href="/api/auth/register"
                className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
