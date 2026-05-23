import React from 'react';
import { ShieldCheck, FileCheck2, Lock, UserCog, Users } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: '57 policy gates' },
  { icon: FileCheck2, label: 'Append-only audit' },
  { icon: Lock, label: 'FERPA aligned' },
  { icon: UserCog, label: 'Teacher override' },
  { icon: Users, label: 'Parent gate' },
];

const TrustStrip = () => {
  return (
    <section
      aria-label="Trust and compliance"
      className="bg-white border-y border-gray-200"
    >
      <div className="container mx-auto px-4 py-6">
        <ul
          role="list"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6 items-center"
        >
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2 text-gray-500"
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
