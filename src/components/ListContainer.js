import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import React from "react";
import MyListItem from "./MyListItem";
import SharedListItem from "./SharedListItem";

const ListContainer = (props) => {
  const { container , listItemContainer , flatList} = styles;
  const data = [
    {
      "_id": "64816f1b02906d032e9dba76",
      "createdBy": {
        "_id": "647c81902ef46584f3ce5426",
        "name": "Ali",
        "email": "Ali@mail.com",
        "phone": "031234567890",
        "__v": 0
      },
      "title": "Test List 1",
      "date": "Thu Jun 08 2023 10:45:59 GMT+0500 (Pakistan Standard Time)",
      "sharedWith": [],
      "__v": 0
    },
    {
      "_id": "64816f7302906d032e9dba7a",
      "createdBy": {
        "_id": "647c81902ef46584f3ce5426",
        "name": "Ali",
        "email": "Ali@mail.com",
        "phone": "031234567890",
        "__v": 0
      },
      "title": "Test List 2",
      "date": "Thu Jun 08 2023 10:45:59 GMT+0500 (Pakistan Standard Time)",
      "sharedWith": [
        {
          "_id": "647c81902ef46584f3ce5426",
          "name": "Ali",
          "email": "Ali@mail.com",
          "phone": "031234567890",
          "__v": 0
        }
      ],
      "__v": 0
    },
    {
      "_id": "6481703102906d032e9dba8f",
      "createdBy": {
        "_id": "647c81902ef46584f3ce5426",
        "name": "Ali",
        "email": "Ali@mail.com",
        "phone": "031234567890",
        "__v": 0
      },
      "title": "Test List 3",
      "date": "Thu Jun 08 2023 10:45:59 GMT+0500 (Pakistan Standard Time)",
      "sharedWith": [
        {
          "_id": "647c81902ef46584f3ce5426",
          "name": "Ali",
          "email": "Ali@mail.com",
          "phone": "031234567890",
          "__v": 0
        }
      ],
      "__v": 0
    },
    {
      "_id": "6481704102906d032e9dba93",
      "createdBy": {
        "_id": "647c81902ef46584f3ce5426",
        "name": "Ali",
        "email": "Ali@mail.com",
        "phone": "031234567890",
        "__v": 0
      },
      "title": "Test List 4",
      "date": "Thu Jun 08 2023 10:45:59 GMT+0500 (Pakistan Standard Time)",
      "sharedWith": [
        {
          "_id": "647cbd167c5fe56358dc8491",
          "name": "Ab",
          "email": "ab@mail.com",
          "phone": "031334567890",
          "__v": 0
        }
      ],
      "__v": 0
    },
    {
      "_id": "6481708202906d032e9dba9d",
      "createdBy": {
        "_id": "647c81902ef46584f3ce5426",
        "name": "Ali",
        "email": "Ali@mail.com",
        "phone": "031234567890",
        "__v": 0
      },
      "title": "Test List 5",
      "date": "Thu Jun 08 2023 10:45:59 GMT+0500 (Pakistan Standard Time)",
      "sharedWith": [
        {
          "_id": "64786590711f26c2c0e1714c",
          "name": "Fayzan",
          "email": "fayzan@mail.com",
          "phone": "03136474668",
          "__v": 0
        },
        {
          "_id": "647edd75773e6c8080932ee2",
          "name": "H",
          "email": "h@mail.com",
          "phone": "031334567899",
          "__v": 0
        },
        {
          "_id": "647cbd167c5fe56358dc8491",
          "name": "Ab",
          "email": "ab@mail.com",
          "phone": "031334567890",
          "__v": 0
        }
      ],
      "__v": 0
    },
    {
      "_id": "648170fa02906d032e9dbab4",
      "createdBy": {
        "_id": "647c81902ef46584f3ce5426",
        "name": "Ali",
        "email": "Ali@mail.com",
        "phone": "031234567890",
        "__v": 0
      },
      "title": "Test List 6",
      "date": "Thu Jun 08 2023 10:45:59 GMT+0500 (Pakistan Standard Time)",
      "sharedWith": [
        {
          "_id": "647edd75773e6c8080932ee2",
          "name": "H",
          "email": "h@mail.com",
          "phone": "031334567899",
          "__v": 0
        }
      ],
      "__v": 0
    }
  ]
  const shared =  [
    {
      "_id": "647d8226d2c9521d45428ac6",
      "createdBy": {
        "_id": "64786590711f26c2c0e1714c",
        "name": "Fayzan",
        "email": "fayzan@mail.com",
        "phone": "03136474668",
        "__v": 0
      },
      "title": " Fayzan list change test",
      "date": "Mon Jun 05 2023 11:33:51 GMT+0500 (Pakistan Standard Time)",
      "sharedWith": [
        "647c81902ef46584f3ce5426",
        "64786590711f26c2c0e1714c",
        "647cbd167c5fe56358dc8491"
      ],
      "__v": 0
    },
    {
      "_id": "64816f7302906d032e9dba7a",
      "createdBy": {
        "_id": "647c81902ef46584f3ce5426",
        "name": "Ali",
        "email": "Ali@mail.com",
        "phone": "031234567890",
        "__v": 0
      },
      "title": "Test List 2",
      "date": "Thu Jun 08 2023 10:45:59 GMT+0500 (Pakistan Standard Time)",
      "sharedWith": [
        "647c81902ef46584f3ce5426"
      ],
      "__v": 0
    },
    {
      "_id": "6481703102906d032e9dba8f",
      "createdBy": {
        "_id": "647c81902ef46584f3ce5426",
        "name": "Ali",
        "email": "Ali@mail.com",
        "phone": "031234567890",
        "__v": 0
      },
      "title": "Test List 3",
      "date": "Thu Jun 08 2023 10:45:59 GMT+0500 (Pakistan Standard Time)",
      "sharedWith": [
        "647c81902ef46584f3ce5426"
      ],
      "__v": 0
    }
  ]
  return (
    <View style={container}>
      {props.myList ? (
        <View>
          <Text style={styles.text}>Lists created by you</Text>
          <View style={listItemContainer}> 
            <FlatList
            style={flatList}
            data={data}
            keyExtractor={item => item._id}
            renderItem={({item}) => <MyListItem title={item.title} shareWith={item.sharedWith}/>}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Lists shared with you</Text>
          <View style={listItemContainer}> 
          <FlatList
            style={flatList}
            data={shared}
            keyExtractor={item => item._id}
            renderItem={({item}) => <SharedListItem title={item.title} createdBy={item.createdBy}/>}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    width: "100%",
    padding: 20,
    paddingLeft : 10,
    paddingRight : 10,
    // marginBottom : 70
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  listItemContainer : {
    // flex : 1,
    marginTop : 20,
  },
  flatList : {
    // marginBottom : 50
    marginBottom : StatusBar.currentHeight || 50,
  }
});

export default ListContainer;
