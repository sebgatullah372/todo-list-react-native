import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddNewTodo({submitHandler}){
    const [text, setText] = useState(null);

    textChangeHandler = (value) =>{
           setText(value);
    }
        return(
        <View style={styles.toDoAddForm}>
            <TextInput
            style={styles.input}
            value= {text}
            onChangeText={textChangeHandler}
             placeholder="Add new item to your list"
            />
            <Button color="#fc5a03" onPress={()=>{submitHandler(text); textChangeHandler(null);}} title="ADD TODO"></Button>
        </View>      
            
        );
}

const styles = StyleSheet.create({
    toDoAddForm:{
      flexDirection: "row",
      alignItems: 'center',
      padding: 5
      
    },
    input: {
      flex: 5,
      height: 40,
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: "red"
    }
 
  });

