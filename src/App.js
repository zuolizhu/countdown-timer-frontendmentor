import './App.scss';
import dayjs from 'dayjs';
import Countdown from 'react-countdown';
import Heading from './components/Heading';
import FlipClock from './components/FlipClock';
import { useRef, useEffect, useState } from 'react';

function App() {
  const countFromDate = dayjs()
    .add(8, 'day')
    .add(23, 'hour')
    .add(55, 'minute')
    .add(41, 'second')
    .toDate();
  
  const Completionist = () => <span>You are good to go!</span>
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) return Completionist;
    return (<FlipClock days={days} hours={hours} minutes={minutes} seconds={seconds} />)
  }

  const [isStarted, setIsStarted] = useState(false);

  const CountdownRef = useRef();

  const handleStartClick = () => {
    CountdownRef.current.start()
    setIsStarted(true)
  }

  useEffect(() => {
    CountdownRef.current.pause()
    console.log('countdown is paused by default')
  }, [])

  return (
    <div className="App">
      <Heading />
      <Countdown ref={CountdownRef} date={countFromDate} renderer={renderer} />
      <div className="countdown-contrl">
        <button disabled={isStarted} onClick={handleStartClick}>{isStarted ? 'countdown started' : 'start countdown'}</button>
      </div>
    </div>
  );
}

export default App;
