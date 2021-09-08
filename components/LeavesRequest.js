import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

const LeaveRequest = (props) => {
    const [employeeid, onChangeEmployeeID] = React.useState('');
    const [startdate, onChangeStartdate] = React.useState('');
    const [enddate, onChangeEnddate] = React.useState('');
    const [count, onChangeCount] = React.useState('');
    
    var submit = () => {
        alert('Leave Request.js line 21')
        //props.navigation.navigate('CustomerApp', {});
    }

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.inputContainer_2}>
                    <TextInput style={styles.inputs}
                        placeholder="EmployeeID"
                        underlineColorAndroid='transparent'
                        value={employeeid}
                        onChangeText={onChangeEmployeeID} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Startdate"
                        underlineColorAndroid='transparent'
                        value={startdate}
                        onChangeText={onChangeStartdate} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Enddate"
                        underlineColorAndroid='transparent'
                        value={enddate}
                        onChangeText={onChangeEnddate} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Count"
                        underlineColorAndroid='transparent'
                        value={count}
                        onChangeText={onChangeCount} />
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => submit()}>
                    <Text style={styles.loginText}>Submit</Text>
                </TouchableHighlight>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer_2: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        marginTop:60,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});

export default LeaveRequest;
