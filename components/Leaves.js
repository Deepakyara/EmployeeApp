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
      SafeAreaView,
      FlatList,
      ScrollView,
      TouchableOpacity
  } from 'react-native';
import { getLeavesById } from '../services/LeavesPSQL';
import { useEffect,useState } from 'react';


const Item = ({ item, onPress,style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.x, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{flex:2,  height: 50}} >
          <Text style={styles.body}> ID               : {item.id}</Text>
          <Text style={styles.body}> Startdate : {item.startdate}</Text>
          <Text style={styles.body}> Enddate   : {item.enddate}</Text>
          <Text style={styles.body}> Count       : {item.count}</Text>
        </View>
      </View>
  </TouchableOpacity>
);

export default function Leaves()  {
  const [leave, setLeave] = useState(null);
  const [count, doRender] = useState(0);
  const [employees, setEmployees] = useState([]);


  let loadEmployees = async () => {
    let list = await getLeavesById(2);
    setEmployees(list);
  }

  useEffect(()=>{
      loadEmployees();
  }, []);


  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setLeave(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={{margin:-90}}
        data={employees}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={leave}
      />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    color: '#000000',
    fontSize: 20,
    marginLeft:0,
  },
  x: {
    padding: 90,
    marginVertical: 0,
    marginHorizontal: 0,
    marginLeft:0,
  },
  container: {
    backgroundColor:'white',
    flex: 1,
    marginTop: 0,
},
});
