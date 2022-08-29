import classNames from "classnames";
import { WithLoader } from "../WithLoader/WithLoader";

import styles from "./Button.module.scss"

/** Возможные раскраски кнопки */
export enum ButtonColor {
    /** Основная, акцентная кнопка */
    primary = 'primary',
    /** Второстепенная кнопка */
    secondary = 'secondary'
}

/** Пропсы, который принимает компонент Button */
export type ButtonProps = React.PropsWithChildren<{
    /**
     * Если true, то внутри кнопки вместе с children отображается компонент Loader
     * Также кнопка должна переходить в состояние disabled
     * По умолчанию - false
     */
    loading?: boolean;
    /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
    color?: ButtonColor;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ loading = false, color = ButtonColor.primary, children, ...props }) => {
    props.disabled ||= loading;

    const className = classNames(
        `${styles.button}`,
        'button',
        `button_color-${color}`,
        { 'button_disabled': props.disabled },
        props.className,
    );

    return <button {...props} className={className}>
        <WithLoader loading={loading}>
            {children}
        </WithLoader>
    </button>;
}

export default Button;