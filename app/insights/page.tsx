"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  PieChart,
  Brain,
  Lightbulb,
  Target,
  Activity,
  Database,
  Check,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const features = [
  {
    icon: BarChart3,
    title: "דשבורדים מתקדמים",
    description: "צפה בכל הנתונים החשובים במקום אחד",
  },
  {
    icon: Brain,
    title: "AI Analytics",
    description: "קבל תובנות חכמות מבינה מלאכותית",
  },
  {
    icon: TrendingUp,
    title: "ניתוח טרנדים",
    description: "זהה מגמות והזדמנויות לשיפור",
  },
  {
    icon: Lightbulb,
    title: "המלצות מותאמות",
    description: "קבל המלצות ספציפיות לעסק שלך",
  },
  {
    icon: Activity,
    title: "מעקב בזמן אמת",
    description: "עקוב אחרי הביצועים בזמן אמת",
  },
  {
    icon: Database,
    title: "אינטגרציות רבות",
    description: "התחבר לכל כלי העבודה שלך",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₪59",
    description: "לעסקים קטנים",
    features: [
      "דשבורד בסיסי",
      "5 מקורות נתונים",
      "דוחות שבועיים",
      "תמיכה באימייל",
    ],
  },
  {
    name: "Professional",
    price: "₪149",
    description: "לעסקים מתקדמים",
    features: [
      "דשבורדים ללא הגבלה",
      "מקורות נתונים ללא הגבלה",
      "תובנות AI",
      "דוחות מותאמים אישית",
      "API גישה",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₪499",
    description: "לארגונים גדולים",
    features: [
      "כל תכונות Professional",
      "ניהול צוות מתקדם",
      "תמיכה ייעודית",
      "הדרכות",
      "SLA מובטח",
    ],
  },
];

export default function InsightsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-6" variant="custom" color="#a855f7">
                <BarChart3 className="w-4 h-4" />
                אנליטיקה מתקדמת
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            >
              <span className="text-white">תובנות חכמות</span>
              <br />
              <span className="text-purple-400">להחלטות נכונות</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
            >
              פלטפורמת אנליטיקה מתקדמת עם AI שהופכת נתונים למידע פעיל ועוזרת לך
              לקבל החלטות מושכלות יותר.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                style={{ backgroundColor: "#a855f7" }}
                leftIcon={<Brain className="w-5 h-5" />}
                rightIcon={<ArrowLeft className="w-5 h-5" />}
              >
                התחל ניסיון חינם
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
              className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto"
            >
              {[
                { value: "50+", label: "אינטגרציות" },
                { value: "24/7", label: "מעקב" },
                { value: "1M+", label: "נקודות נתונים" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              תכונות <span className="text-purple-400">מתקדמות</span>
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
              >
                <Card variant="hover" className="h-full p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              תוכניות <span className="text-purple-400">ומחירים</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                  accentColor={plan.popular ? "#a855f7" : undefined}
                  className="h-full"
                >
                  <div className="p-6">
                    {plan.popular && (
                      <Badge variant="custom" color="#a855f7" className="mb-4">
                        מומלץ
                      </Badge>
                    )}

                    <h3 className="text-xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-4xl font-black text-purple-400">
                        {plan.price}
                      </span>
                      <span className="text-white/50 mr-1">/חודש</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.popular ? "primary" : "secondary"}
                      style={
                        plan.popular
                          ? { backgroundColor: "#a855f7" }
                          : undefined
                      }
                    >
                      התחל עכשיו
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-black/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            מוכנים <span className="text-purple-400">להתחיל</span>?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            קבלו תובנות שישנו את העסק שלכם
          </p>
          <Button
            size="lg"
            style={{ backgroundColor: "#a855f7" }}
            rightIcon={<ArrowLeft className="w-5 h-5" />}
          >
            התחל ניסיון חינם
          </Button>
        </div>
      </section>
    </div>
  );
}
