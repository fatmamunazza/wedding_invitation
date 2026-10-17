import { AnimatedText } from "../components/animation/Animated.jsx";

export default function NikkahIntroductionScreen() {
  return (
    <div className="screen-card ceremony-card">
      <AnimatedText as="p" className="screen-arabic" delay={70} dir="rtl" lang="ar">
        في الدنيا والآخرة
      </AnimatedText>
      <AnimatedText as="p" className="screen-translation" delay={110}>
        “In this world and the hereafter”
      </AnimatedText>
      <AnimatedText as="p" className="screen-kicker" delay={150}>
        The Nikkah of
      </AnimatedText>
      <AnimatedText as="h2" className="screen-title screen-title--small" delay={180}>
        Munazza &amp; Tajdar
      </AnimatedText>
    </div>
  );
}
