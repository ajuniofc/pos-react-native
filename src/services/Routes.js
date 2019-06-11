import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Login from "../screens/Login";
import Register from "../screens/Register";
import ToDoTasks from "../screens/ToDoTasks";
import DoneTasks from "../screens/DoneTasks";
import App from "../screens/App"
import Task from "../screens/Task";

const taskListTabNavigator = createBottomTabNavigator({
    pageToDoTasks: { screen: ToDoTasks, title: 'To Do' },
    pageDoneTasks: { screen: DoneTasks, title: 'Done' }
});

const Routes = createStackNavigator(
    {
        pageApp: { screen: App},
        pageLogin: { screen: Login },
        pageRegister: { screen: Register },
        pageTaskList: {
            screen: taskListTabNavigator,
            navigationOptions: {
                        title: 'Task List'
            }
        },
        pageTask: { screen: Task}
    }, {
        headerMode: 'screen'
    }
);

export default createAppContainer(Routes)