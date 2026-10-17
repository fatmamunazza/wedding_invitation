import { AnimatedGroup, AnimatedText } from "../components/animation/Animated.jsx";
import JanuaryCalendar from "../components/JanuaryCalendar.jsx";

export default function SaveTheDateScreen() {
  return (
    <div className="screen-card screen-card--wide">
      <AnimatedText as="h2" className="screen-title screen-title--small" delay={70}>
        January 2027
      </AnimatedText>
      <AnimatedGroup delay={110}>
        <JanuaryCalendar />
      </AnimatedGroup>
    </div>
  );
}
