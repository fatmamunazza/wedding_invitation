import { useCallback, useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX, Pause, Play, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import "./styles/opening.css";
import "./styles/invitation.css";

const ASSETS = {
  mobileBackground: "/assets/invitation-background.png",
  desktopBackground: "/assets/invitation-desktop-background.jpg",
  leftPanel: "/assets/left-side.png",
  rightPanel: "/assets/right-side.png",
  ribbon: "/assets/ribbon.png",
  seal: "/assets/seal.png",
  music: "/assets/wedding-music.mp3",
};

const BACKGROUNDS = {
  backgroundImage1: "/assets/invitation-background.png",
  backgroundImage2: "/assets/details-background.jpg",
  backgroundImage3: "/assets/blessing-background.jpg",
  backgroundImage4: "/assets/WhatsApp Image 2026-10-17 at 4.42.31 PM.jpg",
};

const OPENING_DURATION = 3600;
const CALENDAR_ROWS = [
  [0, 0, 0, 0, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
];

const SCREENS = [
  {
    id: "screen-1",
    background: "backgroundImage1",
    sectionLabel: "Opening",
  },
  {
    id: "screen-2",
    background: "backgroundImage2",
    sectionLabel: "Wedding Ceremony",
  },
  {
    id: "screen-3",
    background: "backgroundImage3",
    sectionLabel: "Save the Date",
  },
  {
    id: "screen-4",
    background: "backgroundImage4",
    sectionLabel: "Haldi",
  },
  {
    id: "screen-5",
    background: "backgroundImage3",
    sectionLabel: "Meet the Couple",
  },
  {
    id: "screen-6",
    background: "backgroundImage3",
    sectionLabel: "Munazza & Tajdar",
  },
  {
    id: "screen-7",
    background: "backgroundImage3",
    sectionLabel: "Nikaah",
  },
  {
    id: "screen-8",
    background: "backgroundImage3",
    sectionLabel: "Dua",
  },
  {
    id: "screen-9",
    background: "backgroundImage3",
    sectionLabel: "Closing",
  },
];

function openMap(location) {
  const query = encodeURIComponent(location);
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank", "noopener,noreferrer");
}

function MusicController({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

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
      <button className="music-button" type="button" onClick={togglePlayback}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}>
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        <span>{isPlaying ? "Pause music" : "Play music"}</span>
      </button>
      <button className="icon-button" type="button" onClick={toggleMute}
        aria-label={isMuted ? "Unmute wedding music" : "Mute wedding music"}>
        {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
      </button>
    </div>
  );
}

function InvitationOpening({ onComplete, onReplay }) {
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
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion && phase === "closed") {
      const timer = window.setTimeout(() => {
        setPhase("opened");
        onComplete();
      }, 700);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [phase, onComplete]);

  const replay = () => {
    setPhase("closed");
    onReplay();
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setPhase("opening"));
    });
  };

  return (
    <section className={`opening-scene phase-${phase}`} aria-label="Wedding invitation opening">
      <div className="scene-background" aria-hidden="true" />
      <div className="background-glow" aria-hidden="true" />

      {phase !== "opened" && (
        <div className="invitation-panels" aria-hidden={phase === "opening"}>
          <div className="panel-perspective">
            <img className="invitation-panel panel-left" src={ASSETS.leftPanel} alt="" draggable="false" />
          </div>
          <div className="panel-perspective">
            <img className="invitation-panel panel-right" src={ASSETS.rightPanel} alt="" draggable="false" />
          </div>
        </div>
      )}

      {phase !== "opened" && (
        <>
          <img className="invitation-seal" src={ASSETS.seal} alt="" draggable="false" />
        </>
      )}

      {phase === "closed" && (
        <div className="opening-hint">
          <span className="hint-line" />
          <p>Open your invitation</p>
          <button type="button" className="open-invitation-button" onClick={startOpening}>
            Open invitation <span aria-hidden="true">↗</span>
          </button>
          <span className="hint-line" />
        </div>
      )}

      {phase === "opening" && (
        <div className="opening-status" aria-live="polite">With love and blessings…</div>
      )}

      {phase === "opened" && (
        <div className="opened-message">
          <p className="eyebrow">You are cordially invited</p>
          <h1>Our Wedding</h1>
          <p className="opened-subtitle">A beautiful beginning, shared with you.</p>
          <button type="button" className="replay-button" onClick={replay}>
            <RotateCcw size={14} /> Replay opening
          </button>
        </div>
      )}
    </section>
  );
}

function AnimatedGroup({ as: Component = "div", children, className = "", delay = 0, style }) {
  return (
    <Component
      className={`animated-group ${className}`.trim()}
      style={{ ...style, "--animation-delay": `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

function AnimatedText({ as: Component = "span", children, className = "", delay = 0, style }) {
  return (
    <Component
      className={`animated-text ${className}`.trim()}
      style={{ ...style, "--animation-delay": `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

function AnimatedImage({ src, alt = "", className = "", delay = 0, style, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`animated-image ${className}`.trim()}
      style={{ ...style, "--animation-delay": `${delay}ms` }}
      {...props}
    />
  );
}

function AnimatedButton({ children, className = "", delay = 0, style, ...props }) {
  return (
    <button
      className={`animated-button ${className}`.trim()}
      style={{ ...style, "--animation-delay": `${delay}ms` }}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

function InvitationBackground({ background }) {
  const value = BACKGROUNDS[background] || BACKGROUNDS.backgroundImage1;
  return <div className="invitation-background" style={{ backgroundImage: `url("${value}")` }} aria-hidden="true" />;
}

function CalendarDisplay() {
  return (
    <div className="calendar-wrap">
      <p className="calendar-month">January 2027</p>
      <div className="calendar-grid" aria-label="January 2027 calendar">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div className="calendar-weekday" key={day}>{day}</div>
        ))}
        {CALENDAR_ROWS.flat().map((day, index) => {
          const isEmpty = day === 0;
          const isHighlighted = day === 15 || day === 16;
          return (
            <div
              className={`calendar-day ${isEmpty ? "is-empty" : ""} ${isHighlighted ? "is-highlighted" : ""}`}
              key={`day-${index}`}
              aria-label={isEmpty ? "Empty date" : `Date ${day}`}
            >
              {isEmpty ? "" : day}
            </div>
          );
        })}
      </div>
      <div className="calendar-events">
        <span className="event-tag">Friday, 15 January — Haldi</span>
        <span className="event-tag">Saturday, 16 January — Baraat</span>
      </div>
    </div>
  );
}

function ScreenRenderer({ screen }) {
  switch (screen.id) {
    case "screen-1":
      return (
        <div className="screen-card">
          <AnimatedGroup delay={80}><p className="screen-arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p></AnimatedGroup>
          <AnimatedGroup delay={120}><p className="screen-verse">وَخَلَقْنَاكُمْ أَزْوَاجًا</p></AnimatedGroup>
          <AnimatedGroup delay={160}><p className="screen-reference">SURAH AN-NABA · 78:8</p></AnimatedGroup>
          <AnimatedGroup delay={200}><p className="screen-translation">&ldquo;And We created you in pairs.&rdquo;</p></AnimatedGroup>
          <AnimatedGroup delay={240}><p className="screen-copy screen-blessing">In the Name of Allah, the Most Beneficent, the Most Merciful, and with the Blessings of 14 Masoomeen (a.s.) &amp; their Last Hujjat (a.t.f.s.)</p></AnimatedGroup>
          <AnimatedGroup delay={280}><div className="logo-mark" aria-label="M T monogram">M T</div></AnimatedGroup>
          <AnimatedGroup delay={320}><p className="screen-closing">With prayers for a life filled with love and mercy</p></AnimatedGroup>
        </div>
      );
    case "screen-2":
      return (
        <div className="screen-card ceremony-card">
          <AnimatedText as="p" className="screen-copy" delay={60}>We Request the pleasure of your company at the</AnimatedText>
          <AnimatedText as="h2" className="screen-title" delay={90}>Wedding Ceremony</AnimatedText>
          <AnimatedText as="p" className="screen-kicker" delay={120}>OF</AnimatedText>
          <AnimatedText as="h3" className="couple-name" delay={150}>Munazza Fatma</AnimatedText>
          <AnimatedText as="p" className="parentage" delay={180}>(D/O Mr. Akbar Ali)</AnimatedText>
          <AnimatedText as="p" className="location-block" delay={210}>Pandriba Lane, Patna, Bihar</AnimatedText>
          <AnimatedText as="p" className="screen-kicker" delay={240}>WITH</AnimatedText>
          <AnimatedText as="h3" className="couple-name" delay={270}>Tajdar Abbas Rizvi</AnimatedText>
          <AnimatedText as="p" className="parentage" delay={300}>(S/O Late Mr. Zuhair Qain Rizvi)</AnimatedText>
          <AnimatedText as="p" className="location-block" delay={330}>Qazipara, Bijnor, UP</AnimatedText>
        </div>
      );
    case "screen-3":
      return (
        <div className="screen-card screen-card--wide">
          <AnimatedText as="h2" className="screen-title screen-title--small" delay={70}>January 2027</AnimatedText>
          <AnimatedGroup delay={110}><CalendarDisplay /></AnimatedGroup>
        </div>
      );
    case "screen-4":
      return (
        <div className="screen-card venue-card">
          <AnimatedText as="p" className="screen-kicker" delay={50}>InshaAllah</AnimatedText>
          <AnimatedText as="h2" className="screen-title screen-title--script" delay={90}>Haldi</AnimatedText>
          <AnimatedGroup delay={140}><div className="date-pill">15 January 2027</div></AnimatedGroup>
          <AnimatedGroup delay={180}><p className="event-line">Time : 07:00 PM</p></AnimatedGroup>
          <AnimatedGroup delay={220}><p className="event-details">At our residence</p></AnimatedGroup>
          <AnimatedGroup delay={260}><p className="location-block">Hamam Pandriba Lane, Patna, Bihar 800008</p></AnimatedGroup>
          <AnimatedButton
            className="map-button"
            delay={300}
            onClick={() => openMap("Hamam Pandriba Lane, Patna, Bihar 800008")}
          >
            View on Map
          </AnimatedButton>
        </div>
      );
    case "screen-5":
      return (
        <div className="screen-card couple-card">
          <AnimatedText as="p" className="screen-arabic" delay={70}>منازہ فاطمہ اور تجدار عباس رضوی</AnimatedText>
          <AnimatedText as="h2" className="couple-name" delay={110}>Munazza Fatma</AnimatedText>
          <AnimatedText as="p" className="couple-separator" delay={140}>and</AnimatedText>
          <AnimatedText as="h2" className="couple-name" delay={170}>Tajdar Abbas Rizvi (Tabish)</AnimatedText>
          <AnimatedText as="p" className="screen-copy" delay={200}>Are going to say “Qubool Hai”</AnimatedText>
        </div>
      );
    case "screen-6":
      return (
        <div className="screen-card ceremony-card">
          <AnimatedText as="p" className="screen-arabic" delay={70}>في الدنيا والآخرة</AnimatedText>
          <AnimatedText as="p" className="screen-translation" delay={110}>“In this world and the hereafter”</AnimatedText>
          <AnimatedText as="p" className="screen-kicker" delay={150}>The Nikkah of</AnimatedText>
          <AnimatedText as="h2" className="screen-title screen-title--small" delay={180}>Munazza &amp; Tajdar</AnimatedText>
        </div>
      );
    case "screen-7":
      return (
        <div className="screen-card venue-card">
          <AnimatedText as="p" className="screen-kicker" delay={50}>InshaAllah</AnimatedText>
          <AnimatedText as="h2" className="screen-title screen-title--script" delay={90}>Nikaah</AnimatedText>
          <AnimatedGroup delay={140}><div className="date-pill">16 January 2027</div></AnimatedGroup>
          <AnimatedGroup delay={180}><p className="event-line">Time : 08:00 PM</p></AnimatedGroup>
          <AnimatedGroup delay={220}><p className="event-details">Parmeshwar Banquet Hall</p></AnimatedGroup>
          <AnimatedGroup delay={260}><p className="location-block">Kumhrar Gomti, Sandalpur, Patna, Bihar 800006</p></AnimatedGroup>
          <AnimatedButton
            className="map-button"
            delay={300}
            onClick={() => openMap("Parmeshwar Banquet Hall, Kumhrar Gomti, Sandalpur, Patna, Bihar 800006")}
          >
            View on Map
          </AnimatedButton>
        </div>
      );
    case "screen-8":
      return (
        <div className="screen-card screen-card--wide">
          <AnimatedGroup delay={50}><p className="screen-arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p></AnimatedGroup>
          <AnimatedGroup delay={90} className="dua-block">
            <p className="dua-text">رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا</p>
          </AnimatedGroup>
          <AnimatedText as="p" className="dua-translation" delay={140}>“Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us leaders of the righteous.” — Quran 25:74</AnimatedText>
          <AnimatedText as="p" className="screen-kicker" delay={180}>With Best Compliments From</AnimatedText>
          <AnimatedText as="p" className="screen-copy" delay={210}>Family, Relatives &amp; Friends</AnimatedText>
          <AnimatedGroup delay={250} className="dua-block">
            <p className="blessing-title">Arabic blessing</p>
            <p className="blessing-line">بارك الله لكما وبارك عليكما وجمع بينكما في خير</p>
            <p className="blessing-translation">May Allah bless you, shower His blessings upon you and join you together in goodness</p>
          </AnimatedGroup>
          <AnimatedText as="p" className="closing-emphasis" delay={300}>Please keep the couple in your duas</AnimatedText>
        </div>
      );
    case "screen-9":
      return (
        <div className="screen-card closing-card">
          <AnimatedText as="h2" className="couple-name" delay={70}>Munazza Fatma &amp; Tajdar Abbas Rizvi (Tabish)</AnimatedText>
          <AnimatedText as="p" className="screen-copy" delay={120}>May Allah bless this union with love, happiness and barakah. Ameen.</AnimatedText>
          <AnimatedText as="p" className="closing-emphasis" delay={160}>Khuda Hafiz &amp; JazakAllah Khair</AnimatedText>
          <AnimatedText as="p" className="screen-copy" delay={200}>We look forward to celebrating this blessed occasion with you.</AnimatedText>
        </div>
      );
    default:
      return null;
  }
}

export default function App() {
  const audioRef = useRef(null);
  const [hasOpened, setHasOpened] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const handleComplete = useCallback(() => {
    setHasOpened(true);
    setCurrentIndex(0);
    setAnimationKey((value) => value + 1);
  }, []);

  const handleReplay = useCallback(() => {
    setHasOpened(false);
    setCurrentIndex(0);
    setAnimationKey(0);
  }, []);

  const goToScreen = useCallback((nextIndex) => {
    if (nextIndex < 0 || nextIndex >= SCREENS.length) {
      return;
    }
    setCurrentIndex(nextIndex);
    setAnimationKey((value) => value + 1);
  }, []);

  const currentScreen = SCREENS[currentIndex];

  return (
    <main className="app-shell">
      <audio ref={audioRef} src={ASSETS.music} loop preload="auto" />
      {!hasOpened && <InvitationOpening onComplete={handleComplete} onReplay={handleReplay} />}

      {hasOpened && (
        <div className="invitation-app">
          <InvitationBackground background={currentScreen.background} />

          <div className="screen-stage" aria-live="polite">
            <div className="screen-shell">
              <div className="screen-page">
                <div className="animated-screen" key={`${currentScreen.id}-${animationKey}`}>
                  <ScreenRenderer screen={currentScreen} />
                </div>
              </div>
            </div>
          </div>

          <div className="screen-nav" aria-label="Invitation navigation">
            <button
              type="button"
              className="nav-button"
              disabled={currentIndex === 0}
              onClick={() => goToScreen(currentIndex - 1)}
            >
              <ChevronLeft size={15} /> Prev
            </button>
            <span className="nav-counter">{currentIndex + 1} / {SCREENS.length}</span>
            <button
              type="button"
              className="nav-button"
              onClick={() => (currentIndex === SCREENS.length - 1 ? goToScreen(0) : goToScreen(currentIndex + 1))}
            >
              {currentIndex === SCREENS.length - 1 ? "Restart" : "Next"}
              {currentIndex !== SCREENS.length - 1 && <ChevronRight size={15} />}
            </button>
          </div>
        </div>
      )}

      <MusicController audioRef={audioRef} />
      <div className="corner-caption" aria-hidden="true">
        <span>MADE WITH LOVE</span>
        <span className="caption-dot">✦</span>
      </div>
      {hasOpened && <div className="screen-reader-note" role="status">Invitation opened.</div>}
    </main>
  );
}
