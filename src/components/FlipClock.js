import { useEffect, useState } from 'react'
import FlipClockUnit from './FlipClockUnit'

export default function FlipClock({ days, hours, minutes, seconds }) {
  const [swapSeconds, setSwapSeconds] = useState(true)

  useEffect(() => {
    setSwapSeconds(oldSwap => !oldSwap)
  }, [seconds])
  
  return (
    <div className="flip-clock">
      <FlipClockUnit number={days} unit={'days'} />
      <FlipClockUnit number={hours} unit={'hours'} />
      <FlipClockUnit number={minutes} unit={'minutes'} />
      <FlipClockUnit number={seconds} swap={swapSeconds} unit={'seconds'} />
    </div>
  )
}
