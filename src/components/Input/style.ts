import styled from "styled-components";

export const Container = styled.div`

  width:30%;
  display: flex;
  align-items: center;
  padding:2px;
  justify-content:space-between;
  border-radius: 8px;
  background-color: var(--text-color);
 
`;

export const InputArea = styled.input`
 
  width:90%;
  border: none;
  padding: 10px 10px;
  color:var(--body-color);
  font-weight:500;
  font-size: 16px;

  ::placeholder{
     color: gray;
  }

`;