import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const CreateList = () => {
  const {
    container,
    topBarContainer,
    secondaryContainer,
    inputContainer,
    topBar,
    TxtInput,
    logInBtn,
    
  } = styles;
  return (
    <View style={container}>
      <View style={topBarContainer}>
        <View style={topBar}></View>
      </View>
      <View style={secondaryContainer}>
        <View style={inputContainer}>
          <TextInput
            style={TxtInput}
            placeholder="List name"
            placeholderTextColor={"gray"}
            textContentType="name"
            returnKeyType="next"
          />
          <TouchableOpacity
            style={logInBtn}
            onPress={() => {
              // isLoading ? setIsLoading(false) : setIsLoading(true);
              // if (emailS == emailValue && passValue == passS) {
              //   navigation.navigate("Home");
              // }
            }}
          >
            {/* <View>
              {isLoading ? (
                <ActivityIndicator size={"small"} color={"white"} />
              ) : (
                <Text style={btnTxt}>Sign in</Text>
              )}
            </View> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a18aff",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  topBarContainer: {
    flex: 0.1,
    width: "100%",
    alignItems: "center",
  },
  topBar: {
    width: "40%",
    height: 5,
    backgroundColor: "white",
    borderRadius: "40%",
  },
  secondaryContainer: {
    flex: 1.9,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "red",
    marginTop: -50,
  },
  TxtInput: {
    width: "90%",
    height: 50,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 50,
    borderRadius: 15,
    backgroundColor: "white",
  },
  logInBtn: {
    width: "90%",
    height: 50,
    marginTop: 40,
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

export default CreateList;
