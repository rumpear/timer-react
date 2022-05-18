import { Button } from './PauseButton.styled';

export const PauseButton = ({ onPause }) => {
  return (
    <Button type="button" onClick={onPause}>
      Pause
    </Button>
  );
};
