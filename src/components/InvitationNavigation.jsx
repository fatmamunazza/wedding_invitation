import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InvitationNavigation({
  currentIndex,
  screenCount,
  onNavigate,
}) {
  const isLastScreen = currentIndex === screenCount - 1;

  return (
    <nav className="screen-nav" aria-label="Invitation navigation">
      <button
        type="button"
        className="nav-button"
        disabled={currentIndex === 0}
        onClick={() => onNavigate(currentIndex - 1)}
      >
        <ChevronLeft size={15} aria-hidden="true" />
        Prev
      </button>
      <span className="nav-counter" aria-current="step">
        {currentIndex + 1} / {screenCount}
      </span>
      <button
        type="button"
        className="nav-button"
        onClick={() => onNavigate(isLastScreen ? 0 : currentIndex + 1)}
      >
        {isLastScreen ? "Restart" : "Next"}
        {!isLastScreen && <ChevronRight size={15} aria-hidden="true" />}
      </button>
    </nav>
  );
}
