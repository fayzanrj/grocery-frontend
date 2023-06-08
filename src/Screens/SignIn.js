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
import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const emailS = "f";
  const passS = "1";

  const [passValue, setPassValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const {
    container,
    headingContainer,
    inputContainer,
    TxtInput,
    logInBtn,
    btnTxt,
    signUpContainer,
    signUpTxt,
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
              placeholder="Email or Phone number"
              placeholderTextColor={"gray"}
              textContentType="emailAddress"
              returnKeyType="next"
              defaultValue={emailValue}
              onChangeText={(newTxt) => setEmailValue(newTxt)}
              ref={(input) => {
                email = input;
              }}
              onSubmitEditing={() => {
                pass.focus();
              }}
            />
            <TextInput
              style={TxtInput}
              placeholder="Password"
              placeholderTextColor={"gray"}
              textContentType="password"
              secureTextEntry={true}
              returnKeyType="done"
              defaultValue={passValue}
              onChangeText={(newTxt) => setPassValue(newTxt)}
              ref={(input) => {
                pass = input;
              }}
            />
            <TouchableOpacity
              style={logInBtn}
              onPress={() => {
                isLoading ? setIsLoading(false) : setIsLoading(true);
                if (emailS == emailValue && passValue == passS) {
                  navigation.navigate("Home")
                }
              }}
            >
              <View>
                {isLoading ? (
                  <ActivityIndicator size={"small"} color={"white"} />
                ) : (
                  <Text style={btnTxt}>Sign in</Text>
                )}
              </View>
            </TouchableOpacity>
            <View style={signUpContainer}>
              <Text style={signUpTxt}>New user?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                <Text style={signUpTxt}> Sign Up</Text>
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
    flex: 1,
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
  signUpTxt: {
    color: "white",
  },
});
