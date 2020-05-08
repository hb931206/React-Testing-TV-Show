import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("Episodes renders correctly", () => {
  const { getByText } = render(<Episodes episodes={episodes} />);

  getByText(/season/i);
});
