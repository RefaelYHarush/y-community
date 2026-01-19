"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, User } from "lucide-react";
import { Card, Button } from "@/components/ui";

const moreItems = [
  {
    id: "book",
    title: "נקודת האפס",
    subtitle: "הספר של רפאל הרוש",
    description: "מסע של התפתחות אישית, תובנות עמוקות וכלים פרקטיים לחיים טובים יותר",
    icon: "📖",
    color: "#ffd700",
    href: "/book",
    cta: "קרא את הספר",
  },
  {
    id: "personal",
    title: "רפאל הרוש",
    subtitle: "ארכיטקט מערכות AI",
    description: "מטמיע סוכני AI חכמים שחוסכים זמן וכסף לעסקים. בואו נבנה את העתיד יחד",
    icon: "👤",
    color: "#ff6b6b",
    href: "/about",
    cta: "לאתר האישי",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function MoreFromCommunity() {
  return (
    <section className="section bg-black/20">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            עוד מ<span className="text-brand-lime">קהילת וואי</span>
          </h2>
          <p className="section-subtitle">
            תוכן, ידע והשראה מעולם הטכנולוגיה והעסקים
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {moreItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card
                className="h-full group overflow-hidden"
                style={{
                  borderColor: `${item.color}30`,
                }}
              >
                <div className="p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-6xl mb-6"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Content */}
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{item.subtitle}</p>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <Link href={item.href}>
                    <Button
                      className="group-hover:shadow-lg transition-shadow"
                      style={{
                        backgroundColor: item.color,
                        color: item.id === "personal" ? "#fff" : "#013024",
                      }}
                      rightIcon={
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      }
                    >
                      {item.cta}
                    </Button>
                  </Link>
                </div>

                {/* Bottom Gradient */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
