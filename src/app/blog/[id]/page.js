import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export default async function BlogDetails({ params }) {
  const { isAuthenticated } = getKindeServerSession();
  const isLodding = isAuthenticated();
  const post = await getPost(params.id);

  if (!post) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">
          {post.title}
        </h1>
        <p className="mt-4 text-gray-600">{post.body}</p>

        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
