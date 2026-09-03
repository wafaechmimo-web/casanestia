import { useEffect, useRef, useState } from "react";
import { AMBIENCE_URL } from "@/content/casa-nestia";

/**
 * Discreet ambient music.
 * Browsers block autoplay with sound, so playback starts on the visitor's
 * first interaction with the page, then can be muted at any time.
 */
export function Ambience({ label }: { label: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!AMBIENCE_URL) return;
    setReady(true);

    const fadeIn = () => {
      let v = audioRef.current?.volume ?? 0;
      const id = window.setInterval(() => {
        v = Math.min(0.35, v + 0.02);
        if (audioRef.current) audioRef.current.volume = v;
        if (v >= 0.35) window.clearInterval(id);
      }, 120);
    };

    const start = () => {
      const a = audioRef.current;
      if (!a) return;
      a.muted = false;
      a.volume = 0;
      void a
        .play()
        .then(() => {
          setPlaying(true);
          fadeIn();
          remove();
        })
        .catch(() => setPlaying(false));
    };

    const remove = () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
      window.removeEventListener("touchstart", start);
    };

    // Try to autoplay right away (browsers only allow this while muted),
    // then unmute and fade in as soon as it is permitted.
    const a = audioRef.current;
    if (a) {
      a.muted = true;
      a.volume = 0;
      void a
        .play()
        .then(() => {
          setPlaying(true);
          a.muted = false;
          fadeIn();
        })
        .catch(() => setPlaying(false));
    }

    window.addEventListener("pointerdown", start);
    window.addEventListener("keydown", start);
    window.addEventListener("touchstart", start);
    return remove;
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.muted = false;
      a.volume = 0.35;
      void a.play().then(() => setPlaying(true));
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={AMBIENCE_URL} loop preload="auto" playsInline />
      {ready && (
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        aria-pressed={playing}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center border border-rose/50 bg-background/85 text-foreground backdrop-blur-md transition-colors hover:border-rose hover:bg-background"
      >
        <span className="flex items-end gap-[3px]" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`w-[2px] bg-primary ${playing ? "eq-bar" : ""}`}
              style={{
                height: playing ? "14px" : "8px",
                animationDelay: `${i * 0.18}s`,
              }}
            />
          ))}
        </span>
      </button>
      )}
    </>
  );
}
