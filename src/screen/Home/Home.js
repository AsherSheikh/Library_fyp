import React, { useContext, useEffect, useState } from "react";
import {
  Platform,
  Animated,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";
import styles from "../styles";
import Layout from "../../Component/Layout/Layout";
const { width, height } = Dimensions.get("window");

export default function Home(props) {
  const HomeTopList = [
    {
      Image: require("../../assets/images/home-top-img1.png"),
      title: "Your Text",
      onPress: () => {
        console.log("1");
      },
    },
    {
      Image: require("../../assets/images/home-top-img2.png"),
      title: "Your Text",
      onPress: () => {
        console.log("2");
      },
    },
    {
      Image: require("../../assets/images/home-top-img3.png"),
      title: "Your Text",
      onPress: () => {
        console.log("3");
      },
    },
  ];

  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];

  return (
    <Layout
      navigation={props.navigation}
      property={"helloo"}
      NotiIcon={true}
      withoutScroll={true}
      ProfileImg={true}
      pagetitle={`Welcome To Library`}
      style={styles().ph0}
    >
      <View style={[styles().flex, { paddingLeft: width * 0.06 }]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              <View
                style={[
                  { paddingRight: width * 0.06 },
                  styles().pl5,
                  styles().mt25,
                  styles().pv5,
                ]}
              >
                <View
                  style={[
                    styles(currentTheme).boxpeshadow,
                    styles().mb20,
                    styles().ph25,
                    styles().pv35,
                    styles().br10,
                  ]}
                >
                  <FlatList
                    data={HomeTopList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.5}
                          onPress={() => item.onPress()}
                          style={[
                            styles().justifyCenter,
                            styles().alignCenter,
                            {
                              width: width * 0.24,
                            },
                          ]}
                        >
                          <View
                            style={[
                              styles().wh30px,
                              styles().justifyCenter,
                              styles().mb10,
                              styles().overflowH,
                              index === 0 ? styles().alignSelfCenter : null,
                            ]}
                          >
                            <Image
                              source={item.Image}
                              resizeMode="contain"
                              style={styles().wh100}
                            />
                          </View>
                          <Text>{item.title}</Text>
                        </TouchableOpacity>
                      );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
            </View>
          }
          renderItem={({ item, index }) => {
            return <View style={{ paddingHorizontal: 3 }}></View>;
          }}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ color: currentTheme.textColor, fontSize: 14 }}>
                  No Data
                </Text>
              </View>
            );
          }}
        />
      </View>
    </Layout>
  );
}
