import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`} className="text-blue-600">{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
