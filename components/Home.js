
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
  import { getEmployeeById } from '../services/EmployeePSQL';
  import { useEffect,useState } from 'react';
 
  
  
  export default function Login() {

    let [emp,setEmp] = useState({})

    loadCustomers = async()=>{
      let list = await getEmployeeById(2);
      
      console.log(list)
      setEmp(emp=list);
      console.log('hello 2')
      console.log(emp)
    
    }

    useEffect(()=>{
        loadCustomers();
    },[]);
  
    // useEffect(()=>{
    //   const unsubscribe = navigation.addListener('focus', () => {
    //     loadCustomers();
    //   });
    //   return unsubscribe;
    // },[navigation]);

    

      return (
        <SafeAreaView style={styles.container}>
         
        <View >
          <Text style={styles.heading}>Hello {emp.name}</Text>
        </View>

        <View >

          <Text style={styles.body}>ID                 : {emp.id}</Text>
          <Text style={styles.body}>email           : {emp.name}</Text>
          <Text style={styles.body}>address      : {emp.name}</Text>
          <Text style={styles.body}>DOB            : {emp.name}</Text>
          <Text style={styles.body}>DOJ            : {emp.name}</Text>
          <Text style={styles.body}>Education  : {emp.name}</Text>
          <Text style={styles.body}>Type           : {emp.name}</Text>
          <Text style={styles.body}>Active         : {emp.name}</Text>
        </View>

        </SafeAreaView>
        
        
      );
    }

    const styles = StyleSheet.create({
      container: {
          paddingTop: 40,
          justifyContent: 'flex-start',
          alignItems: 'center',
      },

      heading: {
        color: '#6200ee',
        fontSize: 50,
        fontWeight: '600',
    },
      body: {
        color: '#000000',
        fontSize: 20,
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
  
  
