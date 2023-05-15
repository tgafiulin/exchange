import styles from './index.module.scss';

interface IButton {
  text: string;
  onClick: () => void;
  isShowMessage?: boolean;
  message?: string;
}

const Button = ({ text, onClick, isShowMessage, message }: IButton) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
      {isShowMessage && <span className={styles.errorMessage}>{message}</span>}
    </div>
  );
};

export default Button;
