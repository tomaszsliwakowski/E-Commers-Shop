import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  border-left: 1px solid rgb(221, 221, 221);
  padding: 0 0.5rem;
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 31px;
  padding-left: 1rem;
`;
export const SortPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
`;
export const SortCon = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const SortTitle = styled.h4``;
export const SortSelect = styled.div`
  border: 1px solid rgb(204, 204, 204);
  position: relative;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  min-width: 160px;
`;
export const SortCheckbox = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  opacity: 0;
`;
export const SortShow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const SortShowOpt = styled.span``;
export const SortList = styled.ul`
  position: absolute;
  border: 1px solid rgb(204, 204, 204);
  width: 100%;
  left: 0;
  top: 2rem;
  border-radius: 0.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  & li {
    padding: 0.5rem 0.5rem;
  }
  & li:hover {
    font-weight: 500;
    cursor: pointer;
    &:last-of-type {
      border-radius: 0 0 0.5rem 0.5rem;
    }
    &:first-of-type {
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }
`;
export const List = styled.ul`
  width: 100%;
  height: auto;
  background-color: silver;
  margin-top: 1rem;
`;
