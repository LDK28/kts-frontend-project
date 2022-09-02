import classNames from "classnames";
import styles from './Input.module.scss';

/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange'
> & {
    /** Значение поля */
    value: string;
    /** Callback, вызываемый при вводе данных в поле */
    onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
    const className = classNames({ 'input_disabled': props.disabled === true }, props.className, 'input', `${styles.input}`);

    const handleChange = (event: any) => {
        let value = event.target.value;
        onChange(value);
    }

    return <input
        {...props}
        value={value}
        type="text"
        className={className}
        onChange={handleChange}
    />
};

export default Input;