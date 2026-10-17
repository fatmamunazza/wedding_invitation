import { AnimatedText } from "../components/animation/Animated.jsx";

export default function CeremonyScreen() {
  return (
    <div className="screen-card ceremony-card">
      <AnimatedText as="p" className="screen-copy" delay={60}>
        We Request the pleasure of your company at the
      </AnimatedText>
      <AnimatedText as="h2" className="screen-title" delay={90}>
        Wedding Ceremony
      </AnimatedText>
      <AnimatedText as="p" className="screen-kicker" delay={120}>
        OF
      </AnimatedText>
      <AnimatedText as="h3" className="couple-name" delay={150}>
        Munazza Fatma
      </AnimatedText>
      <AnimatedText as="p" className="parentage" delay={180}>
        (D/O Mr. Akbar Ali)
      </AnimatedText>
      <AnimatedText as="p" className="location-block" delay={210}>
        Pandriba Lane, Patna, Bihar
      </AnimatedText>
      <AnimatedText as="p" className="screen-kicker" delay={240}>
        WITH
      </AnimatedText>
      <AnimatedText as="h3" className="couple-name" delay={270}>
        Tajdar Abbas Rizvi
      </AnimatedText>
      <AnimatedText as="p" className="parentage" delay={300}>
        (S/O Late Mr. Zuhair Qain Rizvi)
      </AnimatedText>
      <AnimatedText as="p" className="location-block" delay={330}>
        Qazipara, Bijnor, UP
      </AnimatedText>
    </div>
  );
}
