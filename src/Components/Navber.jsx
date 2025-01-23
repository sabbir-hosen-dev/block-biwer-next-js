import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Set initial state to null
  const [isClient, setIsClient] = useState(false);  // Track if it's client-side

  useEffect(() => {
    setIsClient(true); // After mounting, mark as client-side render
    async function checkAuth() {
      try {
        const response = await fetch("/api/auth/[kindeAuth]/route", { cache: "no-store" });
        setIsAuthenticated(response.ok); // Set authenticated status based on the response
      } catch (error) {
        console.error("Error checking auth:", error);
      }
    }
    checkAuth();
  }, []);

  if (!isClient) {
    return null;  // Prevent rendering on the server
  }

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        BlogView
      </Link>

      <div className="flex gap-3">
        {isAuthenticated === null ? (
          <span>Loading...</span>  // Show loading while checking auth
        ) : isAuthenticated ? (
          <Link href="/profile" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Profile
          </Link>
        ) : (
          <>
            <Link href="/api/auth/login" className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition">
              Login
            </Link>
            <Link href="/api/auth/register" className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition">
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
