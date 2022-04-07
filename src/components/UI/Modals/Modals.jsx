import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Settings from '../Settings/Settings';
import Toggler from '../Toggler/Toggler';

const Modals = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <Settings
                theme={props.theme}
                setTheme={props.setTheme}
                visible={props.settingsVisible}
                setVisible={props.setSettingsVisible}
                isGeo={props.isGeo}
                setIsGeo={props.setIsGeo}
                isWeatherGraph={props.isWeatherGraph}
                setIsWeatherGraph={props.setIsWeatherGraph}
                isForbiddenWeatherGraph={props.isForbiddenWeatherGraph}
                setIsForbiddenWeatherGraph={props.setIsForbiddenWeatherGraph}
            />
            <Modal
                theme={props.theme}
                setTheme={props.setTheme}
                visible={props.AgentModalGeo}
                setVisible={props.setAgentModalGeo}
                title={"Геолокация"}
                fixed
            >
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxWidth: "500px"}}>
                    <h4
                        className='text-center'
                        data-tooltip="
                        Система обнаружила несоответствие разрешений: Вы запретили в настройках браузера этому сайту получать Ваше местоположение, а внутри сайта указали разрешение на использование геолокации.
                        Пожалуйста, либо дайте сайту доступ к Вашему местоположению и нажмите на соответствующую кнопку, либо внутри сайта запретите доступ.
                    ">
                        Несоответствие разрешений
                    </h4>
                </div>
                <div style={{ maxWidth: "500px"}} className="row mt-4">
                    <div className='col text-center'>
                        <h5 className='mb-4'>Приложение</h5>
                        <Toggler
                            checked={props.isGeo}
                            setChecked={props.setIsGeo}
                        />
                    </div>
                    <div className='col text-center'>
                        <h5 className='mb-4'>Браузер</h5>
                        <Button onClick={() => navigator.geolocation.getCurrentPosition(() => window.location.reload())}>Проверить</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Modals;