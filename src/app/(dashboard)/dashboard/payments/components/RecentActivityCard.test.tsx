import React from "react";
import { render, screen } from "@testing-library/react";
import RecentActivityCard from "./RecentActivityCard";

// Mock the styles
jest.mock("../styles/payments.module.css", () => ({
  recent_activity_card: "mock-recent-activity-card",
  status_badge: "mock-status-badge",
  success: "mock-success",
  failed: "mock-failed",
}));

describe("RecentActivityCard Component", () => {
  it("renders the card with correct type message", () => {
    const mockProps = {
      type: "send",
      amount: "100",
      created_at: "2024-11-25",
      status: "success",
    };

    render(<RecentActivityCard {...mockProps} />);

    expect(screen.getByText("Your transfer has been carried out successfully!")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("2024-11-25")).toBeInTheDocument();
  });

  it("renders the correct default message for unknown types", () => {
    const mockProps = {
      type: "unknown",
      amount: "50",
      created_at: "2024-11-25",
      status: "failed",
    };

    render(<RecentActivityCard {...mockProps} />);

    expect(screen.getByText("Your payment has been made successfully!")).toBeInTheDocument();
  });

  it("renders the correct status and applies status-specific styles", () => {
    const mockProps = {
      type: "fund",
      amount: "75",
      created_at: "2024-11-25",
      status: "success",
    };

    render(<RecentActivityCard {...mockProps} />);

    const statusElement = screen.getByText("success");
    expect(statusElement).toHaveClass("mock-status-badge");
    expect(statusElement).toHaveClass("mock-success");
  });

  it("applies the failed status style when status is 'failed'", () => {
    const mockProps = {
      type: "send",
      amount: "150",
      created_at: "2024-11-25",
      status: "failed",
    };

    render(<RecentActivityCard {...mockProps} />);

    const statusElement = screen.getByText("failed");
    expect(statusElement).toHaveClass("mock-status-badge");
    expect(statusElement).toHaveClass("mock-failed");
  });
});
