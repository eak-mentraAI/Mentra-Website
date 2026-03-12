import React from 'react';

interface IconProps { className?: string }

/** Shield with checkmark badge — COPPA/FERPA */
export function ComplianceShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l8 4v5c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4Z" fill="currentColor" opacity="0.15" />
      <path d="M12 2l8 4v5c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Plug with sync arrows — Roster Integration */
export function RosterIntegration({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path d="M7 7v4a5 5 0 0 0 10 0V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 3v5M15 3v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 16v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 15l2-2 2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M16 19l2-2 2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

/** Power button with bolt — Kill Switch */
export function KillSwitch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path d="M12 2v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7.5 5.7A8 8 0 1 0 16.5 5.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 13l2-4h-3l2-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

/** Eye with document — Explainability */
export function Explainability({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="currentColor" opacity="0.15" />
      <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 9C9.5 9 7.5 12 7.5 12s2 3 4.5 3 4.5-3 4.5-3-2-3-4.5-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M7 17h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/** File with lock + arrow — Data Export */
export function SecureExport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" fill="currentColor" opacity="0.15" />
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="9" y="12" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.5 12v-1.5a1.5 1.5 0 0 1 3 0V12" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

/** Dashboard with heartbeat — IT Observability */
export function ITObservability({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="18" rx="2.5" fill="currentColor" opacity="0.15" />
      <rect x="2" y="3" width="20" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 8h20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 14h3l1.5-3 2 6 1.5-3H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Lock with wall — Tenant Isolation */
export function TenantIsolation({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="11" width="18" height="11" rx="2.5" fill="currentColor" opacity="0.15" />
      <rect x="3" y="11" width="18" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      <path d="M12 17.5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 14h18M3 18h18" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
    </svg>
  );
}
