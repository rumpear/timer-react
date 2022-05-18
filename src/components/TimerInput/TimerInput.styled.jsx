import styled from 'styled-components';

export const Form = styled.form`
  width: 450px;
  /* display: block; */
  margin: 0 auto;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  width: 100px;
  margin-right: 10px;
  text-align: center;

  padding: 10px 5px;
  font-size: 17px;
  border: 1px solid #eeeeee;

  :last-child {
    margin-right: 0;
  }
`;
export const Button = styled.button`
  display: block;
  width: 440px;
  height: auto;
  padding: 10px;

  margin-top: 20px;
  margin-bottom: 20px;

  background-color: #f5f4fa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  font-family: inherit;
  font-size: 17px;
  font-weight: 500;

  text-align: center;
  border-radius: 4px;
  border: none;

  line-height: 1.87;
  letter-spacing: 0.06em;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  :hover {
    background-color: rgba(77, 77, 77, 0.1);
  }
`;
