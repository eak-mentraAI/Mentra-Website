import React from 'react';

interface IconProps { className?: string }

/** Lightbulb with sparks — Explore Sparks */
export function ExploreSparks({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="11" r="8" fill="currentColor" opacity="0.15" />
      <path d="M12 3a6 6 0 0 1 3.5 10.85V16a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 16v-2.15A6 6 0 0 1 12 3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.5 19h5M10.5 21h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 4l1-1M6 4L5 3M20 11h1.5M2.5 11H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/** Chat bubble with brain — Adaptive Tutor */
export function AdaptiveTutor({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 0-2Z" fill="currentColor" opacity="0.15" />
      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 0-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5c1.5 0 2.5 1 2.5 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/** Life ring with arrow — Stuck Detection */
export function StuckDetection({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.15" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.6 5.6l3.5 3.5M18.4 5.6l-3.5 3.5M5.6 18.4l3.5-3.5M18.4 18.4l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Terminal with brackets — Code/Build */
export function CodeBuild({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="18" rx="3" fill="currentColor" opacity="0.15" />
      <rect x="2" y="3" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 8h20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 13l-2 2 2 2M17 13l2 2-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 12l-2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/** ID card with chart — Learner Passport */
export function LearnerPassport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2.5" fill="currentColor" opacity="0.15" />
      <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 16.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 9v6M16.5 11v4M19 10v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Trophy with growth plant — XP & Sprigs */
export function XPSprigs({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 21h8M12 17v4M7 4h10v4c0 2.8-2.2 5-5 5s-5-2.2-5-5V4Z" fill="currentColor" opacity="0.15" />
      <path d="M7 4h10v4c0 2.8-2.2 5-5 5s-5-2.2-5-5V4Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 7H4a1 1 0 0 0-1 1v1c0 1.7 1.3 3 3 3h1M17 7h3a1 1 0 0 1 1 1v1c0 1.7-1.3 3-3 3h-1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 9v2M10.5 10l1.5-1 1.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
}

/** Open book with pen — Reflect & Journal */
export function ReflectJournal({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4c2-1 4-1 6 0s4 1 4 1v15s-2-1-4-1-4 0-6 1V4Z" fill="currentColor" opacity="0.15" />
      <path d="M12 5s2-1 4-1 4 0 6 1v15c-2-1-4-1-6-1s-4 1-4 1" fill="currentColor" opacity="0.1" />
      <path d="M2 4c2-1 4-1 6 0s4 1 4 1v15s-2-1-4-1-4 0-6 1V4ZM12 5s2-1 4-1 4 0 6 1v15c-2-1-4-1-6-1s-4 1-4 1" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M17 8l1.5-1.5a1 1 0 0 1 1.5 0l.5.5a1 1 0 0 1 0 1.5L19 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
