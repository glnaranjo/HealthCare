import { useState, useEffect, useRef } from 'react';
import { Article } from '../../types';
import { useCountry } from '../../context/CountryContext';
import { 
  PhoneCall, 
  X, 
  AlertTriangle, 
  Play, 
  Square, 
  Volume2, 
  VolumeX, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface EmergencyStressModeProps {
  article: Article;
  onClose: () => void;
}

export function EmergencyStressMode({ article, onClose }: EmergencyStressModeProps) {
  const { selectedCountry } = useCountry();
  const [metronomeRunning, setMetronomeRunning] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const [pulseBeat, setPulseBeat] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const isCPR = article.slug === 'cardiac-arrest-cpr';

  // Metronome for CPR at 110 bpm (within 100-120 bpm standard)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (metronomeRunning) {
      const intervalMs = (60 / 110) * 1000; // ~545ms

      interval = setInterval(() => {
        setPulseBeat(true);
        setTimeout(() => setPulseBeat(false), 120);

        // Optional Web Audio beep if not muted
        if (!audioMuted) {
          try {
            if (!audioContextRef.current) {
              const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
              audioContextRef.current = new AudioCtx();
            }
            if (audioContextRef.current.state === 'suspended') {
              audioContextRef.current.resume();
            }
            const osc = audioContextRef.current.createOscillator();
            const gain = audioContextRef.current.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, audioContextRef.current.currentTime);
            gain.gain.setValueAtTime(0.15, audioContextRef.current.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(audioContextRef.current.destination);
            osc.start();
            osc.stop(audioContextRef.current.currentTime + 0.08);
          } catch {
            // Audio not allowed without user gesture
          }
        }
      }, intervalMs);
    }

    return () => {
      clearInterval(interval);
    };
  }, [metronomeRunning, audioMuted]);

  // Clean audio context on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white overflow-y-auto flex flex-col justify-between">
      {/* Top Urgent Bar */}
      <div className="sticky top-0 z-20 bg-red-600 px-4 py-3 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-300 animate-pulse" />
          <span className="font-black text-sm uppercase tracking-wider text-white">
            ACTIVE EMERGENCY MODE • {article.title}
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 bg-black/30 hover:bg-black/50 text-white px-3 py-1.5 rounded-xl text-xs font-bold transition border border-white/20"
        >
          <span>Exit Stress Mode</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10 space-y-8 flex-1 w-full">
        
        {/* GIANT CALL EMERGENCY BUTTON */}
        <div className="bg-red-950/80 border-2 border-red-500 rounded-3xl p-6 text-center space-y-3 shadow-2xl">
          <span className="text-xs font-black uppercase tracking-widest text-red-300 block">
            Step 0: Summon Professional Dispatch Right Now
          </span>
          <a
            href={`tel:${selectedCountry.ambulance || selectedCountry.generalEmergency}`}
            className="w-full inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-black py-5 px-6 rounded-2xl text-2xl sm:text-3xl tracking-tight shadow-xl hover:scale-[1.02] active:scale-[0.98] transition"
          >
            <PhoneCall className="w-8 h-8 animate-bounce" />
            <span>DIAL {selectedCountry.generalEmergency} ({selectedCountry.countryCode})</span>
          </a>
          <p className="text-xs text-red-200">
            Put call on speaker phone and continue actions while medics are en route.
          </p>
        </div>

        {/* CPR METRONOME WIDGET (If viewing CPR) */}
        {isCPR && (
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  CPR Rhythm Guide (110 BPM)
                </span>
                <p className="text-lg font-extrabold text-white">
                  Push hard and fast to the beat
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAudioMuted(!audioMuted)}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title={audioMuted ? "Unmute click sound" : "Mute click sound"}
                  aria-label="Toggle metronome sound"
                >
                  {audioMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-teal-400" />}
                </button>

                <button
                  onClick={() => setMetronomeRunning(!metronomeRunning)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-black text-sm transition ${
                    metronomeRunning 
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950' 
                      : 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md'
                  }`}
                >
                  {metronomeRunning ? (
                    <>
                      <Square className="w-4 h-4 fill-current" />
                      <span>Stop Beat</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Start Rhythm Beat</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Visual Pulsing Beat Indicator */}
            <div className="flex items-center justify-center py-4 bg-slate-950 rounded-2xl border border-slate-800">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-sm font-black transition-all duration-100 ${
                pulseBeat 
                  ? 'bg-red-500 text-white scale-125 shadow-lg shadow-red-500/50' 
                  : 'bg-slate-800 text-slate-400 scale-100'
              }`}>
                {pulseBeat ? 'PUSH!' : '110 BPM'}
              </div>
            </div>
          </div>
        )}

        {/* ULTRA-SIMPLIFIED LARGE STEP CARDS */}
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">
            Immediate Action Sequence:
          </h2>

          {article.whatToDo.map((step) => (
            <div
              key={step.step}
              className="bg-slate-900 border-2 border-slate-700 p-5 sm:p-6 rounded-3xl space-y-2"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-teal-500 text-slate-950 font-black text-lg flex items-center justify-center flex-shrink-0">
                  {step.step}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {step.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed pl-12">
                {step.description}
              </p>
              {step.warning && (
                <div className="ml-12 p-3 rounded-xl bg-amber-950/60 border border-amber-600/80 text-amber-200 text-xs font-bold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>DO NOT: {step.warning}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CRITICAL PROHIBITIONS LIST */}
        <div className="bg-red-950/40 border border-red-800 rounded-3xl p-6 space-y-3">
          <h3 className="text-sm font-black uppercase tracking-wider text-red-400 flex items-center gap-2">
            <X className="w-5 h-5 text-red-500" />
            Strictly Prohibited in this Emergency:
          </h3>
          <ul className="space-y-2 text-sm text-red-100 font-semibold pl-2">
            {article.whatNotToDo.slice(0, 3).map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="sticky bottom-0 bg-slate-900 border-t border-slate-800 p-4 text-center">
        <button
          onClick={onClose}
          className="w-full max-w-md mx-auto bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition flex items-center justify-center gap-2"
        >
          <span>Return to Standard Educational Guide</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

