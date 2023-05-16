import styled from "styled-components/macro";

export const Consens = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
`;
export const Title = styled.h4`
  margin-bottom: 1rem;
`;
export const Container = styled.div`
  height: fit-content;
`;

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
export const Mark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border: 1px solid silver;
  &::after {
    content: "";
    position: absolute;
    display: none;
  }
`;
export const Accept = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;

  & ${Checkbox}:checked ~ ${Mark} {
    background-color: #2196f3;
    border: none;
  }
  &:hover ${Checkbox}:checked ~ ${Mark} {
    background-color: #2196f3;
  }
  & ${Checkbox}:checked ~ ${Mark}::after {
    display: block;
  }
  & ${Mark}::after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
