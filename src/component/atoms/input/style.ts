import styled from "styled-components";

export const InputStyle = styled.input`
  width: 55em;
  height: 3em;
  border: none;
  padding-left: 2em;
  color: #2451b7;
  &::placeholder {
    color: #2451b7;
  }
  &:focus {
    &::placeholder {
      color: #120f0f;
    }
  }
`;
