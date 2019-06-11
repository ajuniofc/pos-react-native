import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Login from "../screens/Login";
import Register from "../screens/Register";
import ToDoTasks from "../screens/ToDoTasks";
import DoneTasks from "../screens/DoneTasks";
import Platform from "react-native"
import App from "../screens/App"

const taskListTabNavigator = createBottomTabNavigator({
    pageToDoTasks: { screen: ToDoTasks, title: 'To Do' },
    pageDoneTasks: { screen: DoneTasks, title: 'Done' } });

const Routes = createStackNavigator(
    {
        pageApp: { screen: App},
        pageLogin: { screen: Login },
        pageRegister: { screen: Register },
        pageTasksList: {
            screen: taskListTabNavigator,
            navigationOptions: {
                        title: 'Task List'
            }
        }
    }, {
        headerMode: 'screen' }
);

const App = createAppContainer(Routes)

export default App