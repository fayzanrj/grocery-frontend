import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListContainer = (props) => {
  const { container } = styles;
  return (
    <View style={container}>
      {props.myList ? <Text style={styles.text}>My Lists</Text> : <Text style={styles.text}>Shared Lists</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    padding : 20
  },
  text : {
    color : 'white',
    fontSize : 30
  }
});

export default ListContainer;
