import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio introduction and selected work", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /I build systems that make AI prove its work/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "PatchProof" })).toBeInTheDocument();
  const profileLinks = screen
    .getAllByRole("link")
    .filter((link) => link.getAttribute("href") === "https://github.com/ethiyor");

  expect(profileLinks).not.toHaveLength(0);
});
