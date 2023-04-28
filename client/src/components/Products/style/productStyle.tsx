import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0 2rem;
  margin-top: 8rem;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  grid-template-rows: 0.08fr 0.92fr;
`;
export const Filters = styled.div`
  background-color: silver;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const ProductsSec = styled.div`
  background-color: lightgreen;
`;
export const Header = styled.div`
  background-color: lightblue;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
export const SortPanel = styled.div``;
export const All = styled.div``;
export const FTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
export const FBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0.5rem;
`;
export const FTitle = styled.h3``;
export const FClearBtn = styled.button`
  width: 60%;
  background: none;
  border: none;
  cursor: pointer;
`;
export const FSection = styled.div``;
export const FName = styled.h4``;
export const FList = styled.ul`
  list-style: none;
`;
export const FElement = styled.li``;
export const HCount = styled.span``;
export const HTitle = styled.h1``;

export const FCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
export const FCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  &::after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const FChoose = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover ${FCheckbox} ~ ${FCheckmark} {
    background-color: #ccc;
  }
  & ${FCheckbox}:checked ~ ${FCheckmark} {
    background-color: #2196f3;
  }
  & ${FCheckbox}:checked ~ ${FCheckmark}::after {
    display: block;
  }
  & ${FCheckmark}::after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;
