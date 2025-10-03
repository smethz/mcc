import { SOCIAL_LINKS } from "../content";
import DiscordIcon from "./icons/Discord";
import InstagramIcon from "./icons/Instagram";
import TelegramIcon from "./icons/Telegram";
import TiktokIcon from "./icons/Tiktok";
import TwitterIcon from "./icons/Twitter";

export default function Footer() {
  return (
    <footer className="px-4 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
        {/* Logo / Title */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src="/favicon-96x96.png" alt="Logo" className="w-8 h-8" />
          <span className="font-semibold">MemeCoinCalls</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href={SOCIAL_LINKS.DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Discord"
          >
            <DiscordIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.TIKTOK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <TiktokIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Telegram"
          >
            <TelegramIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="X (Twitter)"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Footer Text */}
        <p>
          Built for focus. © {new Date().getFullYear()} MemeCoinCalls • NFA •
          DYOR
        </p>
      </div>
    </footer>
  );
}
