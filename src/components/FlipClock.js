import FlipClockUnit from "./FlipClockUnit";

export default function FlipClock() {

  return (
    <div className="flip-clock">
      <FlipClockUnit number={8} unit={'days'} />
      <FlipClockUnit number={23} unit={'hours'} />
      <FlipClockUnit number={55} unit={'minutes'} />
      <FlipClockUnit number={41} unit={'seconds'} />
    </div>
  )
}
