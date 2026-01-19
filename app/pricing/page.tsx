"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowLeft, Sparkles } from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const products = [
  {
    id: "faceymatch",
    name: "FaceyMatch",
    description: "זיהוי פנים AI לתמונות מאירועים",
    icon: "📸",
    color: "#a0df50",
    pricing: {
      type: "one-time",
      price: "₪97",
      unit: "לאירוע",
    },
    features: [
      "זיהוי פנים AI מתקדם",
      "עד 10,000 תמונות",
      "הורדה כ-ZIP",
      "שיתוף WhatsApp",
      "תמיכה בעברית",
    ],
    href: "/faceymatch",
  },
  {
    id: "trading",
    name: "Y-Trading",
    description: "פלטפורמת מסחר עם AI",
    icon: "📈",
    color: "#00d4ff",
    pricing: {
      type: "subscription",
      plans: [
        { name: "Free", price: "₪0" },
        { name: "Pro", price: "₪49", popular: true },
        { name: "Enterprise", price: "₪199" },
      ],
      unit: "לחודש",
    },
    features: [
      "7 מודלי ML",
      "100+ אינדיקטורים",
      "יומן מסחר",
      "סיגנלים בזמן אמת",
      "Backtesting",
    ],
    href: "/trading",
  },
  {
    id: "finance",
    name: "פיננסים",
    description: "ניהול פיננסי עם יועץ AI",
    icon: "💰",
    color: "#10b981",
    pricing: {
      type: "subscription",
      plans: [
        { name: "Free", price: "₪0" },
        { name: "Premium", price: "₪29", popular: true },
        { name: "Family", price: "₪49" },
      ],
      unit: "לחודש",
    },
    features: [
      "ניהול תקציב",
      "יעדים פיננסיים",
      "יועץ AI",
      "דוחות מפורטים",
      "משק בית משותף",
    ],
    href: "/finance",
  },
  {
    id: "leads",
    name: "לידים",
    description: "CRM וניהול לידים",
    icon: "👥",
    color: "#ec4899",
    pricing: {
      type: "subscription",
      plans: [
        { name: "Free", price: "₪0" },
        { name: "Pro", price: "₪79", popular: true },
        { name: "Team", price: "₪149" },
      ],
      unit: "לחודש",
    },
    features: [
      "ניהול לידים",
      "הצעות מחיר",
      "Pipeline",
      "אוטומציות",
      "דוחות מכירות",
    ],
    href: "/leads",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-6">
                <Sparkles className="w-4 h-4" />
                תמחור שקוף ופשוט
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              <span className="text-white">תוכניות</span>{" "}
              <span className="text-brand-lime">ומחירים</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60"
            >
              בחר את השלוחה שמתאימה לך והתחל להשתמש בכלים המתקדמים שלנו
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant="featured"
                  accentColor={product.color}
                  className="h-full"
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl">{product.icon}</span>
                      <div>
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: product.color }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-white/60">{product.description}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6 p-4 rounded-xl bg-white/5">
                      {product.pricing.type === "one-time" ? (
                        <div>
                          <span
                            className="text-4xl font-black"
                            style={{ color: product.color }}
                          >
                            {product.pricing.price}
                          </span>
                          <span className="text-white/50 mr-2">
                            {product.pricing.unit}
                          </span>
                        </div>
                      ) : (
                        <div className="flex gap-4">
                          {product.pricing.plans?.map((plan) => (
                            <div
                              key={plan.name}
                              className={`flex-1 text-center p-3 rounded-lg ${
                                plan.popular
                                  ? "bg-white/10 border border-white/20"
                                  : ""
                              }`}
                            >
                              <div className="text-sm text-white/50 mb-1">
                                {plan.name}
                              </div>
                              <div
                                className="text-xl font-bold"
                                style={{
                                  color: plan.popular ? product.color : "white",
                                }}
                              >
                                {plan.price}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-white/70"
                        >
                          <Check
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: product.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link href={product.href}>
                      <Button
                        className="w-full"
                        style={{ backgroundColor: product.color }}
                        rightIcon={<ArrowLeft className="w-4 h-4" />}
                      >
                        למידע נוסף
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            יש לך שאלות?
          </h2>
          <p className="text-white/60 mb-8">
            צור קשר ונשמח לעזור לך לבחור את התוכנית המתאימה
          </p>
          <Link href="/contact">
            <Button variant="secondary">
              צור קשר
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
