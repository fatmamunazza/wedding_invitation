import { useCallback, useRef, useState } from "react";
import InvitationBackground from "./components/InvitationBackground.jsx";
import InvitationNavigation from "./components/InvitationNavigation.jsx";
import MusicController from "./components/MusicController.jsx";
import InvitationOpening from "./components/opening/InvitationOpening.jsx";
import { ASSETS, SCREENS } from "./data/invitation.js";
import InvitationScreen from "./screens/InvitationScreen.jsx";

export default function App() {
  const audioRef = useRef(null);
  const [hasOpened, setHasOpened] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const currentScreen = SCREENS[currentIndex];

  const handleOpeningComplete = useCallback(() => {
    setHasOpened(true);
    setCurrentIndex(0);
    setAnimationKey((key) => key + 1);
  }, []);

  const handleReplayOpening = useCallback(() => {
    setHasOpened(false);
    setCurrentIndex(0);
    setAnimationKey(0);
  }, []);

  const navigateTo = useCallback((nextIndex) => {
    if (nextIndex < 0 || nextIndex >= SCREENS.length) return;
    setCurrentIndex(nextIndex);
    setAnimationKey((key) => key + 1);
  }, []);

  return (
    <main className="app-shell">
      <audio ref={audioRef} src={ASSETS.music} loop preload="auto" />

      {!hasOpened && (
        <InvitationOpening
          onComplete={handleOpeningComplete}
          onReplay={handleReplayOpening}
        />
      )}

      {hasOpened && (
        <div className="invitation-app">
          <InvitationBackground background={currentScreen.background} />
          <div className="screen-stage" aria-live="polite">
            <div className="screen-shell">
              <div className="screen-page">
                <div
                  className="animated-screen"
                  key={`${currentScreen.id}-${animationKey}`}
                >
                  <InvitationScreen screenId={currentScreen.id} />
                </div>
              </div>
            </div>
          </div>
          <InvitationNavigation
            currentIndex={currentIndex}
            screenCount={SCREENS.length}
            onNavigate={navigateTo}
          />
        </div>
      )}

      <MusicController audioRef={audioRef} />
      <div className="corner-caption" aria-hidden="true">
        <span>MADE WITH LOVE</span>
        <span className="caption-dot">✦</span>
      </div>
      {hasOpened && (
        <div className="screen-reader-note" role="status">
          Invitation opened.
        </div>
      )}
    </main>
  );
}
