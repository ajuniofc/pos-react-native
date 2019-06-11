import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { readTasksFromFirebaseAsync } from "../services/FirebaseApi";
import TaskListView from "../components/TaskListView";

const imgDone = require('../assets/done.png');
const imgPlus = require('../assets/add.png');

export default class DoneTasks extends Component {
    static navigationOptions = {
        tabBarLabel: 'Done',
        tabBarIcon: ({ tintColor }) =>
            (<Image source={imgDone}
                    style={[styles.icon, { tintColor: tintColor }]} />)
    }

    state = {
        tasks: []
    }

    componentDidMount() {
        readTasksFromFirebaseAsync(this._fetchTasks.bind(this));
    }

    _fetchTasks(tasks) {
        const tasksDone = tasks.filter(t => t.isDone);
        this.setState({
            tasks: tasksDone
        });
    }

    _goToTask() {
        this.props.navigation.navigate('pageTask');
    }

    render(){
        return (
            <View style={styles.container} >

                <TaskListView tasks={this.state.tasks} navigation={this.props.navigation}/>

                <TouchableOpacity style={styles.floatButton}
                                  onPress={()=> this._goToTask()}>
                    <Image source={imgPlus} style={styles.img} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({ container: {
        flex: 1,
        flexDirection: 'column', paddingLeft: 10, paddingRight: 10
    }, icon: {
        width: 26,
        height: 26 },
    img: {
        width: 50,
        height: 50
    },
    floatButton: {
        position: 'absolute',
        right: 20,
        bottom: 20
    }
});