import styles from './index.module.scss';
import cn from 'classnames';

interface IFieldError {
  isShow: boolean;
  minAmount: string;
  ticker: string;
}

const FieldError = ({ isShow, minAmount, ticker }: IFieldError) => {
  return (
    <div className={cn(styles.error, isShow && styles.error_show)}>
      Minimal amount is {minAmount} {ticker}.
    </div>
  );
};

export default FieldError;
