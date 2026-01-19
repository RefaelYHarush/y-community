"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";

export function CTA() {
  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-lime/20 via-brand-green to-accent-blue/10 border border-brand-lime/30"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-1/2 -right-1/2 w-full h-full"
            >
              <div className="absolute top-1/2 right-1/2 w-96 h-96 rounded-full border border-brand-lime/10" />
              <div className="absolute top-1/2 right-1/2 w-80 h-80 rounded-full border border-brand-lime/10" />
              <div className="absolute top-1/2 right-1/2 w-64 h-64 rounded-full border border-brand-lime/10" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-lime/20 border border-brand-lime/30 text-brand-lime text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                התחל בחינם
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 max-w-2xl mx-auto"
            >
              מוכנים להצטרף ל
              <span className="text-brand-lime">קהילת וואי</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
            >
              הצטרף לאלפי משתמשים שכבר משתמשים בכלים שלנו לשיפור החיים והעסק
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/faceymatch">
                <Button
                  size="lg"
                  variant="primary"
                  rightIcon={<ArrowLeft className="w-5 h-5" />}
                >
                  התחל עכשיו - בחינם
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  דברו איתנו
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/50 text-sm"
            >
              <span>✓ ללא כרטיס אשראי</span>
              <span>✓ התחל בדקות</span>
              <span>✓ תמיכה בעברית</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
