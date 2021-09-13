import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { getLeavesById } from "../services/LeavesPSQL";
import { getId, getToken } from "../services/Users";

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
      <View style={{flex:2,  height: 70}} >
        {/* <Text style={styles.details}>Emp ID    : {item.employeeid}</Text> */}
          <Text style={styles.details}>Startdate   : {item.startdate.substring(0,10)}</Text>
          <Text style={styles.details}>Enddate    : {item.enddate.substring(0,10)}</Text>
          <Text style={styles.details}>Count       : {item.count}</Text>
        </View>  
      </View>
  </TouchableOpacity>
);

const Leaves = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [leaves, setLeaves] = useState([]); 
  const [total, setTotal] = useState(0); 


    let id = getId();
    let token = getToken();

   loadLeaves = async()=>{
     count=0
    let list = await getLeavesById(id, token);
    for(let i = 0;i<list.length;i++)
    {
      count=count+list[i].count
    }
    setTotal(count)
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
      <Text style={styles.header}>
        Total Leaves Applied : {total}
      </Text>
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
  header: {
    padding: 20,
    fontSize: 19,
    fontWeight:'bold',
    fontFamily:"Times New Roman"
  }
});

export default Leaves;
