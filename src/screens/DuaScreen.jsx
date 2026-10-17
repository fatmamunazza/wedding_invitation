import { AnimatedGroup, AnimatedText } from "../components/animation/Animated.jsx";

export default function DuaScreen() {
  return (
    <div className="screen-card screen-card--wide">
      <AnimatedGroup delay={50}>
        <p className="screen-arabic" dir="rtl" lang="ar">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>
      </AnimatedGroup>
      <AnimatedGroup delay={90} className="dua-block">
        <p className="dua-text" dir="rtl" lang="ar">
          رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ
          وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
        </p>
      </AnimatedGroup>
      <AnimatedText as="p" className="dua-translation" delay={140}>
        “Our Lord, grant us from among our spouses and offspring comfort to our
        eyes and make us leaders of the righteous.” — Quran 25:74
      </AnimatedText>
      <AnimatedText as="p" className="screen-kicker" delay={180}>
        With Best Compliments From
      </AnimatedText>
      <AnimatedText as="p" className="screen-copy" delay={210}>
        Family, Relatives &amp; Friends
      </AnimatedText>
      <AnimatedGroup delay={250} className="dua-block">
        <p className="blessing-line" dir="rtl" lang="ar">
          بارك الله لكما وبارك عليكما وجمع بينكما في خير
        </p>
        <p className="blessing-translation">
          May Allah bless you, shower His blessings upon you and join you
          together in goodness
        </p>
      </AnimatedGroup>
      <AnimatedText as="p" className="closing-emphasis" delay={300}>
        Please keep the couple in your duas
      </AnimatedText>
    </div>
  );
}
