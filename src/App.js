import React, { useEffect, useState } from 'react';
import './App.css';
import Storage from './API/Storage';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { ThemeProvider } from 'styled-components';
import Router from './components/Router/Router';

const checkPermissions = (permission) => {
  switch (permission) {
    case 'geo': {
      navigator.geolocation.getCurrentPosition(() => {
        return true;
      }, () => {
        return false;
      });
    }
  }
};

const App = () => {
  const [AgentPermissions, setAgentPermissions] = useState({});
  const [AgentModalGeo, setAgentModalGeo] = useState(false);
  const [theme, setTheme] = useState(Storage.getUserData("settings")?.theme || "dark");
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [isGeo, setIsGeo] = useState(Storage.getUserData("settings")?.isGeo == undefined ? true : Storage.getUserData("settings")?.isGeo);
  const [coords, setCoords] = useState('');
  const [isWeatherGraph, setIsWeatherGraph] = useState(
    Storage.getUserData("settings")?.extended?.weather?.isWeatherGraph
    ? Storage.getUserData("settings")?.extended?.weather?.isWeatherGraph
    : false
  );
  const [isForbiddenWeatherGraph, setIsForbiddenWeatherGraph] = useState(
    Storage.getUserData("settings")?.extended?.weather?.isForbiddenWeatherGraph
    ? Storage.getUserData("settings")?.extended?.weather?.isForbiddenWeatherGraph
    : false
  );

  

  useEffect(() => {
    if (AgentModalGeo) {
      setAgentModalGeo(false);
    };
    Storage.setUserData("settings", {
      ...Storage.getUserData("settings"),
      isGeo: isGeo
    });
  }, [isGeo]);
  
  useEffect(() => {
    Storage.setUserData("settings", {
      ...Storage.getUserData("settings"),
      theme: theme
    });
  }, [theme]);
  
  useEffect(() => {
    Storage.setUserData("settings", {
      ...Storage.getUserData("settings"),
      extended: {
        weather: {
          ...Storage.getUserData("settings")?.extended?.weather,
          isWeatherGraph: isWeatherGraph
        }
      }
    });
  }, [isWeatherGraph]);

  useEffect(() => {
    Storage.setUserData("settings", {
      ...Storage.getUserData("settings"),
      extended: {
        weather: {
          ...Storage.getUserData("settings")?.extended?.weather,
          isForbiddenWeatherGraph: isForbiddenWeatherGraph
        }
      }
    });
    setIsWeatherGraph(isForbiddenWeatherGraph ? !isForbiddenWeatherGraph : isWeatherGraph);
  }, [isForbiddenWeatherGraph]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        });
      }, (error) => {
        if (isGeo) {
          setAgentModalGeo(true);
        };
      });
    } else {
      alert("Ваш браузер не поддерживает Geolocation API, то есть Вы не сможете воспользоваться сервисами, работающими на основе Вашего местоположения. Обновитесь!");
    };
    if (
      !Storage.getUserData('data')?.used ||
       Storage.getUserData('data')?.used === false) {
        setSettingsVisible(true);
        Storage.setUserData('data', {
          ...Storage.getUserData('data'),
          used: true
        });
    } else {
      
    };
  }, []);
  return (
      <div>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles/>
          <Router
            theme={theme}
            setTheme={setTheme}
            settingsVisible={settingsVisible}
            setSettingsVisible={setSettingsVisible}
            isGeo={isGeo}
            setIsGeo={setIsGeo}
            isWeatherGraph={isWeatherGraph}
            setIsWeatherGraph={setIsWeatherGraph}
            isForbiddenWeatherGraph={isForbiddenWeatherGraph}
            setIsForbiddenWeatherGraph={setIsForbiddenWeatherGraph}
            AgentModalGeo={AgentModalGeo}
            setAgentModalGeo={setAgentModalGeo}
            coords={coords}
          />
        </ThemeProvider>
      </div>
  );
};

export default App;