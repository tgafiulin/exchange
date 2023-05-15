import styles from './index.module.scss';
import Button from '../Button';
import ExchangeCalculator from '../ExchangeCalculator';
import { useState } from 'react';

const ExchangeScreen = () => {
  const [isShowMessage, setIsShowMessage] = useState(false);

  return (
    <div className={styles.exchange}>
      <div className={styles.exchange__title}>Crypto Exchange</div>
      <div className={styles.exchange__desc}>Exchange fast and easy</div>

      <div className={styles.line}>
        <ExchangeCalculator setIsShowMessage={setIsShowMessage} />
      </div>

      <div className={styles.fields_desc}>Your Ethereum address</div>
      <div className={styles.line}>
        <div className={styles.field}>
          <input className={styles.input} type="text" />
        </div>
        <Button
          onClick={() => {}}
          text="exchange"
          isShowMessage={isShowMessage}
          message="This pair is disabled now"
        />
      </div>
    </div>
  );
};

export default ExchangeScreen;
