import './UIKit.scss'

import Button from "@components/Button";
import Loader from '@components/Loader';
import { Card } from '@components/Card/Card';
import { Input } from '@components/Input/Input';
import { CheckBox } from '@components/CheckBox/CheckBox';
import MultiDropdown from '@components/MultiDropdown';
import { Option } from '@components/MultiDropdown/MultiDropdown';
import { useState } from 'react';

const UIKit = () => {
    const [value, setValue] = useState('Search property');

    return (
        <div className="window">
            <div className="window-button">
                <div className='high-text'>
                    Кнопка
                </div>
                <div>
                    <Button>Find Now</Button>
                </div>
            </div>

            <div className="window-loader">
                <div className='high-text'>
                    Лоадер
                </div>
                <div>
                    <Loader />
                </div>
            </div>

            <div className="window-card">
                <div className='high-text'>
                    Карточка
                </div>
                <div>
                    <Card image={'https://75.img.avito.st/image/1/1.hi84Mba6KsYOmOjDOHf3YsOSLMKMEiIEiZIuzoyaKA.RBdprhg8sWQfoJUlGYdmGAjJY3kEJ-OC2Vqq8xbNscA'}
                        categoty="Chair"
                        title={"White Aesthetic Chair"}
                        subtitle={"Combination of wood and wool"}
                        content="$63.47"></Card>
                </div>
            </div>

            <div className="window-input">
                <div className='high-text'>
                    Инпут
                </div>
                <div>
                    <Input value={value} onChange={(str: string) => setValue(str)} />
                </div>
            </div>

            <div className="window-checkbox">
                <div className='high-text'>
                    Чекбокс
                </div>
                <div>
                    <CheckBox onChange={function (value: boolean): void {
                        throw new Error('Function not implemented.');
                    }} />
                </div>
            </div>

            <div className="window-multidropdown">
                <div className='high-text'>
                    МультиДропдаун
                </div>
                <div>
                    <MultiDropdown
                        options={[]}
                        value={[]}
                        onChange={function (value: Option[]): void {
                            throw new Error('Function not implemented.');
                        }}
                        pluralizeOptions={() => "Category"} />
                </div>
            </div>
        </div >
    );
}

export default UIKit;