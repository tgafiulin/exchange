import { useEffect, useState } from 'react';
import { CurrencyType } from '../../types/types';
import Field from '../Field';
import { useAPI } from '../../api/apiContext';
import { getExchangeAmount, getMinAmounts } from '../../api/api';
import Swap from '../Swap';

interface IExchangeCalculator {
  setIsShowMessage: (isShowMessage: boolean) => void;
}

const ExchangeCalculator = ({ setIsShowMessage }: IExchangeCalculator) => {
  const { currencies } = useAPI();
  const [currFirst, setCurrFirst] = useState<CurrencyType>();
  const [currSecond, setCurrSecond] = useState<CurrencyType>();
  const [minAmount, setMinimalAmount] = useState('');
  const [amountFirst, setAmountFirst] = useState('');
  const [amountSecond, setAmountSecond] = useState('');

  useEffect(() => {
    if (currencies && !currFirst && !currSecond) {
      setCurrFirst(currencies[0]);
      setCurrSecond(currencies[1]);
    }
  }, [currencies, currFirst, currSecond]);

  useEffect(() => {
    if (currFirst && currSecond) {
      getMinAmounts(currFirst, currSecond).then(({ minAmount }) => {
        setMinimalAmount(minAmount);
        setAmountFirst(minAmount);
      });
    }
  }, [currFirst, currSecond]);

  useEffect(() => {
    if (amountFirst && currFirst && currSecond) {
      getExchangeAmount(amountFirst, currFirst, currSecond).then(({ estimatedAmount }) => {
        setAmountSecond(estimatedAmount);
      });
    }
  }, [amountFirst, currFirst, currSecond]);

  useEffect(() => {
    if (minAmount === 'null' || amountSecond === 'null') {
      setIsShowMessage(true);
    }
  }, [minAmount, amountSecond, setIsShowMessage]);

  const swapCurrencies = () => {
    setCurrFirst(currSecond);
    setCurrSecond(currFirst);
  };

  const onChangeAmount = (amount: string) => {
    setAmountFirst(amount);
  };

  const onChangeCurrency = (currency: CurrencyType, isFirst: boolean) => {
    if (isFirst) {
      setCurrFirst(currency);
    } else {
      setCurrSecond(currency);
    }
  };

  return (
    <>
      {currFirst && (
        <Field
          currCurrency={currFirst}
          amount={amountFirst}
          minAmount={minAmount}
          onChangeAmount={onChangeAmount}
          onChangeCurrency={(currency) => onChangeCurrency(currency, true)}
        />
      )}
      <Swap swap={swapCurrencies} />
      {currSecond && (
        <Field
          currCurrency={currSecond}
          amount={amountFirst >= minAmount ? amountSecond : '-'}
          onChangeCurrency={(currency) => onChangeCurrency(currency, false)}
        />
      )}
    </>
  );
};

export default ExchangeCalculator;
