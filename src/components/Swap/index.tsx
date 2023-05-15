import styles from './index.module.scss';
import cn from 'classnames';

interface ISwap {
  swap: () => void;
}

const Swap = ({ swap }: ISwap) => {
  return (
    <div className={styles.swap} onClick={swap}>
      <div className={styles.arrow} />
      <div className={cn(styles.arrow, styles.arrow_turn)} />
    </div>
  );
};

export default Swap;
