"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Book,
  Calendar,
  Clock,
  Sunrise,
  Moon,
  Bell,
  MapPin,
  Check,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const features = [
  {
    icon: Calendar,
    title: "לוח עברי חכם",
    description: "זמני כניסת ויציאת שבת וחגים לכל מקום",
  },
  {
    icon: Book,
    title: "שיעורים יומיים",
    description: "משניות, תנ\"ך, והלכה יומית",
  },
  {
    icon: Sunrise,
    title: "זמני תפילה",
    description: "נץ החמה, זריחה, שקיעה ועוד",
  },
  {
    icon: Bell,
    title: "תזכורות חכמות",
    description: "קבל תזכורות לשבת, תפילות ומועדים",
  },
  {
    icon: Moon,
    title: "סידור תפילה דיגיטלי",
    description: "סידור מלא עם ניווט נוח",
  },
  {
    icon: MapPin,
    title: "מפת בתי כנסת",
    description: "מצא בתי כנסת ומוסדות יהודיים בסביבתך",
  },
];

const plans = [
  {
    name: "Free",
    price: "₪0",
    description: "לשימוש בסיסי",
    features: [
      "לוח עברי",
      "זמני שבת",
      "שיעור יומי אחד",
      "תזכורות בסיסיות",
    ],
  },
  {
    name: "Premium",
    price: "₪19",
    description: "לשימוש מלא",
    features: [
      "כל תכונות Free",
      "כל השיעורים היומיים",
      "סידור תפילה דיגיטלי",
      "ללא פרסומות",
      "תזכורות מתקדמות",
    ],
    popular: true,
  },
  {
    name: "Family",
    price: "₪29",
    description: "למשפחות",
    features: [
      "כל תכונות Premium",
      "עד 6 משתמשים",
      "תוכן משפחתי",
      "לוח משפחתי משותף",
    ],
  },
];

export default function JudaismPage() {
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
              <Badge className="mb-6" variant="custom" color="#ffd700">
                <Star className="w-4 h-4" />
                כלים ליהדות
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            >
              <span className="text-white">החיים היהודיים</span>
              <br />
              <span className="text-yellow-400">בכף ידך</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
            >
              כלים דיגיטליים לחיים יהודיים מלאים - לוח עברי, זמני שבת, שיעורים
              יומיים, סידור תפילה ועוד.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                style={{ backgroundColor: "#ffd700", color: "#013024" }}
                leftIcon={<Book className="w-5 h-5" />}
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
                { value: "365", label: "ימים בשנה" },
                { value: "100+", label: "שיעורים" },
                { value: "50+", label: "ערים" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-yellow-400">
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
              כל מה שצריך ל<span className="text-yellow-400">חיים יהודיים</span>
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
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-yellow-400" />
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
              תוכניות <span className="text-yellow-400">ומחירים</span>
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
                  accentColor={plan.popular ? "#ffd700" : undefined}
                  className="h-full"
                >
                  <div className="p-6">
                    {plan.popular && (
                      <Badge variant="custom" color="#ffd700" className="mb-4">
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
                      <span className="text-4xl font-black text-yellow-400">
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
                          <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.popular ? "primary" : "secondary"}
                      style={
                        plan.popular
                          ? { backgroundColor: "#ffd700", color: "#013024" }
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
            מוכנים <span className="text-yellow-400">להתחיל</span>?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            הצטרפו לאלפי משתמשים שכבר משתמשים בכלים שלנו
          </p>
          <Button
            size="lg"
            style={{ backgroundColor: "#ffd700", color: "#013024" }}
            rightIcon={<ArrowLeft className="w-5 h-5" />}
          >
            התחל בחינם
          </Button>
        </div>
      </section>
    </div>
  );
}
