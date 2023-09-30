import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserOrders from "./UserOrders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { waitFor } from "@testing-library/react";

test("Orders render test", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserOrders />} />
      </Routes>
    </BrowserRouter>
  );
  const title = screen.findByTestId("title");
  waitFor(() => expect(title).toBeInTheDocument());
  waitFor(() => expect(title).toBe("Zamówienia"));
});
