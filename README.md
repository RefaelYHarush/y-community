# 🏠 Y Community - קהילת וואי
## האתר המאוחד של קהילת וואי

**הבית הדיגיטלי שלך - פלטפורמה ישראלית מתקדמת עם כלי AI חכמים**

---

## 🚀 התחלה מהירה

### התקנה

```bash
# התקן את הספריות
npm install

# הרץ בסביבת פיתוח
npm run dev
```

פתח [http://localhost:3000](http://localhost:3000) בדפדפן.

### Build לייצור

```bash
npm run build
npm start
```

---

## 📂 מבנה הפרויקט

```
y-community/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout ראשי
│   ├── page.tsx           # דף הבית
│   ├── faceymatch/        # דף FaceyMatch
│   ├── trading/           # דף Trading
│   ├── finance/           # דף Finance
│   ├── leads/             # דף Leads
│   ├── about/             # דף אודות
│   ├── contact/           # דף יצירת קשר
│   ├── pricing/           # דף מחירים
│   └── globals.css        # סגנונות גלובליים
│
├── components/
│   ├── ui/                # רכיבי UI בסיסיים (Design System)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── index.ts
│   ├── layout/            # Header, Footer
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── sections/          # סקשנים לדפים
│       ├── Hero.tsx
│       ├── Branches.tsx
│       ├── Features.tsx
│       └── ...
│
├── lib/                   # פונקציות עזר
│   └── utils.ts
│
├── public/                # קבצים סטטיים
│   ├── logo.jpg
│   └── manifest.json
│
├── tailwind.config.ts     # הגדרות Tailwind
├── next.config.ts         # הגדרות Next.js
├── tsconfig.json          # הגדרות TypeScript
└── package.json
```

---

## 🎨 Design System

### צבעי מותג

```css
/* Primary */
--brand-lime: #a0df50;      /* ירוק ליים - ראשי */
--brand-green: #013024;     /* ירוק כהה - רקע */

/* Accent - לשלוחות */
--accent-blue: #00d4ff;     /* Trading */
--accent-gold: #ffd700;     /* Book */
--accent-red: #ff6b6b;      /* Personal */
--accent-pink: #ec4899;     /* Leads */
--accent-emerald: #10b981;  /* Finance */
```

### גופנים

- **Heebo** - גופן עברי ראשי
- **Inter** - גופן אנגלי משני

### רכיבי UI

- `Button` - כפתורים עם וריאנטים שונים
- `Card` - כרטיסים עם אפקטים
- `Badge` - תגיות וסטטוסים

---

## 🌐 השלוחות

| שלוחה | תיאור | צבע |
|-------|-------|-----|
| 📸 FaceyMatch | זיהוי פנים AI | `#a0df50` |
| 📈 Y-Trading | מסחר אוטומטי | `#00d4ff` |
| 💰 Finance | ניהול פיננסי | `#10b981` |
| 👥 Leads | ניהול לידים | `#ec4899` |
| ⚡ Productivity | פרודוקטיביות | `#f97316` |
| 📅 Meetings | ניהול ישיבות | `#8b5cf6` |
| 📊 Insights | אנליטיקה | `#a855f7` |
| ✡️ Judaism | יהדות | `#ffd700` |

---

## 🛠️ טכנולוגיות

- **Next.js 14** - App Router, SSR, Optimizations
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icons

---

## 📱 תכונות

- ✅ RTL מלא (עברית)
- ✅ Responsive לכל המכשירים
- ✅ Dark Theme מובנה
- ✅ אנימציות חלקות
- ✅ SEO אופטימלי
- ✅ PWA Ready
- ✅ Core Web Vitals מעולים

---

## 🚀 Deployment

### Vercel (מומלץ)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# העלה את תיקיית .next
```

---

## 📞 יצירת קשר

- **אתר:** [y-community.com](https://y-community.com)
- **אימייל:** support@y-community.com
- **טלפון:** 052-854-0475

---

## 📄 רישיון

MIT License

---

**נבנה עם ❤️ בישראל 🇮🇱**
