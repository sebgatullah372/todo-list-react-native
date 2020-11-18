import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';

export default function App() {
  
  const [todos, setTodos] = useState([
    {todo: 'brush', key: '1'},
    {todo: 'eat', key: '2'},
    {todo: 'office going', key:'3'}
  ]);

  return (
    
    <View style={styles.container}>
      <Header/>
      <StatusBar style="auto" />
      <FlatList
       data={todos}
       renderItem = {({item}) =>(
       <Text style={styles.list}>{item.todo}</Text>
       )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    

  },
  list:{
    paddingTop: 30,
    paddingLeft: 20 
  }
});
