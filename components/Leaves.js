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
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getleaves } from '../services/LeavesData';
//import { LeaveRequest } from './components/LeaveRequest';


export default class Leave extends Component {
    constructor(props) {
        super(props);
    }

    onLeaveRequest = () => {
        //alert('Leave.js line 22');
        this.props.navigation.navigate('LeaveRequest');
        }
    
    render() {
        return (
            <SafeAreaView>
        <TouchableHighlight style={[styles.buttonContainer1, styles.loginButton1,styles.x]} onPress={() => this.onLeaveRequest()}>
                <Text style={styles.loginText}>Leave Request</Text>
        </TouchableHighlight>
        <Text style={styles.base1Text}>Leave Details</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    base1Text:{
        marginTop:50,
        fontSize:24,
        marginHorizontal:120,
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6200EE',
        marginBottom:0,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    buttonContainer1: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 275,
        borderRadius: 0,
    },
    loginButton1: {
        backgroundColor: "#6200EE",
        justifyContent: 'center',
    },
    x: {
        marginTop:40,
        justifyContent: 'center',
        marginLeft:60,   
    },
    loginText: {
        color: 'white',
        fontWeight:"bold",
        fontSize: 26,
    },

});
