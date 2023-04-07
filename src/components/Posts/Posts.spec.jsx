import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

const mock = [
  {
    title: "some title",
    body: "some text",
    id: 1,
    cover: "some cover",
  },
];

describe("<Posts/>", () => {
  it("should render posts", () => {
    const { debug } = render(<Posts posts={mock} />);
    debug();
    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(1);
    expect(screen.getAllByRole("img", { name: /title/i })).toHaveLength(1);
    expect(screen.getAllByText(/some text/i)).toHaveLength(1);
  });
});
