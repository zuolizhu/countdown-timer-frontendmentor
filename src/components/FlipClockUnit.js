import StaticCard from './StaticCard'
import AnimationCard from './AnimationCard'
import getCalibratedNumber from '../getCalibratedNumber'

export default function FlipClockUnit({ number, swap = true, unit }) {
  const currentNumber = number
  const previousNumber = getCalibratedNumber(number - 1, unit)
  const number1 = swap ? previousNumber : currentNumber
  const number2 = swap ? currentNumber : previousNumber
  const animation1 = swap ? 'fold' : 'unfold'
  const animation2 = swap ? 'unfold' : 'fold'

  return (
    <div className="flip-clock__unit-container">
      <div className="flip-clock__unit">
        <div className="flip-clock__unit__hole flip-clock__unit__hole--left"></div>
        <div className="flip-clock__unit__hole flip-clock__unit__hole--right"></div>
        <div className="flip-clock__unit__bar"></div>
        <StaticCard position={'upper'} number={currentNumber} />
        <StaticCard position={'lower'} number={previousNumber} />
        <AnimationCard number={number1} animation={animation1} />
        <AnimationCard number={number2} animation={animation2} />
      </div>
      <div className="flip-clock__unit-shadow"></div>
      <p className="flip-clock__unit-name t-unit-name">{unit}</p>
    </div>
  )
}
