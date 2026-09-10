import { useState, useRef, useEffect, useCallback } from 'react';

export function useAmbientMusic() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const startMusic = useCallback(() => {
    if (audioCtxRef.current) {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      return;
    }

    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const masterGain = ctx.createGain();
    masterGain.gain.value = isMuted ? 0 : 0.035;
    masterGain.connect(ctx.destination);

    audioCtxRef.current = ctx;
    gainNodeRef.current = masterGain;

    // Pentatonic scale frequencies for gentle meditative Indian chime
    const notes = [261.63, 329.63, 392.00, 329.63, 293.66, 349.23, 440.00, 349.23];
    let noteIndex = 0;

    const playNextNote = () => {
      if (!audioCtxRef.current || !gainNodeRef.current) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(notes[noteIndex % notes.length], now);

      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.22, now + 0.18);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      osc.connect(noteGain);
      noteGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 3);

      noteIndex += 1;
      timerRef.current = window.setTimeout(playNextNote, 1400);
    };

    playNextNote();
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const nextMuted = !prev;
      const ctx = audioCtxRef.current;
      const gain = gainNodeRef.current;
      if (ctx && gain) {
        gain.gain.setTargetAtTime(nextMuted ? 0 : 0.035, ctx.currentTime, 0.08);
      }
      return nextMuted;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return { isMuted, startMusic, toggleMute };
}
