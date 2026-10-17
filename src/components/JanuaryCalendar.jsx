import { AnimatedGroup } from "./animation/Animated.jsx";
import { JANUARY_2027_ROWS } from "../data/invitation.js";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function JanuaryCalendar() {
  return (
    <div className="calendar-wrap">
      <p className="calendar-month">January 2027</p>
      <div className="calendar-grid" aria-label="January 2027 calendar">
        {WEEKDAYS.map((day) => (
          <div className="calendar-weekday" key={day}>
            {day}
          </div>
        ))}
        {JANUARY_2027_ROWS.flat().map((day, index) => {
          const isEmpty = day === 0;
          const isHighlighted = day === 15 || day === 16;

          return (
            <div
              className={`calendar-day ${isEmpty ? "is-empty" : ""} ${
                isHighlighted ? "is-highlighted" : ""
              }`}
              key={`day-${index}`}
              aria-label={isEmpty ? undefined : `Date ${day}`}
              aria-hidden={isEmpty}
            >
              {isEmpty ? "" : day}
            </div>
          );
        })}
      </div>
      <div className="calendar-events">
        <AnimatedGroup as="span" delay={150} className="event-tag">
          Friday, 15 January — Haldi
        </AnimatedGroup>
        <AnimatedGroup as="span" delay={220} className="event-tag">
          Saturday, 16 January — Baraat
        </AnimatedGroup>
      </div>
    </div>
  );
}
