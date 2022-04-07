import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from '../UI/pages/ErrorPage/ErrorPage';
import Happy_Birthday from '../UI/pages/Happy_Birthday';
import Projects from '../UI/pages/Projects';
import Overflow from '../UI/Overflow/Overflow';
import WeatherPage from '../UI/pages/WeatherPage/WeatherPage';
import WeatherExactPage from '../UI/pages/WeatherExactPage/WeatherExactPage';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Overflow
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
                coords={props.coords}
            />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Happy_Birthday
                            theme={props.theme}
                            setTheme={props.setTheme}
                            settingsVisible={props.settingsVisible}
                            setSettingsVisible={props.setSettingsVisible}
                            isGeo={props.isGeo}
                            setIsGeo={props.setIsGeo}
                        />
                    }
                />
               <Route
                    exact
                    path="/projects"
                    element={
                        <Projects
                            theme={props.theme}
                            setTheme={props.setTheme}
                            settingsVisible={props.settingsVisible}
                            setSettingsVisible={props.setSettingsVisible}
                            isGeo={props.isGeo}
                            setIsGeo={props.setIsGeo}
                        />
                    }
                />
                <Route
                    exact
                    path="/projects/weather"
                    element={
                        <WeatherPage
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
                            coords={props.coords}
                        />
                    }
                />
                <Route
                    exact
                    path="/projects/weather/:index"
                    element={
                        <WeatherExactPage
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
                            coords={props.coords}
                        />
                    }
                />
                <Route
                    exact
                    path='/errors/404'
                    element={
                        <ErrorPage
                            theme={props.theme}
                            setTheme={props.setTheme}
                            settingsVisible={props.settingsVisible}
                            setSettingsVisible={props.setSettingsVisible}
                            isGeo={props.isGeo}
                            setIsGeo={props.setIsGeo}
                            />
                    }
                />
                <Route
                    path='/*'
                    element={<Navigate to={"/errors/404"}/>}
                >

                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;