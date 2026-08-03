import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio introduction and selected work", () => {
  const { container } = render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /Yordanos Kassa/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "PatchProof" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Let's talk/i })).toHaveAttribute(
    "href",
    "#contact",
  );
  const profileLinks = screen
    .getAllByRole("link")
    .filter((link) => link.getAttribute("href") === "https://github.com/ethiyor");

  expect(profileLinks).not.toHaveLength(0);
  expect(container.querySelectorAll(".project-diagram")).toHaveLength(3);
  expect(container.querySelector(".system-map")).toBeInTheDocument();
  expect(container.querySelector(".astro-bridge")).toBeInTheDocument();
  expect(container.querySelector(".page-progress")).toBeInTheDocument();
  expect(container.querySelector(".product-ecosystem")).toBeInTheDocument();
  expect(screen.getByText("97")).toBeInTheDocument();
  expect(screen.getByText("41")).toBeInTheDocument();
  expect(screen.getByText("35+")).toBeInTheDocument();
});
