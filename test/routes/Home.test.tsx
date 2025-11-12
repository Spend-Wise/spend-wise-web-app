import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../src/routes/Home";

describe("Home", () => {
  it("renders without crashing", () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });

  it("displays the Spend-wise heading", () => {
    render(<Home />);
    const heading = screen.getByText("Spend-wise");
    expect(heading).toBeTruthy();
    expect(heading.tagName).toBe("H1");
  });

  it("renders the correct structure", () => {
    const { container } = render(<Home />);
    const div = container.querySelector("div");
    expect(div).toBeTruthy();
    expect(div?.querySelector("h1")).toBeTruthy();
  });
});
