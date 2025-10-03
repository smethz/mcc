import { CalendarClock, Headphones, Users } from "lucide-react";
import { motion } from "motion/react";
import { NumberTicker } from "./ui/Numberticker";

type StatProps = {
  label: string;
  value: number | string;
  suffix?: string;
  icon?: React.ReactNode;
};

function Stat({ label, value, suffix = "", icon }: StatProps) {
  const isNumber = typeof value === "number";
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-lg sm:rounded-xl bg-white/5 border border-white/10 p-4 text-center"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        {icon && <span className="w-5 h-5 sm:w-6 sm:h-6">{icon}</span>}
        <div className="text-sm sm:text-base leading-tight">{label}</div>
      </div>

      {isNumber ? (
        <div className="mt-2 flex items-center justify-center font-semibold">
          <NumberTicker
            value={value as number}
            className="text-2xl sm:text-4xl text-white"
          />
          {suffix && <span className="ml-1 text-white">{suffix}</span>}
        </div>
      ) : (
        <div className="mt-2 text-2xl sm:text-4xl font-semibold text-white">
          {value}
        </div>
      )}
    </motion.div>
  );
}

export default function StatsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className="
        mt-6 sm:mt-8
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-3 sm:gap-4 md:gap-6
        max-w-4xl mx-auto px-4
      "
    >
      <Stat label="Active Members" value={6000} suffix="+" icon={<Users />} />
      <Stat
        label="Daily Call Windows"
        value={200}
        suffix="+"
        icon={<CalendarClock />}
      />
      <Stat label="Support" value="24/7" icon={<Headphones />} />
    </motion.div>
  );
}
