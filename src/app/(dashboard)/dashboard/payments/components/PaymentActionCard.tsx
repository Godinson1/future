import styles from "../styles/payments.module.css";

interface IPaymentActionCard {
  action: "Fund" | "Buy" | "Send" | "Pay Bills" | "Buy Airtime" | "Buy Data" | "Settings";
  handleModalPageClick: (action: string) => void;
  icon: any;
}

const modalActionMapper = {
  Fund: "fund",
  Send: "send",
  Buy: "buy",
  Settings: "payment_settings",
  "Pay Bills": "buy",
  "Buy Airtime": "buy",
  "Buy Data": "buy",
};

const PaymentActionCard = ({ action, icon, handleModalPageClick }: IPaymentActionCard) => {
  return (
    <div onClick={() => handleModalPageClick(modalActionMapper[action])} className={`${styles.payment_card_1} ${styles.payment_actions}`}>
      {icon}
      {action}
    </div>
  );
};

export default PaymentActionCard;
