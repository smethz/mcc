import { motion } from "motion/react";
import { SOCIAL_LINKS } from "../content";
import DiscordIcon from "./icons/Discord";
import InstagramIcon from "./icons/Instagram";
import TelegramIcon from "./icons/Telegram";
import TiktokIcon from "./icons/Tiktok";
import TwitterIcon from "./icons/Twitter";

const platforms = [
  { name: "Discord", Icon: DiscordIcon, href: SOCIAL_LINKS.DISCORD },
  { name: "TikTok", Icon: TiktokIcon, href: SOCIAL_LINKS.TIKTOK },
  { name: "Instagram", Icon: InstagramIcon, href: SOCIAL_LINKS.INSTAGRAM },
  { name: "X", Icon: TwitterIcon, href: SOCIAL_LINKS.TWITTER },
  { name: "Telegram", Icon: TelegramIcon, href: SOCIAL_LINKS.TELEGRAM },
];

export default function PlatformStat({ label }: { label: string }) {
  return (
    <div className="text-center">
      <div className="text-sm text-gray-400 mb-3">{label}</div>
      <div className="flex justify-center flex-wrap gap-3">
        {platforms.map(({ name, Icon, href }, index) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            aria-label={name}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm text-white font-medium">{name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
