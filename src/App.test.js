import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");
test("Appe fetches episodes and renders data", () => {
  // mockFetchShow.mockResolvedValueOnce(episodes)

  const { getByText } = render(<App />);

  //   const buttton
});
