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
    appUrl: "https://facematch-pro.vercel.app",
    href: "/faceymatch",
  },
  trading: {
    id: "trading",
    name: "Y-Trading - מסחר",
    appUrl: "https://y-trading.vercel.app",
    href: "/trading",
  },
  finance: {
    id: "finance",
    name: "פיננסים",
    appUrl: "https://y-finance.vercel.app",
    href: "/finance",
  },
  leads: {
    id: "leads",
    name: "לידים",
    appUrl: "https://y-leads.vercel.app",
    href: "/leads",
  },
  productivity: {
    id: "productivity",
    name: "פרודוקטיביות",
    appUrl: "https://y-productivity.vercel.app",
    href: "/productivity",
  },
  meetings: {
    id: "meetings",
    name: "ישיבות",
    appUrl: "https://y-meetings.vercel.app",
    href: "/meetings",
  },
  insights: {
    id: "insights",
    name: "תובנות",
    appUrl: "https://y-insights.vercel.app",
    href: "/insights",
  },
  judaism: {
    id: "judaism",
    name: "יהדות",
    appUrl: "https://y-judaism.vercel.app",
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
