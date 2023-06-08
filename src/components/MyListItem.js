import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import editIcon from "../images/edit-icon.png";
import deleteIcon from "../images/delete-icon.png";

const MyListItem = () => {
  const { listContainer, topContainer, listNameContainer, listName , bottomContainer ,sharedWithContainer} = styles;
  return (
    <TouchableOpacity style={listContainer}>
      <View style={topContainer}>
        <View style={listNameContainer}>
          <Text style={listName}>Grocery List</Text>
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
        <Text>Shared With</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "90%",
    height: 100,
    backgroundColor: "red",
    borderRadius: 15,
    padding: 15,
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
    overflow : 'hidden',
  },
  listName: {
    fontSize: 20,
    color: "white",
  },
  bottomContainer : {
    width : '100%',
    height : '50%',
    backgroundColor : 'blue',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  sharedWithContainer : {
    width : '85%',
    backgroundColor : 'yellow'
  }
});
export default MyListItem;
