import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddNewTodo({submitHandler}){
    const [text, setText] = useState("Sample To Do");

    textChangeHandler = (value) =>{
           setText(value);
    }
        return(
        <View>
            <TextInput
            style={styles.input}
            value= {text}
            onChangeText={textChangeHandler}
             placeholder="Add new item to your list"
            />
            <Button onPress={()=>{submitHandler(text); textChangeHandler('');}} title="ADD TODO"></Button>
        </View>      
            
        );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      padding: 10,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: "red"
    },
 
  });

