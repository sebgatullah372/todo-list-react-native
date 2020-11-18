import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos </Text> 

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      
      height: 80,
      backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: "center"

    },

    title:{
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
      
      
    }
  });