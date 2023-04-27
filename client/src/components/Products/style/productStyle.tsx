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
  grid-template-rows: 0.1fr 0.9fr;
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
`;
export const FBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const FTitle = styled.h3``;
export const FClearBtn = styled.button``;
export const FSection = styled.div``;
export const FName = styled.h4``;
export const FList = styled.ul`
  list-style: none;
`;
export const FElement = styled.li``;
export const HCount = styled.span``;
export const HTitle = styled.h1``;
