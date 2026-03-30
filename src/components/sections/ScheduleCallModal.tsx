import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ScheduleCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ScheduleCallModal({ open, onOpenChange }: ScheduleCallModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/meokybnp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) setStatus('idle');
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Schedule a Call
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Leave your details and our team will reach out to schedule a time.
          </DialogDescription>
        </DialogHeader>

        {status === 'success' ? (
          <div className="py-6 text-center">
            <div className="w-12 h-12 bg-growth-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-growth-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-900 font-semibold mb-1">Thank you!</p>
            <p className="text-gray-600 text-sm">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="hidden" name="context" value="Sent from the teachers page" />
            <div>
              <label htmlFor="schedule-name" className="sr-only">Name</label>
              <input
                id="schedule-name"
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-journal-sand/30 border border-gray-200 focus:border-mentra-blue focus:ring-2 focus:ring-mentra-blue/20 focus:shadow-[0_0_0_4px_rgba(58,134,255,0.08)] focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="schedule-email" className="sr-only">Email</label>
              <input
                id="schedule-email"
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-journal-sand/30 border border-gray-200 focus:border-mentra-blue focus:ring-2 focus:ring-mentra-blue/20 focus:shadow-[0_0_0_4px_rgba(58,134,255,0.08)] focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400"
              />
            </div>

            {status === 'error' && (
              <p className="text-curiosity-coral text-sm">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-mentra-blue to-mentra-blue/85 text-white font-semibold py-3 rounded-full hover:from-mentra-blue/95 hover:to-mentra-blue/80 hover:shadow-lg hover:shadow-mentra-blue/25 active:scale-[0.98] transition-all duration-200 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Schedule Call'}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
