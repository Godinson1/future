import { Stepper, Step } from "react-form-stepper";

export default function PurchaseOrderSteppers({ activeSteps }: { activeSteps: number }) {
  const stepConfig = {
    activeTextColor: "#ffffff",
    activeBgColor: "lightgreen",
    disabledColor: "gray",
    completedBgColor: "green",
    completedTextColor: "#ffffff",
    inactiveTextColor: "#ffffff",
    inactiveBgColor: "#e0e0e0",
    size: "2em",
    stepSize: "2em",
    style: "solid",
    labelFontSize: "0.875rem",
    circleFontSize: "1rem",
    borderRadius: "50%",
    fontWeight: 500,
  };

  return (
    <Stepper activeStep={2}>
      <Step label='Order Placed' styleConfig={stepConfig} />
      <Step label='Order Accepted' styleConfig={stepConfig} />
      <Step label='Preparing Order' styleConfig={stepConfig} />
      <Step label='Order Picked Up' styleConfig={stepConfig} />
      <Step label='Order Delivered' styleConfig={stepConfig} />
    </Stepper>
  );
}
