import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const domElement = screen.getByText("Hello");
    expect(domElement).toBeInTheDocument();
  });

  test("renders with name", () => {
    render(<Greet name="subarna" />);
    const textElement = screen.getByText(/hello subarna/i);
    expect(textElement).toBeInTheDocument();
  });
});
