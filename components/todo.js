import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Todo({ item, pressHandler }) {

        return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.list}>{item.todo}</Text>
        </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
 
    list: {
      margin:20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      borderWidth: 1,
      borderColor: "#B2C248",
      borderRadius: 20,
      backgroundColor: 'yellow',
      textAlign: "center"
     
    }

  });