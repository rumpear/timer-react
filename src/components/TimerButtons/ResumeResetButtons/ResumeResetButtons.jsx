import { Button, Wrapper } from './ResumeResetButtons.styled';

export const ResumeResetButtons = ({ onResume, onReset }) => {
  return (
    <Wrapper>
      <Button type="button" onClick={onResume}>
        Resume
      </Button>
      <Button type="button" onClick={onReset}>
        Reset
      </Button>
    </Wrapper>
  );
};
