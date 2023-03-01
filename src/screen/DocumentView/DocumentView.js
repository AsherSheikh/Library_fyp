import React, { useContext, useEffect, useState } from "react";
import {
  Platform,
  Animated,
  Dimensions,
  Modal,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";
import styles from "../styles";
import {
  Ionicons,
  Foundation,
  Entypo,
  FontAwesome5,
  Feather,
  Octicons,
  AntDesign,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import Layout from "../../Component/Layout/Layout";
import ThemeButton from "../../Component/ThemeButton/ThemeButton";

const { width, height } = Dimensions.get("window");

export default function DocumentListing(props) {
  const { book, type, typeImage } = props?.route?.params;
  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];
  let data = [
    {
      title: "Sample Book",
      path: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      title: "Sample Book",
      path: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      title: "Sample Book",
      path: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      title: "Sample Book",
      path: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      title: "Sample Book",
      path: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      title: "Sample Book",
      path: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      title: "Sample Book",
      path: "https://www.africau.edu/images/default/sample.pdf",
    },
  ];
  return (
    <Layout
      navigation={props.navigation}
      LeftIcon={true}
      withoutScroll={true}
      pagetitle={book?.title ? book?.title : type}
      style={[styles().ph0]}
    >
      <View style={[styles().flex, { marginHorizontal: width * 0.04 }]}>
        {/* <Text></Text> */}
      </View>
    </Layout>
  );
}
