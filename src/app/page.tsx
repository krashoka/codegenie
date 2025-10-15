import Header from "@/components/Header";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto pt-8 pb-8 px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white-900 mb-4">
            Welcome to <span className="text-blue-600">CodeGenie</span>
          </h1>
          <p className="text-gray-600 text-lg">
            A collection of free, powerful, and easy-to-use developer tools — all in one place.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ToolCard title="JSON Formatter" description="Format and beautify JSON data instantly." navigationLink="/tools/json-formatter"/>
          <ToolCard title="Universal Unit Converter" description="Convert between PX, REM, EM, %, VW, and VH instantly with real-time updates." navigationLink="/tools/universal-unit-converter"/>
          <ToolCard title="Base64 Encoder/Decoder" description="Encode or decode Base64 strings easily." navigationLink="/tools/base64-encoder-decoder"/>
          <ToolCard title="Lorem Ipsum Generator" description="Quickly generate placeholder text." navigationLink="/tools/lorem-ipsum-generator"/>
          <ToolCard title="Timestamp Converter" description="Convert between UNIX timestamps and human-readable date formats." navigationLink="/tools/timestamp-converter"/>
          <ToolCard title="UUID Generator" description="Generate unique UUIDs for any purpose." navigationLink="/tools/uuid-generator"/>
          <ToolCard title="Case Converter" description="Convert text to uppercase, lowercase, and more." navigationLink="/tools/case-converter"/>
        </section>
      </main>
    </div>
  );
}