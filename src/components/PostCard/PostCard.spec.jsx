import { render, screen } from "@testing-library/react";

import PostCard from "./PostCard";

const mock = {
  title: "some title",
  body: "some text",
  id: 1,
  cover: "some cover",
};

describe("<PostCard/>", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...mock} />);
    expect(screen.getByRole("img", { name: mock.title })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: mock.title })).toHaveAttribute(
      "src",
      mock.cover
    );
    expect(
      screen.getByRole("heading", { name: mock.title })
    ).toBeInTheDocument();
    expect(screen.getByText(mock.body)).toBeInTheDocument();
  });
  it("should match with snapshot", () => {
    const { container } = render(<PostCard {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
