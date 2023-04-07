import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("<Button/>", () => {
  it("should render a button with a text", () => {
    render(<Button text={"Load more"} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect.assertions(1);
    expect(button).toBeInTheDocument();
  });
  it("should call a function when click in the button", () => {
    const fn = jest.fn();
    render(<Button text={"Load more"} onClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
  it("should be disabled when disabled is true", () => {
    render(<Button text={"Load more"} disabled />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeDisabled();
  });
  it("should be enable when disabled is false", () => {
    render(<Button text={"Load more"} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeEnabled();
  });
  it("should match with snapshot", () => {
    const { container } = render(<Button text={"Load more"} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
