import React from 'react';

interface IconProps { className?: string }

/** Traffic light (simplified) — Status Light */
export function StatusLight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="2" width="10" height="20" rx="3" fill="currentColor" opacity="0.15" />
      <rect x="7" y="2" width="10" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="7" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="17" r="2" fill="currentColor" />
    </svg>
  );
}

/** Dashboard with magnifier — Full Dashboard */
export function FullDashboard({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="18" rx="2.5" fill="currentColor" opacity="0.15" />
      <rect x="2" y="3" width="20" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 8h20" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="11" width="5" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="5" y="16" width="5" height="2" rx="0.5" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <circle cx="16" cy="14.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18.2 16.7l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Shield with pulse — Safety Monitor */
export function SafetyMonitor({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l8 4v5c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4Z" fill="currentColor" opacity="0.15" />
      <path d="M12 2l8 4v5c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 12h2l1.5-2.5 1.5 5 1.5-2.5H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Target with growth arrow — Goals */
export function GrowthGoals({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M17 3l3 0 0 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 3l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Key with lock — Consent Controls */
export function ConsentControls({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="15" r="6" fill="currentColor" opacity="0.15" />
      <circle cx="8" cy="15" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8" cy="15" r="2" fill="currentColor" opacity="0.4" />
      <path d="M12.5 11.5L20 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 4h3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Folder with export arrow — Portability */
export function DataPortability({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z" fill="currentColor" opacity="0.15" />
      <path d="M2 7V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 10v7M12 17l-3-3M12 17l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Heart with shield — Emotional Data */
export function EmotionalData({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6C13.5 3.5 17 3 19 5s1.5 6-7 12C4.5 11 3 8 5 5s5.5-1.5 7 1Z" fill="currentColor" opacity="0.15" />
      <path d="M12 6C13.5 3.5 17 3 19 5s1.5 6-7 12C4.5 11 3 8 5 5s5.5-1.5 7 1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 11l5 0v3c0 1.1-.9 2-2 2h-1a2 2 0 0 1-2-2v-3Z" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
      <path d="M11 11V9.5a1.5 1.5 0 0 1 3 0V11" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
    </svg>
  );
}

/** Fingerprint with spark — Learner Identity */
export function LearnerIdentity({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path d="M6 12a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 12a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 12a2 2 0 0 1 4 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 12v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 5l.5-1.5M19.5 6.5L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
