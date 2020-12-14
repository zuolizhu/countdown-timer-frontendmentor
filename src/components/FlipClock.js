import FlipClockUnit from './FlipClockUnit'

export default function FlipClock({ days, hours, minutes, seconds }) {
  
  return (
    <div className="flip-clock">
      <FlipClockUnit number={days} unit={'days'} />
      <FlipClockUnit number={hours} unit={'hours'} />
      <FlipClockUnit number={minutes} unit={'minutes'} />
      <FlipClockUnit number={seconds} unit={'seconds'} />
    </div>
  )
}
