import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;

export const ButtonRed = styled.button`
  width: 100%;
  height: 60px;
  background: #eb2b41;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: all 0.2s;
  &:hover {
    filter: brightness(90%);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  input {
    & + input {
      margin-left: 8px;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  margin-top: 8px;
  resize: vertical;
`;
