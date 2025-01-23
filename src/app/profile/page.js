import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getKindeServerSession();
  if (!session.user) return redirect("/api/auth/login");

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
    </div>
  );
}
