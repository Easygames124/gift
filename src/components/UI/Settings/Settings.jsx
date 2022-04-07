import React, { useEffect, useState } from 'react';
import classes from './Settings.module.css';
import Theme_Choose from '../Theme_Choose/Theme_Choose';
import Modal from '../Modal/Modal';
import Toggler from '../Toggler/Toggler';

const Settings = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const changeWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    }, []);
    
    return (
        <Modal
            visible={props.visible}
            setVisible={props.setVisible}
            theme={props.theme}
            title={"Настройки"}
        >
            <h5 className='mb-3'>Выберите тему</h5>
            <div className={classes.themes}>
                <Theme_Choose
                    theme={props.theme}
                    setTheme={props.setTheme}
                    showTheme={"dark"}
                />
                <Theme_Choose
                    theme={props.theme}
                    setTheme={props.setTheme}
                    showTheme={"light"}
                />
            </div>
            <div>
                <h4 className='mt-3 mb-3'>Разрешения</h4>
                <span
                    className={classes.permission}
                    data-tooltip="Геолокация нужна для отображения погоды в Вашем районе. Если отключить, погода станет недоступна."
                >
                    Геолокация
                    <Toggler
                        checked={props.isGeo}
                        setChecked={props.setIsGeo}
                    />
                </span>
                <h4 className='mt-4'>Расширенные настройки</h4>
                <h4 className='mt-3 mb-3'>Погода</h4>
                <h5 className='mb-2'>График</h5>
                <span
                    className={classes.permission + " mb-3"}
                    data-tooltip=
                    {`Упоминать ли график в погоде?
                        ${width >= 500
                        ? "Ваше устройство подходит для просмотра."
                        : "Не рекомендую - у Вас слишком маленький экран."}
                    `}
                >
                    Запрет на график
                    <Toggler
                        checked={props.isForbiddenWeatherGraph}
                        setChecked={props.setIsForbiddenWeatherGraph}
                    />
                </span>
                <span
                    className={classes.permission}
                    data-tooltip=
                    {`Данная линейная диаграмма визуализирует прогноз погоды: температуру, облачность и влажность.
                        ${width >= 500
                        ? "Ваше устройство подходит для просмотра."
                        : "Не рекомендую - у Вас слишком маленький экран."}
                    `}
                >
                    Показывать график по умолчанию
                    <Toggler
                        checked={props.isWeatherGraph}
                        setChecked={props.setIsWeatherGraph}
                        disabled={props.isForbiddenWeatherGraph}
                    />
                </span>
            </div>
        </Modal>
    );
};

export default Settings;