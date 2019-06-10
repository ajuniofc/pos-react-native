import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from "../screens/Login";
import Register from "../screens/Register";

const Routes = createStackNavigator(
    {
        pageLogin: { screen: Login }, pageRegister: { screen: Register }
    }, {
        headerMode: 'screen' }
);

const App = createAppContainer(Routes)

export default App