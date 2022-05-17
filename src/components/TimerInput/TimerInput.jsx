export const TimerInput = ({ onTimerDataSet }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const seconds = e.target.seconds.value * 1000;
    const minutes = e.target.minutes.value * 1000 * 60;
    const hours = e.target.hours.value * 1000 * 60 * 60;
    const days = e.target.days.value * 1000 * 60 * 60 * 24;
    let total = minutes + seconds + hours + days;

    onTimerDataSet(total);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="days" placeholder="days" />
      <input type="number" name="hours" placeholder="hours" />
      <input type="number" name="minutes" placeholder="minutes" />
      <input type="number" name="seconds" placeholder="seconds" />

      <button type="submit">Start</button>
    </form>
  );
};
