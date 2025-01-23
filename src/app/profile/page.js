import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function Profile() {
  const session = await getKindeServerSession();
  const user = session?.user;

  if (!user) {
    return redirect("/api/auth/login"); // Redirect if no user session
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <Image
          src={user.picture || "/default-avatar.png"}
          alt="Profile Picture"
          width={96}
          height={96}
          className="w-24 h-24 mx-auto rounded-full border border-gray-300"
        />
        <h2 className="text-2xl font-semibold mt-4">{user.given_name || "User"}</h2>
        <p className="text-gray-600">{user.email}</p>

        <Link href="/api/auth/logout" className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
          Logout
        </Link>
      </div>
    </div>
  );
}
