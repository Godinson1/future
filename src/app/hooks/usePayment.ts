import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useAuth } from "./useAuth";

export const usePayment = (amount: number) => {
  const {
    user: { email, firstName, lastName, phoneNumber },
  } = useAuth();
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUB_KEY as string,
    tx_ref: Date.now().toLocaleString(),
    amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: { email, phone_number: phoneNumber, name: `${firstName} ${lastName}` },
    customizations: {
      title: `${firstName}'s Order`,
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handlePayment = useFlutterwave(config);

  return {
    handlePayment,
    closePaymentModal,
  };
};
