import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";
import hero from "@/assets/login-hero.png";

interface Props {
  children: ReactNode;
  heroBadge?: ReactNode;  // add the ?
  heroTitle: string;
  heroText: string;
  stats: { value: string; label: string }[];
}

export function AuthLayout({ children, heroBadge, heroTitle, heroText, stats }: Props) {
  return (
    <div className="auth-page">
      <div className="auth-sidebar">
        <Link to="/" className="logo-box" style={{ color: "inherit" }}>
          <img src={logo} alt="SafeGuard AI" />
          <span>SafeGuard AI</span>
        </Link>
        {children}
      </div>
      <div className="auth-hero">
        <img src={hero} alt="" className="hero-img" />
        <div className="hero-overlay">
          <div className="hero-content">
            {heroBadge && <div className="hero-badge">{heroBadge}</div>}
            <h1>{heroTitle}</h1>
            <p>{heroText}</p>
            <div className="hero-stats">
              {stats.map((s) => (
                <div key={s.label} className="hero-stat-item">
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
