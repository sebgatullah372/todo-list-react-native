import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Todo({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.list}>
        <Text >{item.todo}</Text>
        <MaterialIcons name="delete" size={28} color="red" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "#B2C248",
    borderRadius: 20,
    backgroundColor: "yellow",
    textAlign: "center",
  },
});
