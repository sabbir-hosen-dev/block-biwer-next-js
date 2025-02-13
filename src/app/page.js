import Link from 'next/link';

// Fetch posts during SSR
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return <div>No posts found.</div>; // Handle empty state
  }

  return (
    <div className="wrap p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 9).map(post => (
          <div
            key={post.id}
            className="bg-white flex flex-col justify-between shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {post.title}
            </h2>

            <p className="text-gray-700 ">
              {' '}
              {post.body.length > 100
                ? post.body.slice(0, 50) + '...'
                : post.body}
            </p>

            <div className="mt-2">
              <Link
                href={`/blog/${post.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
