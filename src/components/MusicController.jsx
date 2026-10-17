export default function MusicController({ audio, available, playing, onPlayingChange }) {
  if (!available) return null;

  const toggle = async () => {
    if (!audio) return;
    if (playing) {
      audio.pause();
      onPlayingChange(false);
      return;
    }

    try {
      await audio.play();
      onPlayingChange(true);
    } catch {
      onPlayingChange(false);
    }
  };

  return (
    <button
      className="music-control"
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      aria-pressed={playing}
    >
      <span className={playing ? "is-playing" : ""} aria-hidden="true">
        {playing ? '◼' : '♪'}
      </span>
    </button>
  );
}
