"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Wallet,
  PieChart,
  Target,
  Brain,
  TrendingUp,
  Bell,
  Users,
  FileText,
  Check,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const features = [
  {
    icon: PieChart,
    title: "ניהול תקציב",
    description: "עקוב אחרי ההוצאות וההכנסות שלך בקלות ובפשטות",
  },
  {
    icon: Target,
    title: "יעדים פיננסיים",
    description: "הגדר יעדים ועקוב אחרי ההתקדמות שלך",
  },
  {
    icon: Brain,
    title: "יועץ AI",
    description: "קבל המלצות מותאמות אישית מיועץ פיננסי AI",
  },
  {
    icon: TrendingUp,
    title: "מעקב השקעות",
    description: "צפה בתיק ההשקעות שלך במקום אחד",
  },
  {
    icon: Bell,
    title: "התראות חכמות",
    description: "קבל התראות על הוצאות חריגות ופוטנציאל חיסכון",
  },
  {
    icon: Users,
    title: "משק בית משותף",
    description: "נהל את הכספים עם בן/בת הזוג או המשפחה",
  },
];

const plans = [
  {
    name: "Free",
    price: "₪0",
    description: "להתחלה",
    features: ["עד 50 טרנזקציות/חודש", "תקציב בסיסי", "דוחות חודשיים"],
  },
  {
    name: "Premium",
    price: "₪29",
    description: "לניהול מתקדם",
    features: [
      "טרנזקציות ללא הגבלה",
      "יועץ AI",
      "יעדים פיננסיים",
      "מעקב השקעות",
      "ייצוא לאקסל",
    ],
    popular: true,
  },
  {
    name: "Family",
    price: "₪49",
    description: "למשפחות",
    features: [
      "כל תכונות Premium",
      "עד 5 משתמשים",
      "תקציבים משותפים",
      "התראות משפחתיות",
    ],
  },
];

export default function FinancePage() {
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
              <Badge className="mb-6" variant="custom" color="#10b981">
                <Wallet className="w-4 h-4" />
                ניהול פיננסי חכם
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            >
              <span className="text-white">שליטה מלאה על</span>
              <br />
              <span className="text-emerald-400">הכסף שלך</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
            >
              מערכת ניהול פיננסי מתקדמת עם יועץ AI שעוזר לך לחסוך יותר, להשקיע
              נכון ולהשיג את היעדים הפיננסיים שלך.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                style={{ backgroundColor: "#10b981" }}
                leftIcon={<Wallet className="w-5 h-5" />}
                rightIcon={<ArrowLeft className="w-5 h-5" />}
              >
                התחל בחינם
              </Button>
              <Button size="lg" variant="secondary">
                צפה בהדגמה
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              כל מה שצריך ל<span className="text-emerald-400">ניהול פיננסי</span>
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
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
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
              תוכניות <span className="text-emerald-400">ומחירים</span>
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
                  accentColor={plan.popular ? "#10b981" : undefined}
                  className="h-full"
                >
                  <div className="p-6">
                    {plan.popular && (
                      <Badge
                        variant="custom"
                        color="#10b981"
                        className="mb-4"
                      >
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
                      <span className="text-4xl font-black text-emerald-400">
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
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.popular ? "primary" : "secondary"}
                      style={
                        plan.popular
                          ? { backgroundColor: "#10b981" }
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
    </div>
  );
}
