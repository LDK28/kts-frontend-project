import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";

/** Вариант для выбора в фильтре */
export type Option = {
    /** Ключ варианта, используется для отправки на бек/использования в коде */
    key: string;
    /** Значение варианта, отображается пользователю */
    value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
    /** Массив возможных вариантов для выбора */
    options: Option[];
    /** Текущие выбранные значения поля, массив может быть пустым */
    value: Option[];
    /** Callback, вызываемый при выборе варианта */
    onChange: (value: Option[]) => void;
    /** Заблокирован ли дропдаун */
    disabled?: boolean;
    /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
    pluralizeOptions: (value: Option[]) => string;
}

export const MultiDropdown: React.FC<MultiDropdownProps> = ({ options, value, onChange, disabled, pluralizeOptions }) => {

    const optionHandleClick = (event: any) => {
        let values = value.slice();

        const optionKey = event.target.id;
        const optionSelected = event.target.selected;
        const optionValue = event.target.value;

        if (optionSelected === false) {

            const option: Option = {
                key: optionKey,
                value: optionValue
            }
            values.push(option);
        }
        else {
            values = values.filter((element) => element.key !== optionKey);
        }

        onChange(values);
    }

    const [isVisible, setIsVisible] = React.useState(false);
    const handleIsVisible = () => setIsVisible(!isVisible);

    return <div>
        <Button disabled={disabled} onClick={handleIsVisible}>
            {pluralizeOptions(value)}
        </Button>
        {isVisible && !disabled &&
            <div>
                {options.map((it) => <option
                    id={it.key}
                    key={it.key}
                    value={it.value}
                    onClick={optionHandleClick}
                    selected={value.some((el) => el.key === it.key)}>

                    {it.value}

                </option>)}
            </div>
        }

    </div >
}