import { cn } from "../lib/utils";

export default function Plan({
  name,
  price,
  features,
  gradient,
  badge,
  href,
  highlight,
  className,
}: {
  name: string;
  price: string;
  features: string[];
  gradient: string;
  badge: string;
  href: string;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 flex flex-col gap-6 transition-all",
        highlight
          ? "ring-2 ring-purple-500 border-white/20 bg-white/5"
          : "border-white/10 bg-white/5",
        className
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r",
              gradient
            )}
          >
            {badge}
          </span>
        </div>
      )}

      <div>
        <div
          className={cn(
            "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
            gradient
          )}
        ></div>
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="mt-2 text-3xl font-bold">{price}</div>
      </div>

      <ul className="space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
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
              className="lucide lucide-check mt-0.5 text-emerald-400 shrink-0"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            <span className="text-gray-300">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        className={cn(
          "mt-auto w-full text-center py-3 rounded-xl bg-gradient-to-r font-semibold hover:opacity-90",
          gradient
        )}
      >
        Join Now
      </a>
    </div>
  );
}
