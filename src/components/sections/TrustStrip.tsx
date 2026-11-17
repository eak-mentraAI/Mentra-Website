import React from 'react';
import { HelpCircle, Power, ShieldCheck, UserCheck, Users } from 'lucide-react';

// Plain-language restatements of claims made elsewhere on the site (Trust section, FAQ, About). No certifications:
// add one here only when it's real and stated the same way everywhere else.
const items = [
  { icon: Users, label: 'Parent consent first' },
  { icon: UserCheck, label: 'Teachers approve every recommendation' },
  { icon: Power, label: 'AI can be switched off' },
  { icon: HelpCircle, label: 'Says “not yet” when unsure' },
  { icon: ShieldCheck, label: 'Data never sold or used for ads' },
];

const TrustStrip = () => {
  return (
    <section
      aria-label="How Mentra protects students"
      className="bg-white border-y border-gray-200"
    >
      <div className="container mx-auto px-4 py-6">
        <ul
          role="list"
          className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6 items-center"
        >
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2 text-gray-500 text-center"
            >
              <Icon className="w-4 h-4 text-mentra-blue/70 shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium tracking-tight">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStrip;
