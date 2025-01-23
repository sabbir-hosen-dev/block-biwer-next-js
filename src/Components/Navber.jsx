"use client";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const response = await fetch("/api/auth/route");
      setIsAuthenticated(response.ok);
    }
    checkAuth();
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div>
        {isAuthenticated ? <LogoutLink>Logout</LogoutLink> : <LoginLink>Login</LoginLink>}
      </div>
    </nav>
  );
}
