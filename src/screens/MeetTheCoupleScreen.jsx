import { AnimatedText } from "../components/animation/Animated.jsx";

export default function MeetTheCoupleScreen() {
  return (
    <div className="screen-card couple-card">
      <AnimatedText as="p" className="screen-arabic" delay={70} dir="rtl" lang="ur">
        منازہ فاطمہ اور تجدار عباس رضوی
      </AnimatedText>
      <AnimatedText as="h2" className="couple-name" delay={110}>
        Munazza Fatma
      </AnimatedText>
      <AnimatedText as="p" className="couple-separator" delay={140}>
        and
      </AnimatedText>
      <AnimatedText as="h2" className="couple-name" delay={170}>
        Tajdar Abbas Rizvi (Tabish)
      </AnimatedText>
      <AnimatedText as="p" className="screen-copy" delay={200}>
        Are going to say “Qubool Hai”
      </AnimatedText>
    </div>
  );
}
