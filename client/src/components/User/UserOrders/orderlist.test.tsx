import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";
import OrderList from "./OrderList";

test("Orders render test", () => {
  render(<OrderList selectSort={{ id: 0, name: "Od najnowszych" }} />);
  const img = screen.queryAllByTestId("img").map((li) => li.textContent);
  const data = screen.queryByTestId("data");
  const number = screen.queryByTestId("number");
  const price = screen.queryByTestId("price");
  waitFor(() => expect(img).toBeInTheDocument());
  waitFor(() => expect(img).toHaveAttribute("src"));
  waitFor(() => expect(number).toBeInTheDocument());
  waitFor(() => expect(data).toBeInTheDocument());
  waitFor(() => expect(price).toBeInTheDocument());
});
