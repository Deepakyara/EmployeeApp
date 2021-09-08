import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    SafeAreaView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUsersByEmail, addUsers } from '../services/Users';
import SignUp from './SignUp';


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

    goToSignup = () => {
        this.props.navigation.navigate('SignUp', {});
    }

    re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={[ styles.loginButton1 ]}>
                        <Text style={[styles.login1]}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.loginButton2 ]} onPress={this.goToSignup}>
                        <Text style={[styles.login2]}>SIGN UP</Text>
                    </TouchableOpacity>
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

                <View styles={styles.continue}>
                <TouchableHighlight style={[styles.continueContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>CONTINUE</Text>
                </TouchableHighlight>
                </View>

                <View>
                    <Text style={styles.forgotPassword}>FORGOT PASSWORD</Text>
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
    continue: {
        marginTop: 200,
    },
    inputContainer: {
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        marginTop: 29,
        height: 45,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flex: 1,
        color: 'black',
        fontSize: 20,
    },
    continueContainer: {
        height: 50,
        width: 250,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    continueContainer: {
        marginTop: 50,
        height: 50,
        width: 300,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6200EE",
    },
    loginButton2: {
        borderRadius: 60,
        padding: 15,
        paddingLeft: 50,
        paddingRight: 20,
        marginRight: 20,
    },
    loginButton1: {
        backgroundColor: "#6200EE",
        borderRadius: 60,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 20,
        marginBottom:30
    },
    login2: {
        color: 'grey',
        fontSize: 16,
        fontWeight: '600',
    },
    login1: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
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