import {
  BtnProps,
  DivProps,
  ElProps,
  HeadProps,
  LabelProps,
  ListProps,
  SpanProps,
} from "../../types/Types";
import {
  Container,
  Header,
  Delivery,
  Data,
  Payment,
  Summary,
  Main,
  SecondHeader,
  DeliveryList,
  DeliveryEl,
  DeliverySelect,
  DeliveryName,
  DeliveryPrice,
  DeliveryRadio,
  DeliveryCheckbox,
  DeliveryCheckmark,
  SummaryPanel,
  BasketEl,
  BasketList,
  MethodIcon,
  MethodName,
  Methods,
  PayButton,
  PayCon,
  PayEl,
  PaySum,
  PaySumCon,
  PaySumContent,
  SelectMethod,
  MethodContainer,
  PayDetails,
  DataInput,
  DataPanel,
  Product,
  ProductDetails,
  ProductIcon,
  ProductInfo,
  ProductName,
} from "./style/orderStyle";

export function Order({ children, ...restprops }: DivProps) {
  return <Container {...restprops}>{children}</Container>;
}
Order.Main = function OrderMain({ children, ...restprops }: DivProps) {
  return <Main {...restprops}>{children}</Main>;
};

Order.Header = function OrderHeader({ children, ...restprops }: HeadProps) {
  return <Header {...restprops}>{children}</Header>;
};
Order.SecondHeader = function OrderSecondHeader({
  children,
  ...restprops
}: HeadProps) {
  return <SecondHeader {...restprops}>{children}</SecondHeader>;
};

Order.List = function OrderDeliveryList({ children, ...restprops }: ListProps) {
  return <DeliveryList {...restprops}>{children}</DeliveryList>;
};
Order.El = function OrderDeliveryEl({ children, ...restprops }: ElProps) {
  return <DeliveryEl {...restprops}>{children}</DeliveryEl>;
};
Order.Select = function OrderDeliverySelect({
  children,
  ...restprops
}: DivProps) {
  return <DeliverySelect {...restprops}>{children}</DeliverySelect>;
};
Order.Name = function OrderDeliveryName({ children, ...restprops }: SpanProps) {
  return <DeliveryName {...restprops}>{children}</DeliveryName>;
};
Order.Price = function OrderDeliveryPrice({
  children,
  ...restprops
}: SpanProps) {
  return <DeliveryPrice {...restprops}>{children}</DeliveryPrice>;
};
Order.Radio = function OrderDeliveryRadio({
  children,
  ...restprops
}: LabelProps) {
  return <DeliveryRadio {...restprops}>{children}</DeliveryRadio>;
};
Order.Checkbox = function OrderDeliveryCheckbox({ ...restprops }) {
  return <DeliveryCheckbox {...restprops} />;
};
Order.Checkmark = function OrderDeliveryCheckmark({
  children,
  ...restprops
}: SpanProps) {
  return <DeliveryCheckmark {...restprops}>{children}</DeliveryCheckmark>;
};

//Delivery
Order.Delivery = function OrderDelivery({ children, ...restprops }: DivProps) {
  return <Delivery {...restprops}>{children}</Delivery>;
};

//Data
Order.Data = function OrderData({ children, ...restprops }: DivProps) {
  return <Data {...restprops}>{children}</Data>;
};
Order.DataPanel = function OrderDataPanel({
  children,
  ...restprops
}: DivProps) {
  return <DataPanel {...restprops}>{children}</DataPanel>;
};
Order.DataInput = function OrderDataInput({ ...restprops }) {
  return <DataInput {...restprops} />;
};

Order.Payment = function OrderPayment({ children, ...restprops }: DivProps) {
  return <Payment {...restprops}>{children}</Payment>;
};

//Summary
Order.Summary = function OrderSummary({ children, ...restprops }: DivProps) {
  return <Summary {...restprops}>{children}</Summary>;
};
Order.SummaryPanel = function OrderSummaryPanel({
  children,
  ...restprops
}: DivProps) {
  return <SummaryPanel {...restprops}>{children}</SummaryPanel>;
};
Order.BasketList = function OrderBasketList({
  children,
  ...restprops
}: ListProps) {
  return <BasketList {...restprops}>{children}</BasketList>;
};
Order.BasketEl = function OrderBasketEl({ children, ...restprops }: ElProps) {
  return <BasketEl {...restprops}>{children}</BasketEl>;
};
Order.Methods = function OrderMethods({ children, ...restprops }: DivProps) {
  return <Methods {...restprops}>{children}</Methods>;
};
Order.SelectMethod = function OrderSelectMethod({
  children,
  ...restprops
}: DivProps) {
  return <SelectMethod {...restprops}>{children}</SelectMethod>;
};
Order.MethodIcon = function OrderMethodIcon({
  children,
  ...restprops
}: DivProps) {
  return <MethodIcon {...restprops}>{children}</MethodIcon>;
};
Order.MethodContainer = function OrderMethodContainer({
  children,
  ...restprops
}: DivProps) {
  return <MethodContainer {...restprops}>{children}</MethodContainer>;
};
Order.MethodName = function OrderMethodName({
  children,
  ...restprops
}: SpanProps) {
  return <MethodName {...restprops}>{children}</MethodName>;
};
Order.PayCon = function OrderPayCon({ children, ...restprops }: DivProps) {
  return <PayCon {...restprops}>{children}</PayCon>;
};
Order.PayEl = function OrderPayEl({ children, ...restprops }: DivProps) {
  return <PayEl {...restprops}>{children}</PayEl>;
};
Order.PayDetails = function OrderPayDetails({
  children,
  ...restprops
}: SpanProps) {
  return <PayDetails {...restprops}>{children}</PayDetails>;
};
Order.PaySumCon = function OrderPaySumCon({
  children,
  ...restprops
}: DivProps) {
  return <PaySumCon {...restprops}>{children}</PaySumCon>;
};
Order.PaySum = function OrderPaySum({ children, ...restprops }: DivProps) {
  return <PaySum {...restprops}>{children}</PaySum>;
};
Order.PaySumContent = function OrderPaySumContent({
  children,
  ...restprops
}: SpanProps) {
  return <PaySumContent {...restprops}>{children}</PaySumContent>;
};
Order.PayButton = function OrderPayButton({
  children,
  ...restprops
}: BtnProps) {
  return <PayButton {...restprops}>{children}</PayButton>;
};

Order.ProductIcon = function OrderProductIcon({
  children,
  ...restprops
}: DivProps) {
  return <ProductIcon {...restprops}>{children}</ProductIcon>;
};
Order.Product = function OrderProduct({ children, ...restprops }: DivProps) {
  return <Product {...restprops}>{children}</Product>;
};
Order.ProductDetails = function OrderProductDetails({
  children,
  ...restprops
}: DivProps) {
  return <ProductDetails {...restprops}>{children}</ProductDetails>;
};

Order.ProductName = function OrderProductName({
  children,
  ...restprops
}: SpanProps) {
  return <ProductName {...restprops}>{children}</ProductName>;
};
Order.ProductInfo = function OrderProductInfo({
  children,
  ...restprops
}: SpanProps) {
  return <ProductInfo {...restprops}>{children}</ProductInfo>;
};
