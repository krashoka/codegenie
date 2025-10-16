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

      {/* <Link
        href={navigationLink}
        className="mt-auto inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-[#fbfaf9] font-medium text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-center"
      >
        🚀 
      </Link> */}
      <Link
        href={navigationLink}
        className="mt-auto animated-button relative inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold overflow-hidden text-center"
      >
        <svg
          viewBox="0 0 24 24"
          className="arr-2 absolute left-[-25%] w-6 h-6 z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>

        <span className="text relative z-20">Open Tool</span>

        <span className="circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></span>

        <svg
          viewBox="0 0 24 24"
          className="arr-1 absolute right-4 w-6 h-6 z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </Link>
    </div>
  );
}
