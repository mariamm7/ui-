import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AuthLayout, EyeIcon } from "@/components/AuthLayout";
import { getUser, setUser, nameFromEmail } from "@/lib/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sign in | SafeGuard AI" },
      { name: "description", content: "Sign in to the SafeGuard AI PPE monitoring dashboard." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const u = getUser();
    if (u?.loggedIn) navigate({ to: "/dashboard" });
  }, [navigate]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setTimeout(() => {
      setUser({ name: nameFromEmail(email), email, role: "Site Supervisor", loggedIn: true });
      navigate({ to: "/dashboard" });
    }, 800);
  };

  const googleLogin = () => {
    setUser({ name: "Google User", email: "user@gmail.com", role: "Site Supervisor", loggedIn: true });
    navigate({ to: "/dashboard" });
  };

  return (
    <AuthLayout
      heroBadge={
        <>
          <span className="pulse-dot" />
          Enterprise PPE Monitoring
        </>
      }
      heroTitle="Workplace safety, powered by intelligence."
      heroText="Real-time computer vision detects PPE compliance violations, generates audit trails, and delivers AI-driven safety insights for industrial environments."
      stats={[
        { value: "24/7", label: "Continuous monitoring" },
        { value: "AI-Powered", label: "Smart safety insights" },
      ]}
    >

      <div className="auth-header">
        <h1>Welcome back</h1>
        <p>Sign in to access the PPE monitoring dashboard.</p>
      </div>

      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="email">Work email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="name@company.com"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={show ? "text" : "password"}
              id="password"
              className="form-input"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="toggle-password" onClick={() => setShow((s) => !s)} aria-label="Toggle password visibility">
              <EyeIcon open={!show} />
            </button>
          </div>
        </div>

        <div className="auth-helper">
          <label className="checkbox-label">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="auth-link">Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner" /> Signing in…
            </>
          ) : (
            <>
              Sign in
              <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </form>

      <div className="auth-divider">
        <span>Or continue with</span>
      </div>

      <button type="button" className="btn btn-outline btn-block" onClick={demoLogin}>
        <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        Continue with SSO
      </button>

      <p className="auth-footer">
        New to SafeGuard? <Link to="/signup" className="auth-link">Request access</Link>
      </p>
    </AuthLayout>
  );
}
