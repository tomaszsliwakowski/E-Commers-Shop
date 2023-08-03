import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-bottom: 5rem;
  padding: 0 2rem;
  position: relative;
`;
export const Main = styled.div`
  width: 65%;
`;
export const Header = styled.h1`
  margin: 0.5rem 0 2rem 0;
`;
export const SecondHeader = styled.h2`
  margin-top: 1rem;
`;

//
export const Delivery = styled.div`
  width: 90%;
  height: auto;
`;
export const DeliveryList = styled.ul`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 0.5rem;
  width: 100%;
  margin-right: auto;
  height: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
export const DeliveryEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid rgb(221, 221, 221);
  &:last-of-type {
    border-bottom: none;
  }
`;
export const DeliverySelect = styled.div`
  display: flex;
`;
export const DeliveryName = styled.span`
  font-size: 16px;
`;
export const DeliveryPrice = styled.span`
  letter-spacing: 0.5px;
  margin-left: 0.3rem;
  color: rgb(184, 177, 177);
`;
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
  border: 1px solid rgb(221, 221, 221);
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
  margin-left: 0.5rem;
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
    top: 8px;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

//

export const Data = styled.div`
  width: 90%;
`;
export const DataPanel = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
`;
export const DataInput = styled.input`
  height: 40px;
  width: 100%;
  max-width: 350px;
  border-radius: 1rem;
  border: 1px solid rgb(221, 221, 221);
  padding: 0 1rem;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
//
export const Payment = styled.div`
  width: 90%;
`;
//
export const Summary = styled.div`
  width: 35%;
  height: auto;
  position: relative;
`;
export const SummaryPanel = styled.div`
  width: 100%;
  margin-top: 1rem;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 0.5rem;
`;

export const Methods = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 0.5rem;
`;
export const SelectMethod = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const MethodIcon = styled.div`
  margin-left: 0.5rem;
  height: auto;
  display: flex;
  align-items: center;
`;
export const MethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const MethodName = styled.span`
  &:first-of-type {
    color: rgb(153, 148, 148);
  }
`;
export const PayCon = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const PayEl = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PayDetails = styled.span`
  &:last-of-type {
    letter-spacing: 0.5px;
    font-weight: 500;
  }
`;
export const PaySumCon = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const PaySum = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PaySumContent = styled.span`
  font-size: 18px;
  font-weight: 500;
  &:last-of-type {
    letter-spacing: 1px;
  }
`;
export const PayButton = styled.button`
  height: 35px;
  border-radius: 1rem;
  background-color: green;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const BasketList = styled.ul`
  list-style: none;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  overflow: auto;
  max-height: 212px;
`;
export const BasketEl = styled.li`
  width: 100%;
  height: 65px;
  display: flex;
  padding: 0.5rem 0.8rem 0.5rem 0.4rem;
  align-items: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  &:last-of-type {
    border: none;
  }
`;

export const ProductIcon = styled.div`
  display: flex;
  width: 20%;
  & img {
    width: auto;
    height: 50px;
  }
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 80%;
`;
export const ProductName = styled.span`
  font-size: 16px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 1.15em;
  line-height: 1em;
  max-width: 100%;
`;
export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductInfo = styled.span`
  &:first-of-type {
    color: rgb(153, 148, 148);
  }
  &:last-of-type {
    letter-spacing: 1px;
    font-weight: 500;
  }
`;
