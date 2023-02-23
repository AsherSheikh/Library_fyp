import React, { useState, useRef, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import TextField from "../../Component/FloatTextField/FloatTextField";
import styles from "../styles";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";
import ThemeButton from "../../Component/ThemeButton/ThemeButton";
import { FontAwesome } from "@expo/vector-icons";
// import AuthHeader from "../../Component/AuthHeader/AuthHeader";
import { useIsFocused } from "@react-navigation/native";
import { validateFunc } from "../../constraints/constraints";
import Spinner from "../../Component/Spinner/Spinner";
import FlashMessage from "../../Component/FlashMessage/FlashMessage";

export default function Signup(props) {
  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];

  const [firstname, setFirstname] = useState("");
  const [firstnameErr, setFirstnameErr] = useState(null);

  const [Username, setUsername] = useState("");
  const [Usererror, setUserError] = useState(null);

  const [Password, setPassword] = useState("");
  const [PasswordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [iconEye, setIconEye] = useState("eye-slash");
  const [iconEye2, setIconEye2] = useState("eye-slash");

  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

  function validation() {
    let status = true;
    const firstnameErr = validateFunc(
      firstname ? { firstname } : null,
      "firstname"
    );
    const emailError = validateFunc(
      Username ? { email: Username } : null,
      "email"
    );
    const passError = validateFunc(
      Password ? { password: Password } : null,
      "password"
    );
    if (firstnameErr) {
      setFirstnameErr(...firstnameErr.firstname);
      status = false;
    }
    if (emailError) {
      setUserError(...emailError.email);
      status = false;
    }
    if (passError) {
      setPasswordError(...passError.password);
      status = false;
    }
    if (Password !== confirmPassword) {
      setConfirmPasswordError("Password doesn't matches");
      status = false;
    }
    console.log(Password, confirmPassword, status);

    return status;
  }

  function onChangeIcon() {
    if (iconEye === "eye") {
      setIconEye("eye-slash");
    } else {
      setIconEye("eye");
    }
  }
  function onChangeIcon2() {
    if (iconEye2 === "eye") {
      setIconEye2("eye-slash");
    } else {
      setIconEye2("eye");
    }
  }

  async function UserSignup() {
    if (validation()) {
      setLoading(true);
      FlashMessage({ msg: "Signup Successfully!", type: "success" });
      props.navigation.navigate("SignIn");
    } else {
      setLoading(false);
    }
  }

  return (
    <ImageBackground
      source={require("../../assets/images/signup-bg.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={[styles().justifyCenter, styles().ph25]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles().mt70, styles().mb30]}>
              {/* <AuthHeader head={"Sign Up"} /> */}
            </View>

            <View style={[styles().mb20]}>
              <Text
                style={[
                  styles().fs12,
                  styles().fw600,
                  styles().fontBlack,
                  styles().mb5,
                  { color: currentTheme.c080A24 },
                ]}
              >
                Username
              </Text>
              <TextField
                value={firstname}
                label="Username"
                errorText={firstnameErr}
                style
                onChangeText={(text) => {
                  setFirstnameErr(null);
                  setFirstname(text);
                }}
              />
            </View>

            <View style={[styles().mb20]}>
              <Text
                style={[
                  styles().fs12,
                  styles().fw600,
                  styles().fontBlack,
                  styles().mb5,
                  { color: currentTheme.c080A24 },
                ]}
              >
                Email Address
              </Text>
              <TextField
                value={Username}
                keyboardType="email-address"
                autoCapitalize="none"
                label="josluis@mail.com"
                errorText={Usererror}
                style
                onChangeText={(text) => {
                  setUserError(null);
                  setUsername(text);
                }}
              />
            </View>
            <View style={[styles().mb20]}>
              <Text
                style={[
                  styles().fs12,
                  styles().fw600,
                  styles().fontBlack,
                  styles().mb5,
                  { color: currentTheme.c080A24 },
                ]}
              >
                Password
              </Text>
              <TextField
                value={Password}
                label="Password"
                errorText={PasswordError}
                secureTextEntry={iconEye2 === "eye" ? false : true}
                onChangeText={(text) => {
                  setPasswordError(null);
                  setPassword(text);
                }}
                childrenPassword={
                  <TouchableOpacity
                    onPress={onChangeIcon2.bind()}
                    style={[styles().passEye]}
                  >
                    <FontAwesome
                      name={iconEye2}
                      size={16}
                      color={currentTheme.black}
                    />
                  </TouchableOpacity>
                }
              />
            </View>

            <View style={[styles().mb20]}>
              <Text
                style={[
                  styles().fs12,
                  styles().fw600,
                  styles().fontBlack,
                  styles().mb5,
                  { color: currentTheme.c080A24 },
                ]}
              >
                Confirm Password
              </Text>
              <TextField
                value={confirmPassword}
                label="Confirm Password"
                errorText={confirmPasswordError}
                secureTextEntry={iconEye === "eye" ? false : true}
                onChangeText={(text) => {
                  setConfirmPasswordError(null);
                  setConfirmPassword(text);
                }}
                childrenPassword={
                  <TouchableOpacity
                    onPress={onChangeIcon.bind()}
                    style={[styles().passEye]}
                  >
                    <FontAwesome
                      name={iconEye}
                      size={16}
                      color={currentTheme.black}
                    />
                  </TouchableOpacity>
                }
              />
            </View>

            <View style={[styles().mb30, styles().mt20]}>
              {!loading ? (
                <ThemeButton
                  onPress={() => {
                    UserSignup();
                  }}
                  Style={styles().mh10}
                  Title={"Create Account"}
                />
              ) : (
                <Spinner />
              )}
            </View>

            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={[styles().mb30, styles().flexRow, styles().justifyCenter]}
            >
              <Text
                style={[
                  styles(currentTheme).mh5,
                  styles().textCenter,
                  styles().fontSize15,
                  styles().fontRegular,
                  { color: currentTheme.c111111 },
                ]}
              >
                Already a user?
              </Text>
              <Text
                style={[
                  styles(currentTheme).mh5,
                  styles().textCenter,
                  styles().fontSize15,
                  styles(currentTheme).forgetLabel,
                  { textDecorationLine: "underline" },
                ]}
              >
                Login Now
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}