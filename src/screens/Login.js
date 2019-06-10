import React, { Component } from 'react'
import {KeyboardAvoidingView, View, Image, TextInput, Button, Text, StyleSheet, SafeAreaView} from 'react-native'

const img = require('../assets/TodoList.png')

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        email: this.props.email,
        password: ''
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>

                <View style={styles.topView}>
                    <Image style={styles.img} source={img} />
                </View>

                <View style={styles.bottomView}>
                    <TextInput style={styles.input}
                               placeholder='E-mail'
                               value={this.state.email}
                               keyboardType={'email-address'}
                               autoCapitalize='none'
                               onChangeText={(text) => this.setState({email: text})} ></TextInput>

                    <TextInput style={styles.input}
                               placeholder='Password'
                               secureTextEntry={true}
                               onChangeText={(password) => this.setState({password})} ></TextInput>

                    <Button title='Sing In'
                            onPress={() => alert(`Email: ${this.state.email} \nPassword: ${this.state.password}`)} />
                            <View style={styles.textConteiner}>
                                <Text>Not a menber? Let's </Text>
                                <Text style={styles.textRegister} onPress={() => {
                                    const {navigate} = this.props.navigation
                                    navigate('pageRegister')
                                }}>Register</Text>
                            </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    topView:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    img:{
        width: 200,
        height: 200
    },
    bottomView:{
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input:{
        marginBottom: 20
    },
    textConteiner:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    textRegister:{
        fontWeight: 'bold'
    }
})