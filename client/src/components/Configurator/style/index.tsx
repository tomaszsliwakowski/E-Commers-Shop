import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0 2rem;
  margin-top: 9rem;
  margin-bottom: 4rem;
  @media screen and (max-width: 1200px) {
    margin-top: 7rem;
  }
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 30px;
`;
export const Components = styled.div`
  margin-top: 5rem;
  height: auto;
  width: 100%;
  display: grid;
  margin-right: auto;
  margin-left: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  padding: 0.5rem 2rem;
`;

export const Component = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftPart = styled.div`
  border: 1px solid rgb(221, 221, 221);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 1rem 0rem 0rem 1rem;
`;
export const RightPart = styled.div`
  border: 1px solid rgb(221, 221, 221);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: none;
  padding: 0.5rem;
  border-radius: 0rem 1rem 1rem 0rem;
  & svg {
    min-height: 50px;
    min-width: 50px;
    height: 25%;
    width: 25%;
  }
`;
export const Name = styled.h4`
  font-size: 20px;
  margin-top: 5px;
`;
export const Image = styled.img`
  height: auto;
  width: 100%;
  max-width: 200px;
`;
