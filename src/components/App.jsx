import { useEffect, useRef, useState } from 'react';
import { convertMs } from '../js/convertMs';

import { Section } from './Section';
import { TimerInput } from './TimerInput/';
import { TimerView } from './TimerView';
import { PauseButton } from './TimerButtons/PauseButton';
import { ResumeResetButtons } from './TimerButtons/ResumeResetButtons';
import { Notification } from './Notification';

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

        if (initTime < 1000) {
          resetTimer();
          setTimerIsFinished(true);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, [initTime, timerIsActive]);

  const pauseTimer = () => {
    clearInterval(timerId.current);
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

  return (
    <Section>
      <TimerView remainingTime={remainingTime} />

      {!timerIsActive && !initTime && (
        <TimerInput onTimerDataSet={handleTimerDataSet} />
      )}

      {timerIsActive && initTime >= 0 && <PauseButton onPause={pauseTimer} />}

      {!timerIsActive && initTime && (
        <ResumeResetButtons onResume={resumeTimer} onReset={resetTimer} />
      )}

      {timerIsFinished && <Notification />}
    </Section>
  );
};

export default App;
