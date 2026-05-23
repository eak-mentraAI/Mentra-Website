import React, { createContext, useContext, useState, ReactNode } from 'react';
import ScheduleCallModal from '@/components/sections/ScheduleCallModal';

interface ScheduleCallContextValue {
  open: () => void;
  close: () => void;
}

const ScheduleCallContext = createContext<ScheduleCallContextValue | null>(null);

export const ScheduleCallProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScheduleCallContext.Provider
      value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
      <ScheduleCallModal open={isOpen} onOpenChange={setIsOpen} />
    </ScheduleCallContext.Provider>
  );
};

export const useScheduleCall = (): ScheduleCallContextValue => {
  const ctx = useContext(ScheduleCallContext);
  if (!ctx) {
    throw new Error('useScheduleCall must be used within a ScheduleCallProvider');
  }
  return ctx;
};
