// src/app/tools/uuid-generator/page.tsx

import Header from "@/components/Header";

export default function UUIDGeneratorPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">UUID Generator</h1>
        <p className="text-gray-600 mb-6">
          Generate a version 4 UUID with one click.
        </p>
        {/* Tool logic will go here */}
      </main>
    </>
  );
}
