import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import Todo from "./components/todo";
import AddNewTodo from "./components/addNewTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { todo: "brush", key: "1" },
    { todo: "eat", key: "2" },
    { todo: "office going", key: "3" },
    { todo: "working", key: "4" },
  ]);

  const onPressHandler = (key) =>{
    
     setTodos((previousTodos)=>{
        
        return previousTodos.filter(todo => todo.key != key)
     })
  }

  const submitHandler = (text)=>{
        setTodos((previousTodos)=>{
          return[
            {todo: text, key: Math.random().toString()},
            ...previousTodos
          ]
        })
  }

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <AddNewTodo submitHandler={submitHandler}/>
      <FlatList
        data={todos}
        renderItem={({ item }) => 
        // <Text style={styles.list}>{item.todo}
        // </Text>
        <Todo item={item} pressHandler={onPressHandler}/>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

});
