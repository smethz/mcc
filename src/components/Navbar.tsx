import { InstagramIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import { SOCIAL_LINKS } from "../content";
import DiscordIcon from "./icons/Discord";
import TelegramIcon from "./icons/Telegram";
import TiktokIcon from "./icons/Tiktok";
import TwitterIcon from "./icons/Twitter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
      <nav className="relative max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <button
          onClick={(e) => handleSmoothScroll(e, "top")}
          className="flex items-center gap-2"
        >
          <img src="/favicon-96x96.png" alt="Logo" className="w-8 h-8" />
          <span className="font-semibold">MemeCoinCalls</span>
        </button>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-base font-medium">
          <button
            onClick={(e) => handleSmoothScroll(e, "top")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            Home
          </button>
          <button
            onClick={(e) => handleSmoothScroll(e, "pricing")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            Pricing
          </button>
          <button
            onClick={(e) => handleSmoothScroll(e, "academy")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            Academy
          </button>
          <button
            onClick={(e) => handleSmoothScroll(e, "apply")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            Influencer?
          </button>
          <button
            onClick={(e) => handleSmoothScroll(e, "faq")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            FAQ
          </button>
        </div>

        {/* Right: Socials + Join */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.DISCORD}
              aria-label="Discord"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <DiscordIcon className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a
              href={SOCIAL_LINKS.TIKTOK}
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <TiktokIcon className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a
              href={SOCIAL_LINKS.INSTAGRAM}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <InstagramIcon className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a
              href={SOCIAL_LINKS.TWITTER}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <TwitterIcon className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a
              href={SOCIAL_LINKS.TELEGRAM}
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <TelegramIcon className="w-5 h-5 hover:text-white transition-colors" />
            </a>
          </div>
          <a
            href="https://forms.gle/6aHjGvVS1gcCwTun8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 rounded-md bg-white text-slate-900 font-semibold"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-3">
            <button
              onClick={(e) => handleSmoothScroll(e, "top")}
              className="text-left py-2 hover:bg-white/5 px-3 rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={(e) => handleSmoothScroll(e, "pricing")}
              className="text-left py-2 hover:bg-white/5 px-3 rounded-lg transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={(e) => handleSmoothScroll(e, "academy")}
              className="text-left py-2 hover:bg-white/5 px-3 rounded-lg transition-colors"
            >
              Academy
            </button>
            <button
              onClick={(e) => handleSmoothScroll(e, "apply")}
              className="text-left py-2 hover:bg-white/5 px-3 rounded-lg transition-colors"
            >
              Influencer?
            </button>
            <button
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className="text-left py-2 hover:bg-white/5 px-3 rounded-lg transition-colors"
            >
              FAQ
            </button>
            <a
              href="https://forms.gle/6aHjGvVS1gcCwTun8"
              className="text-center py-2.5 rounded-full bg-white text-slate-900 font-medium mt-2"
            >
              Join
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
