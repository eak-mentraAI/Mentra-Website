import React from 'react';

interface IconProps { className?: string }

/** Eye with radar waves — Intelligence Hub */
export function IntelligenceHub({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path d="M12 5C7 5 3 12 3 12s4 7 9 7 9-7 9-7-4-7-9-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M18.5 5.5l1-1M5.5 5.5l-1-1M18.5 18.5l1 1M5.5 18.5l-1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/** Calendar with checkmark — Weekly Digest */
export function WeeklyDigest({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="3" fill="currentColor" opacity="0.15" />
      <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 14l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Screen with live pulse — Live Dashboard */
export function LiveDashboard({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="14" rx="2.5" fill="currentColor" opacity="0.15" />
      <rect x="2" y="3" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 10h2l2-3 2 6 2-3h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Brain with connection nodes — Concept Maps */
export function ConceptMap({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path d="M12 4a5.5 5.5 0 0 1 3.5 9.7V15a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 15v-1.3A5.5 5.5 0 0 1 12 4Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.5 18.5h5M10.5 20.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="5" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="19" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
      <path d="M6.5 8h2M15.5 8h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/** Shield with toggle — AI Control */
export function AIControl({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l8 4v5c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4Z" fill="currentColor" opacity="0.15" />
      <path d="M12 2l8 4v5c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="9" y="10.5" width="6" height="3.5" rx="1.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13.25" cy="12.25" r="1.25" fill="currentColor" />
    </svg>
  );
}

/** Magnifying glass with heart — Spot Quiet Ones */
export function SpotQuietOnes({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" fill="currentColor" opacity="0.15" />
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 8.5c.8-1.2 2.5-1.2 3 0s-.5 2.5-3 4c-2.5-1.5-3.5-2.8-3-4s2.2-1.2 3 0Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/** Document with star — Grading */
export function SmartGrading({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="2" width="16" height="20" rx="2.5" fill="currentColor" opacity="0.15" />
      <rect x="4" y="2" width="16" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 7h8M8 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 14l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2-1.45-1.4 2-.3L16 14Z" fill="currentColor" />
    </svg>
  );
}
