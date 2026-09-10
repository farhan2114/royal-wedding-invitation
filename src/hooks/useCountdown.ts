import { useState, useEffect } from 'react';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(targetIso: string = "2027-02-21T17:00:00+05:30") {
  const calculateRemaining = (): CountdownTime => {
    const diff = Math.max(0, new Date(targetIso).getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateRemaining());
    }, 1000);
    return () => window.clearInterval(timer);
  }, [targetIso]);

  return timeLeft;
}
