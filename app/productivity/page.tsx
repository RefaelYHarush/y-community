"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Zap,
  CheckSquare,
  Calendar,
  Clock,
  Target,
  BarChart,
  Users,
  Bell,
  Check,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const features = [
  {
    icon: CheckSquare,
    title: "ניהול משימות",
    description: "עקוב אחרי כל המשימות שלך במקום אחד",
  },
  {
    icon: Calendar,
    title: "לוח שנה חכם",
    description: "תכנן את היום שלך עם לוח שנה אינטליגנטי",
  },
  {
    icon: Clock,
    title: "מעקב זמן",
    description: "עקוב אחרי הזמן שאתה משקיע בכל משימה",
  },
  {
    icon: Target,
    title: "יעדים ו-OKRs",
    description: "הגדר יעדים ועקוב אחרי ההתקדמות",
  },
  {
    icon: BarChart,
    title: "דוחות פרודוקטיביות",
    description: "צפה בנתונים על הפרודוקטיביות שלך",
  },
  {
    icon: Users,
    title: "עבודת צוות",
    description: "שתף פעולה עם הצוות בצורה יעילה",
  },
];

const plans = [
  {
    name: "Free",
    price: "₪0",
    description: "להתחלה",
    features: [
      "עד 50 משימות",
      "לוח שנה בסיסי",
      "דוחות שבועיים",
    ],
  },
  {
    name: "Pro",
    price: "₪39",
    description: "למקצוענים",
    features: [
      "משימות ללא הגבלה",
      "מעקב זמן",
      "יעדים ו-OKRs",
      "דוחות מתקדמים",
      "אינטגרציות",
    ],
    popular: true,
  },
  {
    name: "Team",
    price: "₪99",
    description: "לצוותים",
    features: [
      "כל תכונות Pro",
      "עד 10 משתמשים",
      "ניהול פרויקטים",
      "תמיכה מועדפת",
    ],
  },
];

export default function ProductivityPage() {
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
              <Badge className="mb-6" variant="custom" color="#f97316">
                <Zap className="w-4 h-4" />
                פרודוקטיביות מקסימלית
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            >
              <span className="text-white">עשה יותר</span>
              <br />
              <span className="text-orange-400">בפחות זמן</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
            >
              מערכת ניהול משימות ופרודוקטיביות חכמה שעוזרת לך להישאר ממוקד,
              לעבוד ביעילות ולהשיג את המטרות שלך.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                style={{ backgroundColor: "#f97316" }}
                leftIcon={<Zap className="w-5 h-5" />}
                rightIcon={<ArrowLeft className="w-5 h-5" />}
              >
                התחל בחינם
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
                { value: "40%", label: "עלייה בפרודוקטיביות" },
                { value: "2 שעות", label: "חיסכון ליום" },
                { value: "5K+", label: "משתמשים" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-orange-400">
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
              כל מה שצריך ל<span className="text-orange-400">פרודוקטיביות</span>
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
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-400" />
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
              תוכניות <span className="text-orange-400">ומחירים</span>
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
                  accentColor={plan.popular ? "#f97316" : undefined}
                  className="h-full"
                >
                  <div className="p-6">
                    {plan.popular && (
                      <Badge variant="custom" color="#f97316" className="mb-4">
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
                      <span className="text-4xl font-black text-orange-400">
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
                          <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.popular ? "primary" : "secondary"}
                      style={
                        plan.popular
                          ? { backgroundColor: "#f97316" }
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
            מוכנים <span className="text-orange-400">להתחיל</span>?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            הצטרפו לאלפי אנשים שכבר משפרים את הפרודוקטיביות שלהם
          </p>
          <Button
            size="lg"
            style={{ backgroundColor: "#f97316" }}
            rightIcon={<ArrowLeft className="w-5 h-5" />}
          >
            התחל בחינם
          </Button>
        </div>
      </section>
    </div>
  );
}
