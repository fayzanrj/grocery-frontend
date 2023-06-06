import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useRef } from "react";
import logo from "../images/logo.png";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation()
  const {
    container,
    headingContainer,
    inputContainer,
    TxtInput,
    logInBtn,
    btnTxt,
    signUpContainer,
    signInTxt,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={container}>
          <View style={headingContainer}>
            <Image source={logo} style={{ width: 160, height: 100 }} />
          </View>
          <View style={inputContainer}>
            <TextInput
              style={TxtInput}
              placeholder="Full name e.g. Muhammad Fayzan"
              placeholderTextColor={"gray"}
              returnKeyType="next"
              onSubmitEditing={() => {
                email.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={TxtInput}
              placeholder="Email e.g. fayzan@gmail.com"
              placeholderTextColor={"gray"}
              textContentType="emailAddress"
              returnKeyType="next"
              ref={(input) => {
                email = input;
              }}
              onSubmitEditing={() => {
                phone.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={TxtInput}
              placeholder="Phone Number e.g. 0312-4567890"
              placeholderTextColor={"gray"}
              textContentType="numeric"
              returnKeyType="next"
              keyboardType="number-pad"
              ref={(input) => {
                phone = input;
              }}
              onSubmitEditing={() => {
                password.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={TxtInput}
              placeholder="Password"
              placeholderTextColor={"gray"}
              textContentType="password"
              returnKeyType="next"
              secureTextEntry={true}
              ref={(input) => {
                password = input;
              }}
              onSubmitEditing={() => {
                confirmPassword.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={TxtInput}
              placeholder="Confirm password"
              placeholderTextColor={"gray"}
              textContentType="password"
              returnKeyType="done"
              secureTextEntry={true}
              ref={(input) => {
                confirmPassword = input;
              }}
            />
            <TouchableOpacity
              style={logInBtn}
              onPress={() => {
                isLoading ? setIsLoading(false) : setIsLoading(true);
              }}
            >
              <View>
                {isLoading ? (
                  <ActivityIndicator size={"small"} color={"white"} />
                ) : (
                  <Text style={btnTxt}>Sign Up</Text>
                )}
              </View>
            </TouchableOpacity>
            <View style={signUpContainer}>
              <Text style={signInTxt}>Already a user?</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Sign In')}>
                <Text style={signInTxt}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a18aff",
    justifyContent: "center",
  },
  headingContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 2,
    alignItems: "center",
    gap: 20,
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
  signUpContainer: {
    width: "90%",
    height: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  signInTxt: {
    color: "white",
  },
});
