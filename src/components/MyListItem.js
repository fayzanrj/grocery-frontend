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
import editIcon from "../images/edit-icon.png";
import deleteIcon from "../images/delete-icon.png";
import { useNavigation } from "@react-navigation/native";
import ListUpContext from "../context/ListUpContext";

const MyListItem = (props) => {
  const context = useContext(ListUpContext);
  const { setOpenedList } = context;
  // function show() {
  //   console.log(props.shareWith);
  // }
  // show()
  const goToList = () => {
    console.log(props.title, props.id);
    setOpenedList({
      title: props.title,
      id: props.id,
    });
    navigation.navigate("List Screen");
  };

  const navigation = useNavigation();
  const {
    listContainer,
    topContainer,
    listNameContainer,
    listName,
    bottomContainer,
    sharedWithContainer,
    sharedWithContainerTxt,
  } = styles;
  return (
    <TouchableOpacity style={listContainer} onPress={() => goToList()}>
      <View style={topContainer}>
        <View style={listNameContainer}>
          <Text style={listName}>{props.title}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity>
            <Image source={editIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={deleteIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={bottomContainer}>
        <View style={sharedWithContainer}>
          <Text style={sharedWithContainerTxt}>Shared with</Text>
          <View>
            <FlatList
              data={props.shareWith}
              horizontal={true}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <Text style={sharedWithContainerTxt}>@{item.name}, </Text>
              )}
            />
          </View>
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
  sharedWithContainer: {
    width: "85%",
    // backgroundColor: "yellow",
    // height: 100,.
    // alignItems : 'center',
    justifyContent: "center",
    // flexDirection : 'row'
  },
  sharedWithContainerTxt: {
    color: "white",
  },
});
export default MyListItem;
