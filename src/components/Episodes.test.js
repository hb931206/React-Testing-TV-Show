import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("Episodes renders properly", () => {
  const { queryAllByTestId } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId(/episode/i)).toHaveLength(1);
});
