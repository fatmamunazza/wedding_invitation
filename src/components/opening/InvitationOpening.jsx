import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { ASSETS } from "../../data/invitation.js";

const OPENING_DURATION = 3600;

export default function InvitationOpening({ onComplete, onReplay }) {
  const [phase, setPhase] = useState("closed");
  const completedRef = useRef(false);

  const startOpening = useCallback(() => {
    if (phase === "opening") return;
    completedRef.current = false;
    setPhase("opening");
  }, [phase]);

  useEffect(() => {
    if (phase !== "opening") return undefined;

    const timer = window.setTimeout(() => {
      setPhase("opened");
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
    }, OPENING_DURATION);

    return () => window.clearTimeout(timer);
  }, [phase, onComplete]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduceMotion || phase !== "closed") return undefined;

    const timer = window.setTimeout(() => {
      setPhase("opened");
      onComplete();
    }, 700);

    return () => window.clearTimeout(timer);
  }, [phase, onComplete]);

  const replay = () => {
    setPhase("closed");
    onReplay();
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setPhase("opening"));
    });
  };

  return (
    <section
      className={`opening-scene phase-${phase}`}
      aria-label="Wedding invitation opening"
    >
      <div className="scene-background" aria-hidden="true" />
      <div className="background-glow" aria-hidden="true" />

      {phase !== "opened" && (
        <div className="invitation-panels" aria-hidden={phase === "opening"}>
          <div className="panel-perspective">
            <img
              className="invitation-panel panel-left"
              src={ASSETS.leftPanel}
              alt=""
              draggable="false"
            />
          </div>
          <div className="panel-perspective">
            <img
              className="invitation-panel panel-right"
              src={ASSETS.rightPanel}
              alt=""
              draggable="false"
            />
          </div>
        </div>
      )}

      {phase !== "opened" && (
        <img
          className="invitation-seal"
          src={ASSETS.seal}
          alt=""
          draggable="false"
        />
      )}

      {phase === "closed" && (
        <div className="opening-hint">
          <span className="hint-line" />
          <p>Open your invitation</p>
          <button
            type="button"
            className="open-invitation-button"
            onClick={startOpening}
          >
            Open invitation <span aria-hidden="true">↗</span>
          </button>
          <span className="hint-line" />
        </div>
      )}

      {phase === "opening" && (
        <div className="opening-status" aria-live="polite">
          With love and blessings…
        </div>
      )}

      {phase === "opened" && (
        <div className="opened-message">
          <p className="eyebrow">You are cordially invited</p>
          <h1>Our Wedding</h1>
          <p className="opened-subtitle">
            A beautiful beginning, shared with you.
          </p>
          <button type="button" className="replay-button" onClick={replay}>
            <RotateCcw size={14} aria-hidden="true" /> Replay opening
          </button>
        </div>
      )}
    </section>
  );
}
