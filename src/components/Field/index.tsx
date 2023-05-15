import { useCallback, useEffect, useState } from 'react';
import { CurrencyType } from '../../types/types';
import Currencies from '../Currencies';
import styles from './index.module.scss';

import { useAPI } from '../../api/apiContext';
import FieldError from './components/FieldError';

interface IField {
  currCurrency: CurrencyType;
  onChangeCurrency: (currency: CurrencyType) => void;
  amount: string;
  minAmount?: string;
  onChangeAmount?: (amount: string) => void;
}

const Field = ({ currCurrency, amount, minAmount, onChangeAmount, onChangeCurrency }: IField) => {
  const { currencies } = useAPI();
  const [isShowList, setIsShowList] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyType>(currCurrency);

  const changeCurrency = useCallback(
    (currency: CurrencyType) => {
      setIsShowList(false);
      setCurrentCurrency(currency);
      onChangeCurrency(currency);
    },
    [onChangeCurrency]
  );

  useEffect(() => {
    changeCurrency(currCurrency);
  }, [currCurrency, changeCurrency]);

  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeAmount) {
      const newValue = e.target.value;
      if (/^[0-9]*(.)?([0-9]+)?$/.test(newValue)) onChangeAmount(e.target.value);
    }
  };

  return (
    <div className={styles.field}>
      {!isShowList ? (
        <div className={styles.fieldInfo}>
          <input
            className={styles.input}
            value={amount}
            onChange={changeAmount}
            disabled={!onChangeAmount}
          />
          <div className={styles.currentCurrency} onClick={() => setIsShowList(true)}>
            <img className={styles.image} src={currentCurrency.image} alt={currentCurrency.name} />
            <div className={styles.ticker}>{currentCurrency.ticker}</div>
          </div>
        </div>
      ) : (
        currencies && (
          <Currencies
            currencies={currencies}
            changeCurrency={changeCurrency}
            onCloseList={() => setIsShowList(false)}
          />
        )
      )}
      {minAmount && (
        <FieldError
          isShow={amount < minAmount}
          minAmount={minAmount}
          ticker={currCurrency.ticker}
        />
      )}
    </div>
  );
};

export default Field;
