import styles from "./Buttons.module.css";

interface Props {
  children?: React.ReactNode;
  color?: string;
  onClick?: () => void;
}
const Buttons = ({ children, color, onClick }: Props) => {
  return (
    <div>
      <button type="button" className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
