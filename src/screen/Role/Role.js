import React, { useContext, useEffect, useState } from "react";
import {
  Platform,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";
import styles from "../styles";
import ThemeButton from "../../Component/ThemeButton/ThemeButton";
import AuthLayout from "../../Component/AuthLayout/AuthLayout";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

export default function Login(props) {
  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];
  const [isStudent, setIsStudent] = useState("");
  const [isShopKeeper, setIsShopKeeper] = useState("");

  return (
    <AuthLayout withoutScroll={true} navigation={props.navigation}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={50}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles().mt25, styles().mb35]}>
            <Text
              style={[
                styles().fs20,
                styles().fontBold,
                styles().textUpper,
                { color: currentTheme.black },
              ]}
            >
              Welcome To Smart Library
            </Text>
          </View>

          <View style={[styles().flex, styles().justifyEnd, styles().mb35]}>
            <Image
              source={require("../../assets/images/books.png")}
              resizeMode="contain"
              style={{ height: 150, width: "70%", alignSelf: "center" }}
            />
          </View>

          <View style={[styles().mt50]}>
            <ThemeButton
              Title={"Login as Student"}
              onPress={async () => {
                props.navigation.navigate("Login", { isStudent: true });
              }}
            />
          </View>
          <View style={[styles().mt20]}>
            <ThemeButton
              Title={"Login as ShopKeeper"}
              onPress={async () => {
                props.navigation.navigate("Login", { isShopKeeper: true });
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
