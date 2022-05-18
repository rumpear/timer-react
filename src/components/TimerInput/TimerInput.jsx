import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Input, Button } from './TimerInput.styled';

export const TimerInput = ({ onTimerDataSet }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const seconds = e.target.seconds.value * 1000;
    const minutes = e.target.minutes.value * 1000 * 60;
    const hours = e.target.hours.value * 1000 * 60 * 60;
    const days = e.target.days.value * 1000 * 60 * 60 * 24;
    let total = minutes + seconds + hours + days;
    console.log(seconds);
    if (!seconds && !minutes && !hours && !days)
      return toast.warn('Please enter a time to start the countdown');

    onTimerDataSet(total);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="number" min={0} name="days" placeholder="days" />
        <Input type="number" min={0} name="hours" placeholder="hours" />
        <Input type="number" min={0} name="minutes" placeholder="minutes" />
        <Input type="number" min={0} name="seconds" placeholder="seconds" />

        <Button type="submit">Start</Button>
      </Form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
