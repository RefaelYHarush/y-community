"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Users,
  FileText,
  BarChart3,
  Mail,
  Phone,
  Calendar,
  Zap,
  Check,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const features = [
  {
    icon: Users,
    title: "ניהול לידים",
    description: "עקוב אחרי כל הלידים שלך במקום אחד",
  },
  {
    icon: FileText,
    title: "הצעות מחיר",
    description: "צור והשלח הצעות מחיר מקצועיות בדקות",
  },
  {
    icon: BarChart3,
    title: "Pipeline",
    description: "תצוגת Kanban לניהול תהליך המכירה",
  },
  {
    icon: Mail,
    title: "אוטומציה",
    description: "שלח מיילים ו-SMS אוטומטיים",
  },
  {
    icon: Calendar,
    title: "תזכורות",
    description: "קבל תזכורות על מעקבים וישיבות",
  },
  {
    icon: Zap,
    title: "דוחות",
    description: "אנליטיקה מתקדמת על ביצועי המכירות",
  },
];

export default function LeadsPage() {
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
              <Badge className="mb-6" variant="custom" color="#ec4899">
                <Users className="w-4 h-4" />
                ניהול לידים חכם
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            >
              <span className="text-white">נהל את הלידים שלך</span>
              <br />
              <span className="text-pink-400">כמו מקצוען</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-2xl mx-auto"
            >
              מערכת CRM פשוטה וחזקה לניהול לידים, הצעות מחיר ומעקב לקוחות.
              הפוך יותר לידים ללקוחות.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                style={{ backgroundColor: "#ec4899" }}
                leftIcon={<Users className="w-5 h-5" />}
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
              כל הכלים ל<span className="text-pink-400">מכירות</span>
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
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-pink-400" />
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

      {/* CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            מוכנים <span className="text-pink-400">למכור יותר</span>?
          </h2>
          <Button
            size="lg"
            style={{ backgroundColor: "#ec4899" }}
            rightIcon={<ArrowLeft className="w-5 h-5" />}
          >
            התחל בחינם
          </Button>
        </div>
      </section>
    </div>
  );
}
