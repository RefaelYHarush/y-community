/**
 * מיפוי של כל השלוחות לאפליקציות המשתמש (דשבורדים)
 * Branch to User Application/Dashboard Mapping
 */

export interface BranchRepo {
  id: string;
  name: string;
  appUrl: string; // קישור לאפליקציית המשתמש
  href?: string; // קישור פנימי (אם קיים)
}

export const branchesRepos: Record<string, BranchRepo> = {
  faceymatch: {
    id: "faceymatch",
    name: "FaceyMatch - תמונות AI",
    appUrl: "https://faceymatch.y-community.com", // או faceymatch.netlify.app / facematch-pro.vercel.app
    href: "/faceymatch",
  },
  trading: {
    id: "trading",
    name: "Y-Trading - מסחר",
    appUrl: "https://trading.y-community.com", // עדכן לפי ה-URL הנכון
    href: "/trading",
  },
  finance: {
    id: "finance",
    name: "פיננסים",
    appUrl: "https://finance.y-community.com", // עדכן לפי ה-URL הנכון
    href: "/finance",
  },
  leads: {
    id: "leads",
    name: "לידים",
    appUrl: "https://leads.y-community.com", // עדכן לפי ה-URL הנכון
    href: "/leads",
  },
  productivity: {
    id: "productivity",
    name: "פרודוקטיביות",
    appUrl: "https://productivity.y-community.com", // עדכן לפי ה-URL הנכון
    href: "/productivity",
  },
  meetings: {
    id: "meetings",
    name: "ישיבות",
    appUrl: "https://meetings.y-community.com", // עדכן לפי ה-URL הנכון
    href: "/meetings",
  },
  insights: {
    id: "insights",
    name: "תובנות",
    appUrl: "https://insights.y-community.com", // עדכן לפי ה-URL הנכון
    href: "/insights",
  },
  judaism: {
    id: "judaism",
    name: "יהדות",
    appUrl: "https://judaism.y-community.com", // עדכן לפי ה-URL הנכון
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
