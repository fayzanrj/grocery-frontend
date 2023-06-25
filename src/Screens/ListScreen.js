import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ListUpContext from "../context/ListUpContext";
import ListItem from "../components/ListItem";

const ListScreen = () => {
  const context = useContext(ListUpContext);
  const { openedList, listItems } = context;
  const { container, listHeading, innerContainer, listItemContainer } = styles;
  console.log(listItems);
  return (
    <SafeAreaView style={container}>
      <View style={innerContainer}>
        <Text style={listHeading}>{openedList.title}</Text>
        <View style={listItemContainer}>
          <FlatList
            data={listItems.items}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <ListItem content={item.content} quantity={item.quantity} checkedBy={item.checkedBy}/>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width : '100%',
    backgroundColor: "#a18aff",
  },
  listHeading: {
    fontSize: 40,
    color: "white",
    marginTop: 20,
    marginBottom: StatusBar.currentHeight || 50,
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },
  listItemContainer: {
    // backgroundColor: "red",
    width: "100%",
    marginBottom : 250
  },
});

export default ListScreen;
