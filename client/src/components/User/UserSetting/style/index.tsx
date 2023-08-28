import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  border-left: 1px solid rgb(221, 221, 221);
  padding: 0 0.5rem;
`;
export const Title = styled.h2`
  padding-left: 1rem;
  &:first-of-type {
    font-weight: 400;
    font-size: 31px;
    margin-top: 0;
  }
  font-weight: 400;
  margin-top: 2rem;
  font-size: 22px;
`;
export const DataContainer = styled.div`
  padding-left: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const SingleDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
export const DataName = styled.span`
  font-size: 16px;
`;
export const SingleData = styled.div`
  border: 1px solid rgb(221, 221, 221);
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1rem;
  border-radius: 0.5rem;
  &.order {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    max-width: 550px;
    width: fit-content;
    min-width: 200px;
  }
`;
export const DataValue = styled.span`
  letter-spacing: 0.5px;
`;
export const DataBtn = styled.button`
  font-size: 14px;
  color: rgb(0, 130, 250);
  border: none;
  background: transparent;
  cursor: pointer;
  &.order {
    margin-top: 0.5rem;
  }
`;
