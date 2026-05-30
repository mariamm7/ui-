export interface SafeguardUser {
  name: string;
  email: string;
  role: string;
  loggedIn: boolean;
}

const KEY = "safeguard_user";

export function getUser(): SafeguardUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as SafeguardUser) : null;
  } catch {
    return null;
  }
}

export function setUser(u: SafeguardUser) {
  localStorage.setItem(KEY, JSON.stringify(u));
}

export function clearUser() {
  localStorage.removeItem(KEY);
}

export function nameFromEmail(email: string) {
  return email
    .split("@")[0]
    .replace(/[._-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
