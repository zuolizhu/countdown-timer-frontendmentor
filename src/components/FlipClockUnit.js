import StaticCard from './StaticCard'
import AnimationCard from './AnimationCard'
import getPrevNumber from '../getPrevNumber'
import { useState, useEffect } from 'react'

export default function FlipClockUnit({ number, unit }) {
  const currentNumber = number
  const previousNumber = getPrevNumber(number + 1, unit)
  const [swap, setSwap] = useState(false)

  useEffect(() => {
    setSwap(prev => !prev)
  }, [number])

  const number1 = swap 
    ? previousNumber 
    : currentNumber;
  const number2 = !swap 
    ? previousNumber 
    : currentNumber;

  // swap animations
  const animation1 = swap 
    ? 'fold' 
    : 'unfold';
  const animation2 = !swap 
    ? 'fold' 
    : 'unfold';

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
