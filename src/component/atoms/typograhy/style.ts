import styled from "styled-components";

export const TypograhyStyle = styled.h2<{ ref: any; size: string }>`
  font-size: ${(props) => props.size};
`;
