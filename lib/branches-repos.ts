/**
 * מיפוי של כל השלוחות לריפוזיטוריות GitHub הרלוונטיות
 * Branch to GitHub Repository Mapping
 */

export interface BranchRepo {
  id: string;
  name: string;
  repoUrl: string;
  href?: string; // קישור פנימי (אם קיים)
}

export const branchesRepos: Record<string, BranchRepo> = {
  faceymatch: {
    id: "faceymatch",
    name: "FaceyMatch - תמונות AI",
    repoUrl: "https://github.com/RefaelYHarush/SaaS-faceymatch",
    href: "/faceymatch",
  },
  trading: {
    id: "trading",
    name: "Y-Trading - מסחר",
    repoUrl: "https://github.com/RefaelYHarush/SaaS-Y-Trading",
    href: "/trading",
  },
  finance: {
    id: "finance",
    name: "פיננסים",
    repoUrl: "https://github.com/RefaelYHarush/SaaS-Y-FINANCE-IL",
    href: "/finance",
  },
  leads: {
    id: "leads",
    name: "לידים",
    repoUrl: "https://github.com/RefaelYHarush/SaaS-Y-Community", // עדכן לפי הריפו הנכון
    href: "/leads",
  },
  productivity: {
    id: "productivity",
    name: "פרודוקטיביות",
    repoUrl: "https://github.com/RefaelYHarush/SaaS-Y-Community", // עדכן לפי הריפו הנכון
    href: "/productivity",
  },
  meetings: {
    id: "meetings",
    name: "ישיבות",
    repoUrl: "https://github.com/RefaelYHarush/SaaS-Y-Community", // עדכן לפי הריפו הנכון
    href: "/meetings",
  },
  insights: {
    id: "insights",
    name: "תובנות",
    repoUrl: "https://github.com/RefaelYHarush/SaaS-Y-Community", // עדכן לפי הריפו הנכון
    href: "/insights",
  },
  judaism: {
    id: "judaism",
    name: "יהדות",
    repoUrl: "https://github.com/RefaelYHarush/SaaS-Y-Community", // עדכן לפי הריפו הנכון
    href: "/judaism",
  },
};

/**
 * פונקציה עזר לקבלת קישור לריפוזיטורי לפי ID של שלוחה
 */
export function getBranchRepo(branchId: string): BranchRepo | undefined {
  return branchesRepos[branchId];
}

/**
 * פונקציה עזר לקבלת קישור לריפוזיטורי לפי href
 */
export function getBranchRepoByHref(href: string): BranchRepo | undefined {
  return Object.values(branchesRepos).find((repo) => repo.href === href);
}
