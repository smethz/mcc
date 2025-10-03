export default function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group open:bg-white/5">
      <summary className="cursor-pointer list-none p-4 text-sm md:text-base font-semibold flex items-center justify-between">
        {q}
        <span className="ml-4 transition-transform group-open:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <div className="px-4 pb-4 text-gray-300 text-sm md:text-base">{a}</div>
    </details>
  );
}
