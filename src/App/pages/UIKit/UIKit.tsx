import './UIKit.scss'

import Button from "@components/Button";
import Loader from '@components/Loader';
import { Card } from '@components/Card/Card';

const UIKit = () => {
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
                    <Button className='button'>Find Now</Button>
                </div>
            </div>

            <div className="window-checkbox">
                <div className='high-text'>
                    Чекбокс
                </div>
                <div>
                    <Button className='button'>Find Now</Button>
                </div>
            </div>

            <div className="window-multidropdown">
                <div className='high-text'>
                    МультиДропдаун
                </div>
                <div>
                    <Button className='button'>Find Now</Button>
                </div>
            </div>
        </div>
    );
}

export default UIKit;