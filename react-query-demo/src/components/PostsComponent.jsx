// src/components/PostsComponent.jsx
import { useQuery } from "react-query";

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(res =>
    res.json()
  );
}

export default function PostsComponent() {
  const { data, isLoading, error, refetch } = useQuery("posts", fetchPosts);

  if (isLoading)
    return (
      <p className="text-center text-lg mt-8 text-gray-600">Loading posts...</p>
    );

  if (error)
    return (
      <p className="text-center text-lg mt-8 text-red-500">
        Oops! Something went wrong while fetching posts.
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>

      {/* Refetch Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Refetch Posts
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(post => (
          <div
            key={post.id}
            className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}