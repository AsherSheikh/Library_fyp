import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";
import styles from "../styles";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../../Component/Layout/Layout";
import ThemeButton from "../../Component/ThemeButton/ThemeButton";

const { width, height } = Dimensions.get("window");

export default function DocumentListing(props) {
  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];

  return (
    <Layout
      navigation={props.navigation}
      LeftIcon={true}
      withoutScroll={true}
      pagetitle={"Search"}
      style={[styles().ph0]}
    >
      <View style={{ paddingHorizontal: 20 }}>
        {/* <Text
          style={{
            marginBottom: 10,
            marginTop: 15,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Search
        </Text> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            name="search"
            color={currentTheme.themeBackground}
            size={30}
          />
          <TextInput
            placeholder="Search for books..."
            style={{
              borderWidth: 2,
              borderColor: currentTheme.themeBackground,
              height: 50,
              borderRadius: 10,
              color: "black",
              padding: 10,
              flex: 1,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
      <View
        style={[
          styles().left20,
          styles().right20,
          styles().posAbs,
          styles().bottom20,
        ]}
      >
        <ThemeButton onPress={() => {}} Title={"Search"} />
      </View>
    </Layout>
  );
}
