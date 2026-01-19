"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
  ExternalLink,
} from "lucide-react";
import { getBranchRepoByHref } from "@/lib/branches-repos";

const footerLinks = {
  branches: {
    title: "שלוחות",
    links: [
      { name: "📸 FaceyMatch - תמונות AI", href: "/faceymatch" },
      { name: "📈 Y-Trading - מסחר", href: "/trading" },
      { name: "💰 פיננסים", href: "/finance" },
      { name: "👥 לידים", href: "/leads" },
      { name: "⚡ פרודוקטיביות", href: "/productivity" },
    ],
  },
  more: {
    title: "עוד מקהילת וואי",
    links: [
      { name: "📖 נקודת האפס - הספר", href: "/book" },
      { name: "👤 רפאל הרוש", href: "/about" },
      { name: "📝 בלוג", href: "/blog" },
      { name: "❓ שאלות נפוצות", href: "/faq" },
    ],
  },
  legal: {
    title: "מידע משפטי",
    links: [
      { name: "תנאי שימוש", href: "/terms" },
      { name: "מדיניות פרטיות", href: "/privacy" },
      { name: "הצהרת נגישות", href: "/accessibility" },
      { name: "מדיניות עוגיות", href: "/cookies" },
    ],
  },
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/ycommunity" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/ycommunity" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/ycommunity" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@ycommunity" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/30 border-t border-white/10">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-brand-lime/30">
                <Image
                  src="/logo.jpg"
                  alt="Y Community"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-2xl font-black text-brand-lime block">
                  קהילת וואי
                </span>
                <span className="text-sm text-white/50">Y Community</span>
              </div>
            </Link>

            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              הבית הדיגיטלי שלך - פלטפורמה ישראלית מתקדמת עם כלי AI חכמים 
              לתמונות, מסחר, פיננסים ועוד. הצטרף לקהילה הישראלית המובילה.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:support@y-community.com"
                className="flex items-center gap-3 text-white/60 hover:text-brand-lime transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>support@y-community.com</span>
              </a>
              <a
                href="tel:+972528540475"
                className="flex items-center gap-3 text-white/60 hover:text-brand-lime transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">052-854-0475</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-5 h-5" />
                <span>ישראל 🇮🇱</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 text-white/60 hover:bg-brand-lime/10 hover:text-brand-lime transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-bold text-brand-lime mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => {
                  const branchRepo = getBranchRepoByHref(link.href);
                  const linkHref = branchRepo?.repoUrl || link.href;
                  const isExternal = branchRepo?.repoUrl ? true : false;
                  
                  return (
                    <li key={link.name}>
                      <a
                        href={linkHref}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="text-white/60 hover:text-brand-lime transition-colors flex items-center gap-1"
                      >
                        {link.name}
                        {isExternal && (
                          <ExternalLink className="w-3 h-3 text-white/40" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-right">
              © {currentYear} קהילת וואי | Y Community. כל הזכויות שמורות.
            </p>
            <p className="text-white/50 text-sm flex items-center gap-1">
              נבנה עם <Heart className="w-4 h-4 text-red-500 fill-red-500" /> בישראל
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
