import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaymentTotalCard from "./PaymentTotalCard";

jest.mock("../styles/payments.module.css", () => ({
  payment_card: "payment_card",
  active: "active",
  suspended: "suspended",
}));

describe("PaymentTotalCard Component", () => {
  it("renders title and balance with USD currency", () => {
    render(<PaymentTotalCard title='Test Card' balance='1000' currency='usd' status_flag={false} />);

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
    expect(screen.queryByText("Active")).not.toBeInTheDocument();
    expect(screen.queryByText("Suspended")).not.toBeInTheDocument();
  });

  it("renders title and balance with BTC currency", () => {
    render(<PaymentTotalCard title='Bitcoin Card' balance='0.5' currency='btc' status_flag={false} />);

    expect(screen.getByText("Bitcoin Card")).toBeInTheDocument();
    expect(screen.getByText("₿0.5")).toBeInTheDocument();
  });

  it("shows 'Active' status when status_flag is true and active is true", () => {
    render(<PaymentTotalCard title='Active Card' balance='500' currency='usd' status_flag={true} active={true} />);

    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("$500")).toBeInTheDocument();
    expect(screen.getByText("Active Card")).toBeInTheDocument();
  });

  it("shows 'Suspended' status when status_flag is true and active is false", () => {
    render(<PaymentTotalCard title='Suspended Card' balance='200' currency='usd' status_flag={true} active={false} />);

    expect(screen.getByText("Suspended")).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
    expect(screen.getByText("Suspended Card")).toBeInTheDocument();
  });

  it("does not render active status when status_flag is false", () => {
    render(<PaymentTotalCard title='No Status Card' balance='300' currency='usd' />);

    expect(screen.queryByText("Active")).not.toBeInTheDocument();
    expect(screen.queryByText("Suspended")).not.toBeInTheDocument();
    expect(screen.getByText("$300")).toBeInTheDocument();
    expect(screen.getByText("No Status Card")).toBeInTheDocument();
  });
});
