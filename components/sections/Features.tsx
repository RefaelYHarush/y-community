"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Zap,
  Globe,
  HeartHandshake,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI מתקדם",
    description: "כל הכלים שלנו מופעלים על ידי בינה מלאכותית מתקדמת לתוצאות מדויקות ומהירות",
    color: "#a0df50",
  },
  {
    icon: Shield,
    title: "אבטחה מקסימלית",
    description: "הנתונים שלך מוגנים בהצפנה מתקדמת ועומדים בתקני האבטחה הגבוהים ביותר",
    color: "#00d4ff",
  },
  {
    icon: Zap,
    title: "מהירות מטורפת",
    description: "תשתית מותאמת לביצועים גבוהים שמבטיחה חוויה חלקה ומהירה",
    color: "#f97316",
  },
  {
    icon: Globe,
    title: "100% ישראלי",
    description: "פותח בישראל, עבור ישראלים, עם תמיכה מלאה בעברית ובשוק המקומי",
    color: "#a855f7",
  },
  {
    icon: HeartHandshake,
    title: "תמיכה אנושית",
    description: "צוות תמיכה ישראלי זמין לעזור לך בכל שאלה או בעיה",
    color: "#ec4899",
  },
  {
    icon: Rocket,
    title: "חדשנות מתמדת",
    description: "אנחנו מתעדכנים בטכנולוגיות החדשות ביותר ומשפרים את המוצרים שלנו באופן שוטף",
    color: "#ffd700",
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

export function Features() {
  return (
    <section className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            למה <span className="text-brand-lime">קהילת וואי</span>?
          </h2>
          <p className="section-subtitle">
            אנחנו שמים את הלקוחות שלנו במרכז ומספקים חוויה מושלמת
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: feature.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
