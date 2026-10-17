import { useEffect, useState } from "react";
import { Music2, Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function MusicController({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = 0.55;
    const onPlay = () => {
      setIsPlaying(true);
      setNeedsGesture(false);
    };
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    const attempt = audio.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => setNeedsGesture(true));
    }

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [audioRef]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setNeedsGesture(false);
      } catch {
        setNeedsGesture(true);
      }
    } else {
      audio.pause();
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <div className="music-controller" aria-label="Wedding music controls">
      <span className={`music-indicator ${isPlaying && !isMuted ? "is-playing" : ""}`}>
        <Music2 size={16} aria-hidden="true" />
      </span>
      <button
        className="music-button"
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
      >
        {isPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        <span>
          {isPlaying ? "Pause music" : needsGesture ? "Tap to play" : "Play music"}
        </span>
      </button>
      <button
        className="icon-button"
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute wedding music" : "Mute wedding music"}
      >
        {isMuted ? <VolumeX size={17} aria-hidden="true" /> : <Volume2 size={17} aria-hidden="true" />}
      </button>
    </div>
  );
}
