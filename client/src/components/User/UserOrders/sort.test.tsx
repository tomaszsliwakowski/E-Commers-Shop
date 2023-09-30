import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SortOrders from "./SortOrders";

test("Title and name exist", () => {
  render(<SortOrders setSort={() => {}} />);
  const tobe = screen.getByTestId("title");
  const listEl = screen.getByTestId("name");
  expect(tobe).toBeInTheDocument();
  expect(listEl).toBeInTheDocument();
});

test("render sort elemetn and not empty ", () => {
  render(<SortOrders setSort={() => {}} />);
  const element = screen
    .queryAllByTestId("element")
    .map((li) => li.textContent);
  waitFor(() => expect(element).toBeInTheDocument());
  waitFor(() => expect(element.map((it) => it)).not.toBe(""));
});
