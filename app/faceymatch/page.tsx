"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  Zap,
  Download,
  Share2,
  Shield,
  Clock,
  Users,
  Star,
  Check,
  ExternalLink,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";
import { getBranchRepo } from "@/lib/branches-repos";

const features = [
  {
    icon: Camera,
    title: "זיהוי פנים AI",
    description: "טכנולוגיית AI מתקדמת שמזהה פנים בדיוק של 95%+",
  },
  {
    icon: Zap,
    title: "מהירות מטורפת",
    description: "תוצאות תוך 2 דקות בלבד - לא משנה כמה תמונות",
  },
  {
    icon: Download,
    title: "הורדה כ-ZIP",
    description: "כל התמונות שלך באיכות מלאה בקובץ ZIP אחד",
  },
  {
    icon: Share2,
    title: "שיתוף קל",
    description: "שתף את התמונות ישירות ל-WhatsApp או בקישור",
  },
  {
    icon: Shield,
    title: "פרטיות מוחלטת",
    description: "התמונות נמחקות אוטומטית לאחר 24 שעות",
  },
  {
    icon: Clock,
    title: "זמינות 24/7",
    description: "המערכת פעילה תמיד ומוכנה לכל אירוע",
  },
];

const pricingFeatures = [
  "זיהוי פנים AI מתקדם",
  "עיבוד עד 10,000 תמונות",
  "הורדה כ-ZIP",
  "שיתוף ב-WhatsApp",
  "תמיכה בעברית",
  "ללא הגבלת משתמשים",
];

const testimonials = [
  {
    name: "שרה כהן",
    role: "מפיקת אירועים",
    text: "השירות הזה חסך לי שעות של עבודה! האורחים מקבלים את התמונות שלהם תוך דקות.",
    rating: 5,
  },
  {
    name: "דני לוי",
    role: "צלם חתונות",
    text: "כלי מדהים! הלקוחות שלי אוהבים את היכולת למצוא את התמונות שלהם בקלות.",
    rating: 5,
  },
  {
    name: "מיכל אברהם",
    role: "מנהלת אירועים",
    text: "פשוט וקל לשימוש. עכשיו כל אירוע שלנו כולל את FaceyMatch.",
    rating: 5,
  },
];

export default function FaceyMatchPage() {
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
              <Badge className="mb-6">
                <Star className="w-4 h-4" />
                השלוחה הפופולרית ביותר
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            >
              <span className="text-white">מצא את כל התמונות שלך</span>
              <br />
              <span className="text-brand-lime">תוך 2 דקות!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
            >
              FaceyMatch משתמש ב-AI מתקדם כדי למצוא את כל התמונות שלך מכל אירוע.
              העלה תמונת סלפי אחת - וקבל את כל התמונות שבהן אתה מופיע.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {(() => {
                const faceymatchRepo = getBranchRepo("faceymatch");
                return (
                  <a
                    href={faceymatchRepo?.appUrl || "https://faceymatch.y-community.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      leftIcon={<Camera className="w-5 h-5" />}
                      rightIcon={faceymatchRepo?.appUrl ? <ExternalLink className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                    >
                      התחל עכשיו - ₪97
                    </Button>
                  </a>
                );
              })()}
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
                { value: "95%+", label: "דיוק זיהוי" },
                { value: "2 דק'", label: "זמן עיבוד" },
                { value: "10K+", label: "אירועים" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-brand-lime">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              למה <span className="text-brand-lime">FaceyMatch</span>?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              הטכנולוגיה המתקדמת ביותר לזיהוי פנים - פשוטה, מהירה ומדויקת
            </p>
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
                  <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-brand-lime" />
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

      {/* Pricing Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <Card
              variant="featured"
              accentColor="#a0df50"
              className="text-center"
            >
              <div className="p-8">
                <Badge className="mb-4">תשלום חד פעמי</Badge>
                <h3 className="text-2xl font-bold text-white mb-2">
                  לכל אירוע
                </h3>
                <div className="text-5xl font-black text-brand-lime mb-6">
                  ₪97
                </div>

                <ul className="space-y-3 mb-8 text-right">
                  {pricingFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <Check className="w-5 h-5 text-brand-lime flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {(() => {
                  const faceymatchRepo = getBranchRepo("faceymatch");
                  return (
                    <a
                      href={faceymatchRepo?.appUrl || "https://faceymatch.y-community.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button size="lg" className="w-full" rightIcon={faceymatchRepo?.appUrl ? <ExternalLink className="w-5 h-5" /> : undefined}>
                        התחל עכשיו
                      </Button>
                    </a>
                  );
                })()}

                <p className="text-sm text-white/40 mt-4">
                  ללא מנוי • ללא התחייבות • תשלום רק כשצריך
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              מה אומרים <span className="text-brand-lime">הלקוחות</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/50">{testimonial.role}</div>
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
            מוכנים <span className="text-brand-lime">להתחיל</span>?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            הצטרפו לאלפי מפיקי אירועים וצלמים שכבר משתמשים ב-FaceyMatch
          </p>
          {(() => {
            const faceymatchRepo = getBranchRepo("faceymatch");
            return (
              <a
                href={faceymatchRepo?.appUrl || "https://faceymatch.y-community.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  rightIcon={faceymatchRepo?.appUrl ? <ExternalLink className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                >
                  התחל עכשיו
                </Button>
              </a>
            );
          })()}
        </div>
      </section>
    </div>
  );
}
