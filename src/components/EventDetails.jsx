import { AnimatedButton, AnimatedGroup, AnimatedText } from "./animation/Animated.jsx";

function openMap(location) {
  const query = encodeURIComponent(location);
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${query}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export default function EventDetails({
  title,
  date,
  time,
  venue,
  address,
  mapLocation,
}) {
  return (
    <div className="screen-card venue-card">
      <AnimatedText as="p" className="screen-kicker" delay={50}>
        InshaAllah
      </AnimatedText>
      <AnimatedText as="h2" className="screen-title screen-title--script" delay={90}>
        {title}
      </AnimatedText>
      <AnimatedGroup delay={140}>
        <div className="date-pill">{date}</div>
      </AnimatedGroup>
      <AnimatedGroup delay={180}>
        <p className="event-line">{time}</p>
      </AnimatedGroup>
      <AnimatedGroup delay={220}>
        <p className="event-details">{venue}</p>
      </AnimatedGroup>
      <AnimatedGroup delay={260}>
        <p className="location-block">{address}</p>
      </AnimatedGroup>
      <AnimatedButton
        className="map-button"
        delay={300}
        onClick={() => openMap(mapLocation)}
      >
        View on Map
      </AnimatedButton>
    </div>
  );
}
