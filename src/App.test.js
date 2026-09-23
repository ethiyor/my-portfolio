import { fireEvent, render, screen } from "@testing-library/react";
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
  expect(screen.getByAltText("Yordanos Kassa")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /open repofy/i })).toHaveAttribute(
    "href",
    "https://www.repofy.dev",
  );
  expect(screen.getAllByText("97").length).toBeGreaterThan(0);
  expect(screen.getAllByText("41").length).toBeGreaterThan(0);
  expect(screen.getAllByText("46").length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { name: /numbers behind the narrative/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("tab", { name: "Research" }));
  expect(screen.getAllByText("16,894").length).toBeGreaterThan(0);

  fireEvent.click(screen.getAllByRole("button", { name: /explore case study/i })[0]);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /prove that a change solves the task/i })).toBeInTheDocument();
});
