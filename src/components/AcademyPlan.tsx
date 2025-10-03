export default function AcademyPlan({
  name,
  price,
  description,
  features,
  gradient,
  href,
  className = "",
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  gradient: string;
  href: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-6 hover:border-white/20 transition-colors ${className}`}
    >
      <div>
        <div
          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} mb-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
        <div className="mt-3 text-2xl font-bold">{price}</div>
      </div>

      <ul className="space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 text-emerald-400 flex-shrink-0"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className="text-gray-300">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        className={`mt-auto w-full text-center py-3 rounded-xl bg-gradient-to-r ${gradient} font-semibold hover:opacity-90 transition-opacity`}
      >
        Join Academy
      </a>
    </div>
  );
}
