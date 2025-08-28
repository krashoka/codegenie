import Link from "next/link";

export default function ToolCard({
  title,
  description,
  navigationLink,
}: {
  title: string;
  description: string;
  navigationLink: string;
}) {
  return (
    <div className="bg-[#1e2a3a] border border-[#3f434c] rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 flex flex-col h-full">
      <h3 className="text-lg font-semibold text-[#fbfaf9]">{title}</h3>
      <p className="text-sm text-[#8a9fab] mt-2 mb-4">{description}</p>

      <Link
        href={navigationLink}
        className="mt-auto inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-[#fbfaf9] font-medium text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-center"
      >
        🚀 Open Tool →
      </Link>
    </div>
  );
}
