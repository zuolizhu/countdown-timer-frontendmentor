import './App.scss';
import dayjs from 'dayjs';
import Countdown from 'react-countdown';
import Heading from './components/Heading';
import FlipClock from './components/FlipClock';

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

  return (
    <div className="App">
      <Heading />
      <Countdown date={countFromDate} renderer={renderer} />
    </div>
  );
}

export default App;
