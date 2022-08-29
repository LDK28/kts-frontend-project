import styles from './CheckBox.module.scss';

/** Пропсы, которые принимает компонент CheckBox */
export type CheckBoxProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange'
> & {
    /** Вызывается при клике на чекбокс */
    onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({ onChange, ...props }) => {

    const handleChange = (event: any) => {
        const value: boolean = event.target.checked;
        onChange(value);
    }

    return <input type='checkbox' {...props} onChange={handleChange} className={`${styles.checkbox}`} />
};

export default CheckBox;