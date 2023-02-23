import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";
import styles from "../styles";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../../Component/Layout/Layout";

const { width, height } = Dimensions.get("window");

export default function DocumentListing(props) {
  const property = props?.route?.params?.property;
  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];
  const [popFolder, setPopFolder] = useState(false);
  const [selectedFolderIndex, setSelectedFolderIndex] = useState("");
  let folders = [
    { name: "Your Folder" },
    { name: "Your Folder" },
    { name: "Your Folder" },
    { name: "Your Folder" },
  ];

  return (
    <Layout
      navigation={props.navigation}
      LeftIcon={true}
      withoutScroll={true}
      pagetitle={"My Folder"}
      style={[styles().ph0]}
    >
      <View style={[styles().flex, { marginHorizontal: width * 0.04 }]}>
        <FlatList
          data={folders}
          bounces={false}
          numColumns={2}
          ListHeaderComponent={<View style={styles().pt30} />}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                key={index}
                onPress={() =>
                  props.navigation.navigate("DocumentView", {
                    docs: item,
                    property: property,
                  })
                }
                style={[
                  styles().mb20,
                  {
                    padding: 5,
                    width: width * 0.44,
                    marginRight: index % 2 === 0 ? width * 0.04 : 0,
                  },
                ]}
              >
                <View
                  style={[
                    styles().w100,
                    styles().boxpeshadow,
                    styles().bgWhite,
                    // styles().ph10,
                    styles().mb10,
                    styles().h130px,
                    styles().br5,
                  ]}
                >
                  <View
                    style={[
                      styles().wh100,
                      styles().overflowH,
                      styles().alignCenter,
                      styles().justifyCenter,
                      { backgroundColor: currentTheme.bodyBg },
                    ]}
                  >
                    <Image
                      source={require("../../assets/images/folder.png")}
                      resizeMode="contain"
                      style={[styles().wh80px]}
                    />

                    <View
                      style={[
                        styles().top10,
                        styles().alignEnd,
                        styles().right10,
                        styles().posAbs,
                      ]}
                    >
                      <TouchableOpacity
                        style={[
                          styles().alignCenter,
                          styles().justifyCenter,
                          styles().wh30px,
                          styles().posRel,
                          styles().br5,
                          styles().bgWhite,
                        ]}
                        onPress={() => {
                          setPopFolder(!popFolder);
                          setSelectedFolderIndex(index);
                        }}
                      >
                        <Ionicons
                          name="ellipsis-vertical"
                          size={20}
                          color={currentTheme.SliderDots}
                        />
                      </TouchableOpacity>
                      {selectedFolderIndex === index && popFolder ? (
                        <View
                          style={[
                            styles().boxpeshadow,
                            styles().w100,
                            styles().br10,
                            styles().mt5,
                          ]}
                        >
                          <TouchableOpacity
                            style={[
                              styles().w100,
                              styles().ph25,
                              styles().alignCenter,
                              styles().pv5,
                            ]}
                            onPress={() => {}}
                          >
                            <Text
                              style={[
                                styles().textCenter,
                                { color: currentTheme.black, fontSize: 12 },
                              ]}
                            >
                              Edit
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[
                              styles().w100,
                              styles().alignCenter,
                              styles().pv5,
                              styles().ph25,
                              {
                                borderTopWidth: 1,
                                borderTopColor: currentTheme.cEFEFEF,
                              },
                            ]}
                            onPress={() => {}}
                          >
                            <Text
                              style={{
                                color: currentTheme.black,
                                fontSize: 12,
                              }}
                            >
                              Delete
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                    </View>
                  </View>
                </View>
                <Text
                  numberOfLines={2}
                  style={[
                    styles().fs12,
                    styles().fw400,
                    { color: currentTheme.black, marginLeft: 5 },
                  ]}
                >
                  {item?.name?.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={<View style={styles().mb100} />}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    color: currentTheme.textColor,
                    fontSize: 14,
                  }}
                >
                  No Documents
                </Text>
              </View>
            );
          }}
        />
      </View>

      {/* <View
        style={[
          styles().left20,
          styles().right20,
          styles().posAbs,
          styles().bottom20,
        ]}
      >
        <ThemeButton
          onPress={() => {
            props.navigation.navigate("AddNewFolder", { property: property });
          }}
          Title={"Add New Document"}
        />
      </View> */}
    </Layout>
  );
}
