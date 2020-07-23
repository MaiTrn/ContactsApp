import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


 const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => {props.onPress(props)}}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
    row: {
        padding: 15,
        margin: 5,
    }
})

export default Row