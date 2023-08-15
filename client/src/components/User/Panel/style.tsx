import styled from "styled-components/macro";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 280px;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  margin-bottom: 1rem;
`;
export const Name = styled.span`
  width: 100%;
  font-size: 18px;
  &:last-of-type {
    font-weight: 600;
    font-size: 22px;
  }
`;
export const LinkList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const LinkName = styled.span`
  font-weight: 400;
`;

export const LinkEl = styled(Link)`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  gap: 1rem;
  text-decoration: none;
  color: rgb(26, 26, 26);
  &.active ${LinkName} {
    font-weight: 600;
  }
`;
export const Icon = styled.div``;
