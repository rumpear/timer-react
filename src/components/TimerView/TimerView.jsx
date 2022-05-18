import { Value, Label, Field, Timer } from './TimerView.styled';
export const TimerView = ({ remainingTime }) => {
  const { days, hours, minutes, seconds } = remainingTime;
  return (
    <Timer>
      <Field>
        <Value>{days}</Value>
        <Label>Days</Label>
      </Field>
      <Field>
        <Value>{hours}</Value>
        <Label>Hours</Label>
      </Field>
      <Field>
        <Value>{minutes}</Value>
        <Label>Minutes</Label>
      </Field>
      <Field>
        <Value>{seconds}</Value>
        <Label>Seconds</Label>
      </Field>
    </Timer>
  );
};
