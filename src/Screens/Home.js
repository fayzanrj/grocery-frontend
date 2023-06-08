import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../images/logo.png";
import MyListItem from "../components/MyListItem";
import ListContainer from "../components/ListContainer";

const Home = () => {
  const [myList, setMyList] = useState(true);
  const {
    container,
    topContainer,
    navContainer,
    listContainer,
    navTxt,
    btn,
    btnTxt,
    btnContainer,
    listBtnTxt,
    selectedlistBtn,
    notSelectedListBtn,
    listBtnsContainer,
    listItemsContainer
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={topContainer}>
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
      </View>
      <View style={listContainer}>
        <View style={listBtnsContainer}>
          <TouchableOpacity
            style={myList ? selectedlistBtn : notSelectedListBtn}
            onPress={() => setMyList(true)}
          >
            <Text style={listBtnTxt}>My Lists</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={myList ? notSelectedListBtn : selectedlistBtn}
            onPress={() => setMyList(false)}
          >
            <Text style={listBtnTxt}>Shared Lists</Text>
          </TouchableOpacity>
        </View>
        <View style={listItemsContainer}>
          <ListContainer myList={myList}/>
        </View>
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
  topContainer: {
    width: "100%",
    // backgroundColor : 'red',
    flex: 1,
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
  listContainer: {
    flex: 4.5,
    width: "100%",
    // backgroundColor : '',
  },
  listBtnsContainer: {
    width : '100%',
    flexDirection: "row",
    justifyContent: "space-around",
  },
  selectedlistBtn: {
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a18aff",
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
  notSelectedListBtn: {
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  listBtnTxt: {
    color: "white",
    fontSize: 20,
  },
  listItemsContainer: {
    width : '100%',
    flex :  1,
  }
});
export default Home;
