import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../images/logo.png";

const Home = () => {
  const { container, navContainer, navTxt, btn, btnTxt, btnContainer } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={navContainer}>
        <Image source={logo} style={{ width: 100, height: 60 }} />
        <TouchableOpacity>
          <Text style={navTxt}>Muhammad Fayzan</Text>
        </TouchableOpacity>
      </View>
      <View style={btnContainer}>
        <TouchableOpacity style={btn}>
          <Text style={btnTxt}>Create a new list</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a18aff",
    alignItems: "center",
  },
  navContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  navTxt: {
    color: "white",
  },
  btnContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    width: "90%",
    height: 50,
    backgroundColor: "#a18aff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  btnTxt: {
    color: "white",
    fontSize: 20,
  },
});
export default Home;
