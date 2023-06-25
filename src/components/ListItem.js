import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ListItem = (props) => {
  const {
    container,
    headTxt,
    itemTxt,
    contentContainer,
    quantityContainer,
    checked,
    btnContainer,
    checkedBy
  } = styles;
  return (
    <TouchableOpacity style={btnContainer}>
      <View style={container}>
        <View style={contentContainer}>
          <Text style={headTxt}>Item name</Text>
          <Text style={[itemTxt, props.checkedBy.length > 0 ? checked : ""]}>
            {props.content}
          </Text>
        </View>
        <View style={quantityContainer}>
          <Text style={headTxt}>Quantity</Text>
          <Text style={[itemTxt, props.checkedBy.length > 0 ? checked : ""]}>
            {props.quantity}
          </Text>
        </View>
      </View>
      {props.checkedBy.length > 0 ? (
        <View style={checkedBy}>
          <Text>Checked By : Fayzan</Text>
        </View>
      ) : (
        ""
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: "90%",
    height: 120,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white",
    alignSelf: "center",
    overflow: "scroll",
  },
  container: {
    width: "100%",
    height: 70,
    // backgroundColor: "red",
    flexDirection: "row",
    marginBottom: 10,
  },
  headTxt: {
    fontSize: 14,
  },
  contentContainer: {
    flexDirection: "column",
    width: "70%",
  },
  quantityContainer: {
    flexDirection: "column",
    width: "30%",
    alignItems: "center",
    overflow: "scroll",
  },
  itemTxt: {
    fontSize: 25,
    marginTop: 10,
    textDecorationStyle: "solid",
  },
  checked: {
    textDecorationLine: "line-through",
  },
  checkedBy : {
    // width : '100%',

  }
});

export default ListItem;
