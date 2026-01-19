"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  Bot,
  BarChart3,
  Brain,
  Shield,
  Clock,
  Zap,
  BookOpen,
  Target,
  Check,
  Star,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const products = [
  {
    name: "YTRADING",
    description: "פלטפורמת ניתוח מסחר Full-Stack עם דשבורדים מתקדמים",
    icon: BarChart3,
    color: "#00d4ff",
  },
  {
    name: "Y-PUMP",
    description: "המלצות קריפטו בזמן אמת עם מודלי Machine Learning",
    icon: TrendingUp,
    color: "#a0df50",
  },
  {
    name: "Y-Trading Bot",
    description: "בוט מסחר אוטומטי עם 7 מודלי ML מתקדמים",
    icon: Bot,
    color: "#a855f7",
  },
  {
    name: "Trading Journal",
    description: "יומן מסחר מקצועי לניתוח ושיפור ביצועים",
    icon: BookOpen,
    color: "#f97316",
  },
];

const features = [
  {
    icon: Brain,
    title: "7 מודלי ML",
    description: "אלגוריתמים מתקדמים לזיהוי הזדמנויות מסחר",
  },
  {
    icon: BarChart3,
    title: "100+ אינדיקטורים",
    description: "כל האינדיקטורים הטכניים שאתה צריך",
  },
  {
    icon: Zap,
    title: "עיבוד בזמן אמת",
    description: "נתונים וסיגנלים בזמן אמת מכל הבורסות",
  },
  {
    icon: Target,
    title: "Backtesting",
    description: "בדוק אסטרטגיות על נתונים היסטוריים",
  },
  {
    icon: Shield,
    title: "ניהול סיכונים",
    description: "כלים מתקדמים לניהול סיכונים וכסף",
  },
  {
    icon: Clock,
    title: "מסחר 24/7",
    description: "הבוטים עובדים גם כשאתה ישן",
  },
];

const plans = [
  {
    name: "Free",
    price: "₪0",
    period: "לחודש",
    description: "להתחלה",
    features: [
      "ניתוח בסיסי",
      "יומן מסחר",
      "5 סיגנלים ביום",
      "תמיכה בפורום",
    ],
    cta: "התחל בחינם",
    popular: false,
  },
  {
    name: "Pro",
    price: "₪49",
    period: "לחודש",
    description: "לסוחרים רציניים",
    features: [
      "כל תכונות Free",
      "סיגנלים ללא הגבלה",
      "7 מודלי ML",
      "אנליטיקה מתקדמת",
      "תמיכה בצ'אט",
      "Backtesting",
    ],
    cta: "התחל ב-Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₪199",
    period: "לחודש",
    description: "לקרנות ומוסדות",
    features: [
      "כל תכונות Pro",
      "API גישה",
      "מודלים מותאמים אישית",
      "תמיכה VIP",
      "שרת ייעודי",
      "הדרכה אישית",
    ],
    cta: "צור קשר",
    popular: false,
  },
];

export default function TradingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge variant="new" className="mb-6">
                <TrendingUp className="w-4 h-4" />
                חדש! פלטפורמת מסחר מתקדמת
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            >
              <span className="text-white">מסחר חכם עם</span>
              <br />
              <span className="text-accent-blue">בינה מלאכותית</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
            >
              פלטפורמת מסחר ישראלית מתקדמת עם בוטים אוטומטיים, 7 מודלי ML,
              יומן מסחר ועוד. הכל במקום אחד.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                style={{ backgroundColor: "#00d4ff" }}
                leftIcon={<TrendingUp className="w-5 h-5" />}
                rightIcon={<ArrowLeft className="w-5 h-5" />}
              >
                התחל לסחור
              </Button>
              <Button size="lg" variant="secondary">
                צפה בהדגמה
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
            >
              {[
                { value: "7", label: "מודלי ML" },
                { value: "100+", label: "אינדיקטורים" },
                { value: "1.6K", label: "קבצי Python" },
                { value: "24/7", label: "מסחר" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-accent-blue">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              המוצרים <span className="text-accent-blue">שלנו</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              סט כלים מלא לסוחרים מתחילים ומתקדמים
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="hover" className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${product.color}20` }}
                    >
                      <product.icon
                        className="w-7 h-7"
                        style={{ color: product.color }}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: product.color }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-white/60">{product.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              תכונות <span className="text-accent-blue">מתקדמות</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              תוכניות <span className="text-accent-blue">ומחירים</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant={plan.popular ? "featured" : "default"}
                  accentColor={plan.popular ? "#00d4ff" : undefined}
                  className={`h-full relative ${plan.popular ? "scale-105" : ""}`}
                >
                  <div className="p-6">
                    {plan.popular && (
                      <Badge
                        variant="new"
                        className="absolute top-4 left-4"
                      >
                        הכי פופולרי
                      </Badge>
                    )}

                    <h3 className="text-xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-4xl font-black text-accent-blue">
                        {plan.price}
                      </span>
                      <span className="text-white/50 mr-1">{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <Check className="w-4 h-4 text-accent-blue flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.popular ? "primary" : "secondary"}
                      style={
                        plan.popular
                          ? { backgroundColor: "#00d4ff" }
                          : undefined
                      }
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            מוכנים <span className="text-accent-blue">לסחור</span>?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            הצטרפו לסוחרים שכבר משתמשים בפלטפורמה שלנו ומשפרים את התוצאות
          </p>
          <Button
            size="lg"
            style={{ backgroundColor: "#00d4ff" }}
            rightIcon={<ArrowLeft className="w-5 h-5" />}
          >
            התחל בחינם
          </Button>
        </div>
      </section>
    </div>
  );
}
