import styles from "../styles/payments.module.css";

interface IRecentActivityCard {
  type: string;
  amount: string;
  created_at: string;
  status: string;
}

const getMessage = (type: string) => {
  switch (type) {
    case "send":
      return `Your transfer has been carried out successfully!`;
    case "fund":
      return "Airtime purchase was successfull";
    default:
      return "Your payment has been made successfully!";
  }
};

const RecentActivityCard = ({ type, amount, status, created_at }: IRecentActivityCard) => {
  return (
    <div className={styles.recent_activity_card}>
      <div>{getMessage(type)}</div>
      <div>${amount}</div>
      <div className={`${styles.status_badge} ${styles[status]}`}>{status}</div>
      <div>{created_at}</div>
    </div>
  );
};

export default RecentActivityCard;
