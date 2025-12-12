// src/App.jsx
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <header className="flex items-center justify-center py-6 bg-white border-b">
          <h1 className="text-3xl font-bold text-blue-600">React Query Demo</h1>
        </header>

        <main className="py-8">
          <PostsComponent />
        </main>
      </div>
    </QueryClientProvider>
  );
}