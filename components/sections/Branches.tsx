"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Camera, TrendingUp, Wallet, Users, Zap, Calendar, BarChart3, Star, ExternalLink } from "lucide-react";
import { Card, Button, Badge } from "@/components/ui";
import { getBranchRepo } from "@/lib/branches-repos";

const featuredBranches = [
  {
    id: "faceymatch",
    name: "FaceyMatch",
    subtitle: "תמונות AI",
    description: "מצא את כל התמונות שלך מאירועים תוך 2 דקות! העלה תמונה אחת ו-AI ימצא את כולן.",
    icon: "📸",
    color: "#a0df50",
    href: "/faceymatch",
    stats: [
      { value: "95%+", label: "דיוק" },
      { value: "2 דק'", label: "עיבוד" },
      { value: "₪97", label: "לאירוע" },
    ],
    badge: "פופולרי",
  },
  {
    id: "trading",
    name: "Y-Trading",
    subtitle: "מסחר אוטומטי",
    description: "פלטפורמת מסחר מתקדמת עם AI, בוטים אוטומטיים, אסטרטגיות ויומן מסחר מקצועי.",
    icon: "📈",
    color: "#00d4ff",
    href: "/trading",
    stats: [
      { value: "7", label: "מודלי ML" },
      { value: "100+", label: "אינדיקטורים" },
      { value: "₪49", label: "לחודש" },
    ],
    badge: "חדש",
    badgeVariant: "new" as const,
  },
];

const branches = [
  {
    id: "finance",
    name: "פיננסים",
    description: "ניהול תקציבים, השקעות ויעדים פיננסיים עם יועץ AI",
    icon: Wallet,
    href: "/finance",
  },
  {
    id: "leads",
    name: "לידים",
    description: "ניהול לידים, הצעות מחיר ומעקב לקוחות",
    icon: Users,
    href: "/leads",
  },
  {
    id: "productivity",
    name: "פרודוקטיביות",
    description: "ניהול פרויקטים, משימות ומעקב זמן",
    icon: Zap,
    href: "/productivity",
  },
  {
    id: "meetings",
    name: "ישיבות",
    description: "ניהול ישיבות, הקלטות ותמלול AI",
    icon: Calendar,
    href: "/meetings",
  },
  {
    id: "insights",
    name: "תובנות",
    description: "אנליטיקה מתקדמת והמלצות AI",
    icon: BarChart3,
    href: "/insights",
  },
  {
    id: "judaism",
    name: "יהדות",
    description: "כלים ותוכן יהודי, לוח זמנים",
    icon: Star,
    href: "/judaism",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Branches() {
  return (
    <section id="branches" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            השלוחות של <span className="text-brand-lime">קהילת וואי</span>
          </h2>
          <p className="section-subtitle">
            כל הכלים שאתה צריך להצליח - במקום אחד
          </p>
        </motion.div>

        {/* Featured Branches */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {featuredBranches.map((branch) => (
            <motion.div key={branch.id} variants={itemVariants}>
              <Card
                variant="featured"
                accentColor={branch.color}
                className="h-full group"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{branch.icon}</span>
                      <div>
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: branch.color }}
                        >
                          {branch.name}
                        </h3>
                        <p className="text-white/60">{branch.subtitle}</p>
                      </div>
                    </div>
                    {branch.badge && (
                      <Badge variant={branch.badgeVariant || "default"}>
                        {branch.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {branch.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-8 mb-8">
                    {branch.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div
                          className="text-2xl font-bold"
                          style={{ color: branch.color }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {(() => {
                    const branchRepo = getBranchRepo(branch.id);
                    const linkHref = branchRepo?.appUrl || branch.href;
                    const isExternal = branchRepo?.appUrl ? true : false;
                    
                    return (
                      <a
                        href={linkHref}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        <Button
                          className="group-hover:shadow-lg transition-shadow"
                          style={{
                            backgroundColor: branch.color,
                            color: branch.id === "trading" ? "#013024" : "#013024",
                          }}
                          rightIcon={
                            isExternal ? (
                              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            ) : (
                              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            )
                          }
                        >
                          {branch.id === "faceymatch" ? "התחל עכשיו" : "התחל לסחור"}
                        </Button>
                      </a>
                    );
                  })()}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Regular Branches Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {branches.map((branch) => {
            const branchRepo = getBranchRepo(branch.id);
            const linkHref = branchRepo?.appUrl || branch.href;
            const isExternal = branchRepo?.appUrl ? true : false;
            
            return (
              <motion.div key={branch.id} variants={itemVariants}>
                <a
                  href={linkHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  <Card variant="hover" className="h-full p-6 text-center group">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-lime/10 flex items-center justify-center group-hover:bg-brand-lime/20 transition-colors">
                      <branch.icon className="w-7 h-7 text-brand-lime" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-sm text-white/60 mb-4">
                      {branch.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-brand-lime text-sm font-medium group-hover:gap-2 transition-all">
                      גש לשלוחה
                      {isExternal ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <ArrowLeft className="w-4 h-4" />
                      )}
                    </span>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
