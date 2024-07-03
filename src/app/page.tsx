

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello, World!</h1>
      <p className="text-gray-600">This is a simple paragraph with gray text color.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
    </main>
  );
}
