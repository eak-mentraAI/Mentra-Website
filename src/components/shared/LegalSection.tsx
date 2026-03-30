import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export interface LegalSectionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalSectionProps {
  sections: LegalSectionItem[];
  storageKey: string;
}

export default function LegalSection({ sections, storageKey }: LegalSectionProps) {
  const allIds = sections.map((s) => s.id);

  const [value, setValue] = useState<string[]>(allIds);

  useEffect(() => {
    const saved = localStorage.getItem(`legal-collapse-${storageKey}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as string[];
        setValue(parsed);
      } catch {
        // ignore bad data
      }
    }
  }, [storageKey]);

  const handleValueChange = (next: string[]) => {
    setValue(next);
    localStorage.setItem(`legal-collapse-${storageKey}`, JSON.stringify(next));
  };

  return (
    <Accordion
      type="multiple"
      value={value}
      onValueChange={handleValueChange}
      className="space-y-3"
    >
      {sections.map((section) => (
        <AccordionItem
          key={section.id}
          value={section.id}
          id={section.id}
          className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm"
        >
          <AccordionTrigger className="text-xl font-bold text-mentra-blue hover:no-underline py-5">
            {section.title}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 leading-relaxed pb-5">
            {section.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
