import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card />);
});
// end

it("matches snapshot", function () {
  const { container, debug } = render(<Card currNum="1" totalNum="3"/>);
  debug()
  expect(container).toMatchSnapshot();
});
// end