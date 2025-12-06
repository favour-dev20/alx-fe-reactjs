import HomePage from "./components/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / Test header (keeps Task 0 verification intact) */}
      <header className="flex items-center justify-center py-12 bg-white border-b">
        <h1 className="text-3xl font-bold text-blue-600">
          Recipe Sharing Platform — Tailwind OK ✅
        </h1>
      </header>

      {/* Main content: home page with recipe grid (Task 1) */}
      <main className="py-8">
        <HomePage />
      </main>
    </div>
  );
}