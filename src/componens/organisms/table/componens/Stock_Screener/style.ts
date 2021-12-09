import styled from "styled-components";

export const TableScreener = styled.div`
  border: 1px solid #f26b38;
  border-radius: 15px;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  :hover{
    box-shadow: 0px 0px 10px 3px #f26b38;
  }
  
`;

export const TableWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-height: 1440px;
  max-width: 2000px;
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
