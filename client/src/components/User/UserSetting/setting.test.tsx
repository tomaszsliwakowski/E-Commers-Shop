import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { waitFor } from "@testing-library/react";
import UserSetting from "./UserSetting";

test("Settings render test", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserSetting />} />
      </Routes>
    </BrowserRouter>
  );
  const title = screen.getAllByTestId("title").map((it) => it.textContent);
  const del = screen.getByTestId("delete");
  const modal = screen.queryByTestId("modal");
  waitFor(() => expect(title.map((it) => it)).toBeInTheDocument());
  waitFor(() => expect(del).toBeInTheDocument());
  waitFor(() => expect(modal).toBeInTheDocument());
});
