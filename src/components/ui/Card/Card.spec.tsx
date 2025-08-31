import React from "react";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

describe("Card Components", () => {
  it("renders card with all components correctly", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Test Content</p>
        </CardContent>
        <CardFooter>
          <button>Test Footer</button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText("Test Title")).toBeTruthy();
    expect(screen.getByText("Test Description")).toBeTruthy();
    expect(screen.getByText("Test Content")).toBeTruthy();
    expect(screen.getByText("Test Footer")).toBeTruthy();
  });

  it("renders card with custom className", () => {
    render(<Card className="custom-class">Test Card</Card>);
    const card = screen.getByText("Test Card").closest("div");
    expect(card?.className).toContain("custom-class");
  });

  it("renders minimal card structure", () => {
    render(
      <Card>
        <CardContent>Simple content</CardContent>
      </Card>
    );

    expect(screen.getByText("Simple content")).toBeTruthy();
  });
});
