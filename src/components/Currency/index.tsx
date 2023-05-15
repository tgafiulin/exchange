import { CurrencyType } from "../../types/types";
import styles from './index.module.scss';

interface ICurrency {
    currency: CurrencyType,
    changeCurrency: (currency: CurrencyType) => void
}

const Currency = ({ currency, changeCurrency }: ICurrency) => {
    return (
        <div className={styles.wrapper} onClick={() => changeCurrency(currency)}>
            <img className={styles.image} src={currency.image} alt={currency.ticker} />
            <div className={styles.ticker}>{currency.ticker}</div>
            <div className={styles.name}>{currency.name}</div>
        </div>
    )
};

export default Currency;
