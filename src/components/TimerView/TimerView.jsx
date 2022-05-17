export const TimerView = ({ remainingTime }) => {
  const { days, hours, minutes, seconds } = remainingTime;
  return (
    <div class="timer">
      <div class="field">
        <span class="value" data-days>
          {days}
        </span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-hours>
          {hours}
        </span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-minutes>
          {minutes}
        </span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-seconds>
          {seconds}
        </span>
        <span class="label">Seconds</span>
      </div>
    </div>
  );
};
