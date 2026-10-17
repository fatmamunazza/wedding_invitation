import { AnimatedText } from "../components/animation/Animated.jsx";

export default function ClosingScreen() {
  return (
    <div className="screen-card closing-card">
      <AnimatedText as="h2" className="couple-name" delay={70}>
        Munazza Fatma &amp; Tajdar Abbas Rizvi (Tabish)
      </AnimatedText>
      <AnimatedText as="p" className="screen-copy" delay={120}>
        May Allah bless this union with love, happiness and barakah. Ameen.
      </AnimatedText>
      <AnimatedText as="p" className="closing-emphasis" delay={160}>
        Khuda Hafiz &amp; JazakAllah Khair
      </AnimatedText>
      <AnimatedText as="p" className="screen-copy" delay={200}>
        We look forward to celebrating this blessed occasion with you.
      </AnimatedText>
    </div>
  );
}
