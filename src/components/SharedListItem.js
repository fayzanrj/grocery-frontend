import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import ListUpContext from "../context/ListUpContext";

const SharedListItem = (props) => {
  const navigation = useNavigation();

  const context = useContext(ListUpContext);
  const { setOpenedList } = context;
  const goToList = () => {
    console.log(props.title, props.id);
    setOpenedList({
      title: props.title,
      id: props.id,
    });
    navigation.navigate("List Screen");
  };
  const {
    listContainer,
    topContainer,
    listNameContainer,
    listName,
    bottomContainer,
    createdByContainer,
    createdByContainerTxt,
  } = styles;
  return (
    <TouchableOpacity style={listContainer} onPress={() => goToList()}>
      <View style={topContainer}>
        <View style={listNameContainer}>
          <Text style={listName}>{props.title}</Text>
        </View>
      </View>
      <View style={bottomContainer}>
        <View style={createdByContainer}>
          <Text style={createdByContainerTxt}>
            Created by {props.createdBy.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    height: 100,
    backgroundColor: "#a18aff",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  topContainer: {
    flexDirection: "row",
    height: "50%",
    width: "100%",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listNameContainer: {
    width: "80%",
    overflow: "hidden",
  },
  listName: {
    fontSize: 25,
    color: "white",
  },
  bottomContainer: {
    width: "100%",
    height: "50%",
    // backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  createdByContainer: {
    width: "85%",
    justifyContent: "center",
  },
  createdByContainerTxt: {
    color: "white",
  },
});
export default SharedListItem;
