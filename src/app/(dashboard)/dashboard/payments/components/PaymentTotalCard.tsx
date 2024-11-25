import styles from "../styles/payments.module.css";

const currencyMapper = {
  usd: "$",
  btc: "₿",
};

interface IPaymentTotalCardBase {
  title: string;
  balance: string;
  currency: "usd" | "btc";
  status_flag?: boolean;
}

interface IPaymentTotalCardWithActive extends IPaymentTotalCardBase {
  status_flag: true;
  active: boolean;
}

interface IPaymentTotalCardWithoutActive extends IPaymentTotalCardBase {
  status_flag?: false;
  active?: never;
}

type IPaymentTotalCard = IPaymentTotalCardWithActive | IPaymentTotalCardWithoutActive;

const PaymentTotalCard = ({ title, balance, currency, active, status_flag = false }: IPaymentTotalCard) => {
  return (
    <div className={styles.payment_card}>
      <div className='flex justify-between items-center w-full'>
        <span>{title}</span>
        {status_flag ? <div className={`text-sm text-slate-700 ${active ? styles.active : styles.suspended}`}>{active ? "Active" : "Suspended"}</div> : ""}
      </div>
      <div>
        <p className='font-bold text-4xl'>{`${currencyMapper[currency]}${balance}`}</p>
      </div>
    </div>
  );
};

export default PaymentTotalCard;
