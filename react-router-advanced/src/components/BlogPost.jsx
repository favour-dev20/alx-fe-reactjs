import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Blog Post ID: {id}</h1>
      <p>Content for blog post {id} goes here.</p>
    </div>
  );
}