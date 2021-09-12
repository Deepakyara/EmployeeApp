import React, { useEffect, useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getAttendanceById } from "../services/AttendancePSQL";

//let DATA = getCustomers();
//console.log(">>>DATA>>>>>>>",DATA);


const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        {/* <View style={{flex:8, height: 50, flexDirection: 'row'}} >
            <View style={{flex:7, height: 50}}>
                <Text style={styles.title}>{item.id}</Text>
            </View>
        </View> */}
        <View style={{flex:2,  height: 90}} >
            <Text style={styles.phone}>DATE                  : {item.date.substring(0,10)}</Text>
            <Text style={styles.phone}>IN TIME              : {item.intimedate.substring(11,19)}</Text>
            <Text style={styles.phone}>OUT TIME          : {item.outtime.substring(11,19)}</Text>
            <Text style={styles.phone}>TOTAL HOURS  : {item.totalhours}</Text>
        </View>  
      </View>
  </TouchableOpacity>
);

const CustomerApp = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  const [customers, setCustomers] = useState([]);
  let navigation = useNavigation();  // #6e3b6e #f9c2ff  

   loadCustomer = async()=>{
    let list = await getAttendanceById(1);
    setCustomers(list);
    console.log("list",list);
  }

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      loadCustomer();
    });
    return unsubscribe;
  },[navigation]);

  DATA = customers;
  console.log("DATA>>>>>>",DATA);



  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#4682b4" : "#F7F6F2";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
     

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  
  item: {
    padding: 20,
    marginVertical: 8,
    borderColor: '#00ced1',
    borderWidth:3,
    marginHorizontal: 16,
    shadowColor: "#07000e",

shadowOpacity: 0.6,

shadowRadius: 4,

shadowOffset: {

height: 6,

width: 6

}
  },
  title: {
    fontSize: 32,
    fontWeight:'bold',
    color:'brown'
  },
  email: {
    fontSize: 20,
  },
  phone: {
    fontSize: 19,
    fontFamily:"Times New Roman"
  },
  address: {
    fontSize: 18,
  },
  dob: {
    fontSize: 16,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

export default CustomerApp;
