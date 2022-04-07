import React from 'react';
import Navbar from '../Navbar/Navbar';
import Modals from '../Modals/Modals';

const Overflow = (props) => {
    return (
        <div>
            <Navbar
              theme={props.theme}
              setTheme={props.setTheme}
              setSettingsVisible={props.setSettingsVisible}
              isGeo={props.isGeo}
              coords={props.coords}
            />
            <Modals
              theme={props.theme}
              setTheme={props.setTheme}
              settingsVisible={props.settingsVisible}
              setSettingsVisible={props.setSettingsVisible}
              isGeo={props.isGeo}
              setIsGeo={props.setIsGeo}
              isWeatherGraph={props.isWeatherGraph}
              setIsWeatherGraph={props.setIsWeatherGraph}
              isForbiddenWeatherGraph={props.isForbiddenWeatherGraph}
              setIsForbiddenWeatherGraph={props.setIsForbiddenWeatherGraph}
              AgentModalGeo={props.AgentModalGeo}
              setAgentModalGeo={props.setAgentModalGeo}
            />
        </div>
    );
};

export default Overflow;