"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  Linkedin,
  Github,
  Brain,
  Rocket,
  Heart,
  Code,
} from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const skills = [
  "AI & Machine Learning",
  "Full-Stack Development",
  "System Architecture",
  "Trading Systems",
  "Cloud & DevOps",
  "Product Strategy",
];

const achievements = [
  {
    icon: Brain,
    title: "10+",
    description: "מערכות AI פעילות",
  },
  {
    icon: Code,
    title: "100K+",
    description: "שורות קוד",
  },
  {
    icon: Rocket,
    title: "5+",
    description: "שנות ניסיון",
  },
  {
    icon: Heart,
    title: "100%",
    description: "תשוקה לטכנולוגיה",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Badge className="mb-6" variant="custom" color="#ff6b6b">
                מייסד קהילת וואי
              </Badge>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-white">היי, אני</span>
                <br />
                <span className="text-red-400">רפאל הרוש</span>
              </h1>

              <p className="text-xl text-white/70 mb-6 leading-relaxed">
                ארכיטקט מערכות AI ומפתח Full-Stack. מתמחה בבניית מערכות
                חכמות שחוסכות זמן וכסף לעסקים.
              </p>

              <p className="text-white/60 mb-8 leading-relaxed">
                הקמתי את קהילת וואי מתוך אמונה שטכנולוגיה צריכה להיות
                נגישה לכולם. המטרה שלי היא לעזור לאנשים ועסקים להצליח
                באמצעות כלים חכמים ופשוטים לשימוש.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="mailto:refael@y-community.com">
                  <Button
                    variant="primary"
                    style={{ backgroundColor: "#ff6b6b" }}
                    leftIcon={<Mail className="w-5 h-5" />}
                  >
                    צור קשר
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/refaelyharush"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" leftIcon={<Linkedin className="w-5 h-5" />}>
                    LinkedIn
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/20 to-brand-lime/20 blur-3xl" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 bg-white/5 p-8 flex items-center justify-center">
                  <span className="text-9xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-500/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-3xl font-black text-red-400 mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-white/50">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-white">המשימה</span>{" "}
                <span className="text-red-400">שלי</span>
              </h2>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                "אני מאמין שכל אדם ועסק יכולים להפיק תועלת מטכנולוגיה מתקדמת.
                המשימה שלי היא לבנות כלים חכמים, פשוטים ונגישים שעוזרים לאנשים
                לחסוך זמן, להרוויח יותר ולחיות חיים טובים יותר."
              </p>

              <Link href="/contact">
                <Button
                  size="lg"
                  style={{ backgroundColor: "#ff6b6b" }}
                  rightIcon={<ArrowLeft className="w-5 h-5" />}
                >
                  בואו נדבר
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-black/20">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="text-white">פרטי</span>{" "}
                <span className="text-red-400">התקשרות</span>
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:refael@y-community.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-6 h-6 text-red-400" />
                  <div>
                    <div className="text-white font-medium">אימייל</div>
                    <div className="text-white/60">refael@y-community.com</div>
                  </div>
                </a>

                <a
                  href="tel:+972528540475"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-6 h-6 text-red-400" />
                  <div>
                    <div className="text-white font-medium">טלפון</div>
                    <div className="text-white/60" dir="ltr">
                      052-854-0475
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/refaelyharush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-red-400" />
                  <div>
                    <div className="text-white font-medium">LinkedIn</div>
                    <div className="text-white/60">@refaelyharush</div>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
