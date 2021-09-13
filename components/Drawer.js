import React, {useState, useEffect} from 'react'
import { View,StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { getEmployeeById } from '../services/EmployeePSQL';
import { getToken, getId} from '../services/Users'


export function DrawerContent(props){

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
  
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                            source={{
                                uri:'https://www.pexels.com/photo/man-smiling-behind-wall-220453/'
                            }}
                            size={50}
                            />
                            <View style={{marginLeft:15,flexDirection:'column',marginTop:10}}>
                                <Title style={styles.title}>{employee.name}</Title>
                                <Caption style={styles.caption}></Caption>
                            </View>
                        </View>
                    </View>
                    <View
  style={{
    marginTop:20,
    marginLeft:15,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    width:"80%"
  }}
/>

                <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="home-outline"
                    color={color}
                    size={size}/>
                )}
                label="Home"
                onPress={()=>{props.navigation.navigate('Home')}}
                />
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="newspaper-outline"
                    color={color}
                    size={size}/>
                )}
                label="Leaves"
                onPress={()=>{props.navigation.navigate('Leaves')}}
                />
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="cart-outline"
                    color={color}
                    size={size}/>
                )}
                label="Attendance"
                onPress={()=>{props.navigation.navigate('Attendance')}}
                />
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="briefcase-outline"
                    color={color}
                    size={size}/>
                )}
                label="SalarySlip"
                onPress={()=>{props.navigation.navigate('SalarySlip')}}
                />

                </Drawer.Section>
                <Drawer.Section>
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="log-out-outline"
                    color={color}
                    size={size}/>
                )}
                label="LOG OUT"
                onPress={()=>{props.navigation.navigate('SignIn')}}
                />
                </Drawer.Section>
                                               
                </View>
                </DrawerContentScrollView>

            
        </View>

    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: '500',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 10,
    },
    bottomDrawerSection: {
        marginTop: 65,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
