import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;
export const Main = styled.div`
  width: 60%;
  background-color: silver;
`;
export const Header = styled.h1`
  margin: 1rem 0;
`;
export const SecondHeader = styled.h2``;

//
export const Delivery = styled.div``;
export const DeliveryList = styled.ul``;
export const DeliveryEl = styled.li``;
export const DeliverySelect = styled.div``;
export const DeliveryName = styled.span``;
export const DeliveryPrice = styled.span``;
export const DeliveryCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
export const DeliveryCheckmark = styled.span`
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
export const DeliveryRadio = styled.label`
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
  &:hover ${DeliveryCheckbox} ~ ${DeliveryCheckmark} {
    background-color: #ccc;
  }
  & ${DeliveryCheckbox}:checked ~ ${DeliveryCheckmark} {
    background-color: #2196f3;
  }
  & ${DeliveryCheckbox}:checked ~ ${DeliveryCheckmark}::after {
    display: block;
  }
  & ${DeliveryCheckmark}::after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

//

export const Data = styled.div``;
//
export const Payment = styled.div``;
//
export const Summary = styled.div`
  width: 40%;
  background-color: lightblue;
`;
export const SummaryPanel = styled.div``;
export const BasketList = styled.ul``;
export const BasketEl = styled.li``;
export const Methods = styled.div``;
export const SelectMethod = styled.div``;
export const MethodIcon = styled.div``;
export const MethodContainer = styled.div``;
export const MethodName = styled.span``;
export const PayCon = styled.div``;
export const PayEl = styled.div``;
export const PayDetails = styled.span``;
export const PaySumCon = styled.div``;
export const PaySum = styled.div``;
export const PaySumContent = styled.span``;
export const PayButton = styled.button``;
export const DataPanel = styled.div``;
export const DataInput = styled.input``;
