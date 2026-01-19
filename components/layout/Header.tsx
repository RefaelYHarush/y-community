"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { getBranchRepoByHref } from "@/lib/branches-repos";

const navigation = [
  {
    name: "שלוחות",
    href: "#branches",
    submenu: [
      { name: "📸 FaceyMatch - תמונות AI", href: "/faceymatch", badge: "פופולרי" },
      { name: "📈 Y-Trading - מסחר", href: "/trading", badge: "חדש" },
      { name: "💰 פיננסים", href: "/finance" },
      { name: "👥 לידים", href: "/leads" },
      { name: "⚡ פרודוקטיביות", href: "/productivity" },
      { name: "📅 ישיבות", href: "/meetings" },
      { name: "📊 תובנות", href: "/insights" },
      { name: "✡️ יהדות", href: "/judaism" },
    ],
  },
  { name: "תמחור", href: "/pricing" },
  { name: "אודות", href: "/about" },
  { name: "צור קשר", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-green/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-brand-lime/30 group-hover:border-brand-lime transition-colors">
              <Image
                src="/logo.jpg"
                alt="Y Community"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-black text-brand-lime hidden sm:block">
              קהילת וואי
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-white/80 hover:text-brand-lime transition-colors font-medium rounded-lg hover:bg-white/5"
                  )}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        activeSubmenu === item.name && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-brand-green-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {item.submenu.map((subItem) => {
                          const branchRepo = getBranchRepoByHref(subItem.href);
                          const linkHref = branchRepo?.repoUrl || subItem.href;
                          const isExternal = branchRepo?.repoUrl ? true : false;
                          
                          return (
                            <a
                              key={subItem.name}
                              href={linkHref}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              className="flex items-center justify-between px-4 py-3 text-white/80 hover:text-brand-lime hover:bg-white/5 rounded-xl transition-colors"
                            >
                              <span>{subItem.name}</span>
                              <div className="flex items-center gap-2">
                                {subItem.badge && (
                                  <span className="text-xs px-2 py-0.5 bg-brand-lime/20 text-brand-lime rounded-full">
                                    {subItem.badge}
                                  </span>
                                )}
                                {isExternal && (
                                  <ExternalLink className="w-3 h-3 text-white/40" />
                                )}
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              התחברות
            </Button>
            <Button variant="primary" size="sm">
              התחל עכשיו
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-lime transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brand-green-dark/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container-custom py-6">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-white hover:text-brand-lime hover:bg-white/5 rounded-xl transition-colors"
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.submenu && <ChevronDown className="w-5 h-5" />}
                    </Link>

                    {item.submenu && (
                      <div className="mt-1 mr-4 border-r border-white/10">
                        {item.submenu.map((subItem) => {
                          const branchRepo = getBranchRepoByHref(subItem.href);
                          const linkHref = branchRepo?.repoUrl || subItem.href;
                          const isExternal = branchRepo?.repoUrl ? true : false;
                          
                          return (
                            <a
                              key={subItem.name}
                              href={linkHref}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center justify-between px-4 py-2 text-sm text-white/70 hover:text-brand-lime transition-colors"
                            >
                              <span>{subItem.name}</span>
                              <div className="flex items-center gap-2">
                                {subItem.badge && (
                                  <span className="text-xs px-2 py-0.5 bg-brand-lime/20 text-brand-lime rounded-full">
                                    {subItem.badge}
                                  </span>
                                )}
                                {isExternal && (
                                  <ExternalLink className="w-3 h-3 text-white/40" />
                                )}
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/10">
                <Button variant="secondary" className="w-full">
                  התחברות
                </Button>
                <Button variant="primary" className="w-full">
                  התחל עכשיו
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
