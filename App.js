import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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

  const onPressHandler = (key) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text == null) {
      return;
    }
    if (text.length > 3) {
      setTodos((previousTodos) => {
        return [
          { todo: text, key: Math.random().toString() },
          ...previousTodos,
        ];
      });
    } else {
      Alert.alert("Sorry!", "Must contain atleast 4 characters", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <StatusBar style="auto" />
        <View style={styles.content}>
          <AddNewTodo submitHandler={submitHandler} />
          <View style={styles.flatList}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                // <Text style={styles.list}>{item.todo}
                // </Text>
                <Todo item={item} pressHandler={onPressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    backgroundColor: "gold",
  },
  flatList:{
    flex: 1,
    backgroundColor: 'coral'
  }
});
