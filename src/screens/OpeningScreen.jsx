import { AnimatedGroup } from "../components/animation/Animated.jsx";

export default function OpeningScreen() {
  return (
    <div className="screen-card">
      <AnimatedGroup delay={80}>
        <p className="screen-arabic" dir="rtl" lang="ar">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>
      </AnimatedGroup>
      <AnimatedGroup delay={120}>
        <p className="screen-verse" dir="rtl" lang="ar">
          وَخَلَقْنَاكُمْ أَزْوَاجًا
        </p>
      </AnimatedGroup>
      <AnimatedGroup delay={160}>
        <p className="screen-reference">SURAH AN-NABA · 78:8</p>
      </AnimatedGroup>
      <AnimatedGroup delay={200}>
        <p className="screen-translation">
          &ldquo;And We created you in pairs.&rdquo;
        </p>
      </AnimatedGroup>
      <AnimatedGroup delay={240}>
        <p className="screen-copy screen-blessing">
          In the Name of Allah, the Most Beneficent, the Most Merciful, and with
          the Blessings of 14 Masoomeen (a.s.) &amp; their Last Hujjat (a.t.f.s.)
        </p>
      </AnimatedGroup>
      <AnimatedGroup delay={280}>
        <div className="logo-mark" aria-label="M T monogram">
          M T
        </div>
      </AnimatedGroup>
      <AnimatedGroup delay={320}>
        <p className="screen-closing">
          With prayers for a life filled with love and mercy
        </p>
      </AnimatedGroup>
    </div>
  );
}
