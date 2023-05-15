import Currency from '../Currency';
import { CurrencyType } from '../../types/types';
import styles from './index.module.scss';
import Search from './components/Search';
import { useState } from 'react';

interface ICurrencies {
  currencies: CurrencyType[];
  changeCurrency: (currency: CurrencyType) => void;
  onCloseList: () => void;
}

export const Currencies = ({ currencies, changeCurrency, onCloseList }: ICurrencies) => {
  const [filterValue, setFilterValue] = useState('');

  return (
    <div className={styles.wrapper}>
      <Search filterValue={filterValue} setFilterValue={setFilterValue} />
      <div className={styles.close} onClick={onCloseList} />
      {currencies
        .filter((curr) => curr.name.toLowerCase().includes(filterValue.toLowerCase()))
        .map((currency: CurrencyType) => {
          return (
            <Currency currency={currency} key={currency.ticker} changeCurrency={changeCurrency} />
          );
        })}
    </div>
  );
};

export default Currencies;
