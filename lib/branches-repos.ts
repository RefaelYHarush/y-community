/**
 * מיפוי של כל השלוחות לאפליקציות המשתמש (דשבורדים)
 * Branch to User Application/Dashboard Mapping
 * 
 * להוסיף appUrl כשהאפליקציות יהיו deployed
 */

export interface BranchRepo {
  id: string;
  name: string;
  appUrl?: string; // קישור לאפליקציית המשתמש (אופציונלי - רק אם deployed)
  href: string; // קישור פנימי
}

export const branchesRepos: Record<string, BranchRepo> = {
  faceymatch: {
    id: "faceymatch",
    name: "FaceyMatch - תמונות AI",
    // appUrl: "https://faceymatch.netlify.app", // הוסף כאן את ה-URL כש deployed
    href: "/faceymatch",
  },
  trading: {
    id: "trading",
    name: "Y-Trading - מסחר",
    // appUrl: "https://y-trading.vercel.app", // הוסף כאן את ה-URL כש deployed
    href: "/trading",
  },
  finance: {
    id: "finance",
    name: "פיננסים",
    // appUrl: "https://y-finance.vercel.app", // הוסף כאן את ה-URL כש deployed
    href: "/finance",
  },
  leads: {
    id: "leads",
    name: "לידים",
    href: "/leads",
  },
  productivity: {
    id: "productivity",
    name: "פרודוקטיביות",
    href: "/productivity",
  },
  meetings: {
    id: "meetings",
    name: "ישיבות",
    href: "/meetings",
  },
  insights: {
    id: "insights",
    name: "תובנות",
    href: "/insights",
  },
  judaism: {
    id: "judaism",
    name: "יהדות",
    href: "/judaism",
  },
};

/**
 * פונקציה עזר לקבלת קישור לאפליקציה לפי ID של שלוחה
 */
export function getBranchRepo(branchId: string): BranchRepo | undefined {
  return branchesRepos[branchId];
}

/**
 * פונקציה עזר לקבלת קישור לאפליקציה לפי href
 */
export function getBranchRepoByHref(href: string): BranchRepo | undefined {
  return Object.values(branchesRepos).find((repo) => repo.href === href);
}
