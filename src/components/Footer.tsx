export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-600 dark:text-gray-400 flex flex-col items-center gap-1">
      <p>© {new Date().getFullYear()} CodingGenie — Free Developer Tools.</p>
      <p className="flex items-center gap-2 mt-2">
        Version{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          1.0
        </span>{" "}
        • Listed on{" "}
        <a
          href="https://www.toolpilot.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <img
            src="/toolpilot-badge.png"
            alt="ToolPilot.ai"
            className="h-5 w-auto inline-block mr-1"
          />
        </a>
      </p>
    </footer>
  );
}
