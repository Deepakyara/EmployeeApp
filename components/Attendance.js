import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { getId, getToken } from "../services/Users";
import { getAttendanceById } from '../services/AttendancePSQL';

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
       <View style={{flex:2,  height: 90}} >
            <Text style={styles.details}>DATE                  : {item.date.substring(0,10)}</Text>
            <Text style={styles.details}>IN TIME              : {item.intimedate.substring(11,19)}</Text>
            <Text style={styles.details}>OUT TIME          : {item.outtime.substring(11,19)}</Text>
            <Text style={styles.details}>TOTAL HOURS  : {item.totalhours}</Text>
        </View>  
      </View>
  </TouchableOpacity>
);

const Attendance = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [leaves, setLeaves] = useState([]); 


    let id = getId();
    let token = getToken();

   loadLeaves = async()=>{
    let list = await getAttendanceById(id, token);
    setLeaves(list);
  }

  useEffect(()=>{
    loadLeaves();
  },[]);


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
        data={leaves}
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
  details: {
    fontSize: 19,
    fontFamily:"Times New Roman"
  },
});

export default Attendance;
