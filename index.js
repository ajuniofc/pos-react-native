import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';

import { name as appName } from './app.json';

import Routes from "./src/services/Routes";
import {initializeFirebaseApi} from "./src/services/FirebaseApi";

const wrappedRoutes = () => { return (
    <SafeAreaView style={{ flex: 1 }}>
        <Routes />
    </SafeAreaView> );
};

AppRegistry.registerComponent(appName, () => {
    console.disableYellowBox = true;
    initializeFirebaseApi();
    return wrappedRoutes
});