import { useEffect, useRef, useState } from 'react';
import { convertMs } from '../js/convertMs';

import { TimerInput } from './TimerInput/';

import { Section } from './Section';
import { TimerView } from './TimerView';
import { PauseButton } from './TimerButtons/PauseButton';
import { ResumeButton } from './TimerButtons/ResumeButton';
import { ResetButton } from './TimerButtons/ResetButton';
// import { Container } from './Container';

const DEFAULT_REMAINING_TIME = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

const App = () => {
  const [initTime, setInitTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(DEFAULT_REMAINING_TIME);
  const [timerIsActive, setTimerIsActive] = useState(false);
  const [timerIsFinished, setTimerIsFinished] = useState(false);

  const timerId = useRef(null);

  const { days, hours, minutes, seconds } = remainingTime;

  const handleTimerDataSet = time => {
    setTimerIsActive(true);
    setTimerIsFinished(false);

    setInitTime(time);
  };

  useEffect(() => {
    convertMs();

    timerId.current = setTimeout(() => {
      if (timerIsActive) {
        setInitTime(initTime => initTime - 1000);
        setRemainingTime(convertMs(initTime));
        console.log('tick');

        if (initTime < 1000) {
          resetTimer();
          setTimerIsFinished(true);
          console.log('Fin');
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, [initTime, timerIsActive]);

  const pauseTimer = () => {
    setTimerIsActive(false);
  };

  const resumeTimer = () => {
    setTimerIsActive(true);
  };

  const resetTimer = () => {
    clearInterval(timerId.current);
    setTimerIsActive(false);
    setInitTime(null);
    setRemainingTime(DEFAULT_REMAINING_TIME);
  };

  console.log(initTime);

  return (
    <Section>
      {!timerIsActive && !initTime && (
        <TimerInput onTimerDataSet={handleTimerDataSet} />
      )}

      {timerIsActive && initTime >= 0 && <PauseButton onPause={pauseTimer} />}

      {!timerIsActive && initTime && (
        <>
          <ResumeButton onResume={resumeTimer} />
          <ResetButton onReset={resetTimer} />
        </>
      )}

      <TimerView remainingTime={remainingTime} />

      {timerIsFinished && <h1>Time is up!</h1>}
    </Section>
  );
};

export default App;
