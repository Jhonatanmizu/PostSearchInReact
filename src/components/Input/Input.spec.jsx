import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("<Input/>", () => {
  it("should render a input with a placeholder", () => {
    render(<Input />);
    const input = screen.getByPlaceholderText(/Buscar/i);
    expect(input).toBeInTheDocument();
  });
  // it("should render a input with a value", () => {
  //   render(<Input value="example" />);
  //   const input = screen.getByPlaceholderText(/Buscar/i);
  //   expect(input).toHaveValue(/example/i);
  // });
});
