import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PaymentActionCard from "./PaymentActionCard";

// Mock the styles
jest.mock("../styles/payments.module.css", () => ({
  payment_card_1: "mock-payment-card-1",
  payment_actions: "mock-payment-actions",
}));

describe("PaymentActionCard Component", () => {
  it("renders the action text and icon", () => {
    const mockIcon = <span data-testid='mock-icon'>Icon</span>;
    render(<PaymentActionCard action='Fund' icon={mockIcon} handleModalPageClick={() => {}} />);

    expect(screen.getByText("Fund")).toBeInTheDocument();
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("calls handleModalPageClick with the correct mapped action", () => {
    const mockHandleClick = jest.fn();
    render(<PaymentActionCard action='Send' icon={<span>Icon</span>} handleModalPageClick={mockHandleClick} />);

    fireEvent.click(screen.getByText("Send"));

    expect(mockHandleClick).toHaveBeenCalledWith("send");
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it("applies the correct styles to the card container", () => {
    render(<PaymentActionCard action='Buy' icon={<span>Icon</span>} handleModalPageClick={() => {}} />);

    const card = screen.getByText("Buy").closest("div");
    expect(card).toHaveClass("mock-payment-card-1");
    expect(card).toHaveClass("mock-payment-actions");
  });

  it("handles different actions and their modal mappings", () => {
    const mockHandleClick = jest.fn();
    const actions = [
      { action: "Fund", expected: "fund" },
      { action: "Send", expected: "send" },
      { action: "Buy", expected: "buy" },
      { action: "Pay Bills", expected: "buy" },
      { action: "Buy Airtime", expected: "buy" },
      { action: "Buy Data", expected: "buy" },
      { action: "Settings", expected: "payment_settings" },
    ];

    actions.forEach(({ action, expected }) => {
      render(<PaymentActionCard action={action as any} icon={<span>Icon</span>} handleModalPageClick={mockHandleClick} />);

      fireEvent.click(screen.getByText(action));
      expect(mockHandleClick).toHaveBeenCalledWith(expected);
    });
  });
});
