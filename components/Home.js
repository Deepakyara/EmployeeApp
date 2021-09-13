import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  SafeAreaView,
  ScrollView
} from 'react-native';
import {getId, getToken} from '../services/Users';
import { getEmployeeById } from "../services/EmployeePSQL";

export default function Login() {
  const [employee, setEmployee] = useState([]);
  
  let id = getId();
  let token = getToken();

  let loadEmployee = async () => {
    let list = await getEmployeeById(id, token);
    setEmployee(list);
  }

  useEffect(()=>{
      loadEmployee();
  }, []);
  
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.name}>Welcome {employee.name}!</Text>
            </View>

            <View style={styles.perDetContainer}>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitle1}>Personal Details</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Name</Text>
                    <Text style={styles.detail}>{employee.name}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Address</Text>
                    <Text style={styles.detail}>{employee.address}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Date Of Birth</Text>
                    <Text style={styles.detail}>{employee.dateOfBirth}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Education</Text>
                    <Text style={styles.detail}>{employee.education}</Text>
                </View>
            </View>

            <View style={styles.emplContainer}>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitle1}>Employment Details</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Employee ID</Text>
                    <Text style={styles.detail}>{employee.id}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Email</Text>
                    <Text style={styles.detail}>{employee.email}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Date Of Joining</Text>
                    <Text style={styles.detail}>{employee.dateOfJoining}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Role</Text>
                    <Text style={styles.detail}>{employee.role}</Text>
                </View>
            </View>
              
        </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    perDetContainer: {
        margin: 8,
        paddingBottom: 20
    },
    emplContainer: {
        margin: 8,
    },
    welcomeContainer: {
      flexDirection: "row",
      marginBottom: 16,
    },
    name: {
      fontSize: 30,
      color: "#00ced1",
      fontWeight: '900',
      padding: 4,
    },
    subtitle: {
      borderBottomColor: 'grey',
      borderBottomWidth: 2,
    },
    subtitle1: {
      fontSize: 24,
      paddingBottom: 8,
      color: '#150050',
      fontWeight: '700'
    },
    detailsContainer: {
      margin: 5,
      backgroundColor: '#F7F6F2',
      padding: 8,
      borderBottomWidth: 3,
      borderBottomColor: '#00ced1',
      borderTopRightRadius: 75
    },
    detailsTitle: {
      color: '#00ced1',
      fontSize: 17,
      fontWeight: '700',
      paddingBottom: 7
    },
    detail: {
      paddingTop: 4,
      fontSize: 21,
      fontFamily: "Times New Roman"
    }
});
