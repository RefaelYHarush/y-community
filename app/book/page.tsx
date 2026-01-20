"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Headphones, Bookmark, Share2 } from "lucide-react";
import { Button, Card, Badge } from "@/components/ui";

const features = [
  {
    icon: BookOpen,
    title: "קריאה אינטראקטיבית",
    description: "ממשק קריאה מודרני עם מעקב התקדמות ונגישות מתקדמת",
  },
  {
    icon: Headphones,
    title: "הקראה קולית",
    description: "Text-to-Speech מובנה בעברית לקריאה נוחה",
  },
  {
    icon: Bookmark,
    title: "סימניות והערות",
    description: "שמור את מקום הקריאה והוסף הערות אישיות",
  },
  {
    icon: Share2,
    title: "שיתוף קל",
    description: "שתף קטעים מהספר ברשתות החברתיות",
  },
];

const chapters = [
  'הקדמה',
  'פרק 1: "אנחנו אחרי?"',
  'פרק 2: מיץ תפוחים מתפוח רקוב',
  'פרק 3: הסדק בשריון הרובוט',
  'פרק 4: בדיקת נאותות (Due Diligence) לאלוהים',
  'פרק 5: הפיצוץ בבית הדפוס',
  'פרק 6: מי כתב את הקוד?',
  'פרק 7: הכשל הלוגי של "השימפנזה המקליד"',
  'פרק 8: העם שרימה את ההיסטוריה',
  'פרק 9: הייתם שם?',
  'פרק 10: קזינו החיים',
  'פרק 11: האשליה של ה"אלפא"',
  'פרק 12: טוב, רע ומה שביניהם',
  'פרק 13: השאלה ששורפת את הלב',
  'פרק 14: הסודות שמעבר למסך',
  'סיכום: אז מה עושים מחר בבוקר?',
];

export default function BookLandingPage() {
  return (
    <div className="min-h-screen bg-brand-green">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-brand-lime/10 via-transparent to-transparent" />
        
        <div className="relative container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6 border-brand-lime/30 text-brand-lime">
              <BookOpen className="w-4 h-4 ml-2" />
              ספר דיגיטלי אינטראקטיבי
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white">
              נקודת האפס
            </h1>
            
            <p className="text-2xl md:text-3xl text-brand-lime mb-4">
              המסע המדעי, ההיסטורי והאישי בחזרה אל הבורא
            </p>
            
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              מאת רפאל יניב הרוש
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-brand-lime text-brand-green hover:bg-brand-lime-light"
              >
                התחל לקרוא חינם
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:border-brand-lime hover:text-brand-lime"
              >
                <BookOpen className="w-5 h-5 ml-2" />
                קרא עוד על הספר
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
              חוויית קריאה <span className="text-brand-lime">מתקדמת</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              פלטפורמה דיגיטלית אינטראקטיבית לחוויית קריאה מיטבית
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:border-brand-lime/50 transition-all h-full p-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-brand-lime" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                תוכן <span className="text-brand-lime">הספר</span>
              </h2>
              <p className="text-white/60">
                {chapters.length} פרקים מרתקים המובילים אותך למסע מדהים
              </p>
            </div>
            
            <Card className="bg-white/5 border-white/10 p-8">
              <div className="space-y-4">
                {chapters.map((chapter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-lime/20 flex items-center justify-center text-brand-lime font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="text-white/80">
                      {chapter}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black/20 to-black/40">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
              מוכן <span className="text-brand-lime">להתחיל</span>?
            </h2>
            <p className="text-white/60 mb-8">
              התחל את המסע שלך עכשיו - קריאה חינמית לחלוטין
            </p>
            <Button
              size="lg"
              className="bg-brand-lime text-brand-green hover:bg-brand-lime-light"
            >
              התחל לקרוא עכשיו
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
