import type { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card } from '@y-community/ui';
import { ArrowLeft, BookOpen, Headphones, Bookmark, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'נקודת האפס - הספר',
  description: 'המסע המדעי, ההיסטורי והאישי בחזרה אל הבורא - ספר דיגיטלי אינטראקטיבי מאת רפאל יניב הרוש',
  openGraph: {
    title: 'נקודת האפס - הספר',
    description: 'המסע המדעי, ההיסטורי והאישי בחזרה אל הבורא',
    type: 'book',
    locale: 'he_IL',
  },
};

const features = [
  {
    icon: BookOpen,
    title: 'קריאה אינטראקטיבית',
    description: 'ממשק קריאה מודרני עם מעקב התקדמות ונגישות מתקדמת',
  },
  {
    icon: Headphones,
    title: 'הקראה קולית',
    description: 'Text-to-Speech מובנה בעברית לקריאה נוחה',
  },
  {
    icon: Bookmark,
    title: 'סימניות והערות',
    description: 'שמור את מקום הקריאה והוסף הערות אישיות',
  },
  {
    icon: Share2,
    title: 'שיתוף קל',
    description: 'שתף קטעים מהספר ברשתות החברתיות',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-800/50 bg-gray-900/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-bold text-white">
              Y
            </div>
            <span className="text-xl font-bold">Community</span>
          </Link>
          
          <a
            href="http://localhost:3006"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" rightIcon={<ArrowLeft className="h-4 w-4 rtl-flip" />}>
              התחל לקרוא
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              <BookOpen className="mr-2 h-4 w-4" />
              ספר דיגיטלי אינטראקטיבי
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              נקודת האפס
            </h1>
            
            <p className="mx-auto mt-4 text-xl text-emerald-400">
              המסע המדעי, ההיסטורי והאישי בחזרה אל הבורא
            </p>
            
            <p className="mx-auto mt-2 text-lg text-gray-400">
              מאת: רפאל יניב הרוש
            </p>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              מסע מרתק בין מדע, היסטוריה ואמונה. ספר שמאתגר את הקורא לחשוב מחדש
              על השאלות הגדולות של החיים.
            </p>
            
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="http://localhost:3006"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="xl" rightIcon={<ArrowLeft className="h-5 w-5 rtl-flip" />}>
                  התחל לקרוא - חינם
                </Button>
              </a>
              <Link href="#chapters">
                <Button variant="outline" size="xl">
                  צפה בתוכן העניינים
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">חוויית קריאה מתקדמת</h2>
            <p className="mt-4 text-lg text-gray-400">
              כל מה שצריך לקריאה נוחה ומעשירה
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center bg-gray-800/50 border-gray-700">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20">
                  <feature.icon className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-20 bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">תוכן העניינים</h2>
            <p className="mt-4 text-lg text-gray-400">
              {chapters.length} פרקים מלאים בתובנות ומחשבה
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-4 transition-colors hover:bg-gray-800"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-400">
                  {index + 1}
                </div>
                <span className="text-gray-200">{chapter}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="http://localhost:3006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="xl">
                התחל לקרוא עכשיו
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} רפאל יניב הרוש. כל הזכויות שמורות.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            מהדורה שנייה - עודכן בינואר 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
