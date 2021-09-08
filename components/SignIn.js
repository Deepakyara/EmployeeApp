import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Alert,
    SafeAreaView
} from 'react-native';
import { TextInput } from 'react-native-paper';


export default class SignIn extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        email: '',
        password: ''
    }

    onLoginButton = () => {
        this.props.navigation.navigate('Home', {});
    }



    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flexDirection:'row'}}>
                        <Text style={[styles.title]}>EMPLOYEE APP</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={this.state.email}
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        value = {this.state.password}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View styles={styles.login}>
                <TouchableHighlight style={[styles.loginContainer]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableHighlight>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    login: {
        marginTop: 200,
    },
    inputContainer: {
        width: 300,
        height: 45,
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        marginTop: 29,
        height: 45,
        flex: 1,
        color: 'black',
        fontSize: 20,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    loginContainer: {
        marginTop: 50,
        height: 50,
        width: 250,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6200EE",
    },
    title: {
        padding: 5,
        marginBottom:20,
        marginTop: 150,
        color: '#36454F',
        fontSize: 27,
        fontWeight: 'bold',
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    forgotPassword:{
        padding: 40,
        fontSize: 15,
        color: "#6200EE",
    },
});
