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
    { name: "Departments of Administration." },
    { name: "Departments of Arts and Humanities." },
    { name: "Departments of Business, Economics and Administrative Sciences." },
    { name: "Departments of Commerce." },
    { name: "Departments of Computing & Information Technology." },
    { name: "Departments of Law." },
    { name: "Departments of Computer Science." },
    { name: "Departments of  Artificial Intelligence" },
  ];

  return (
    <Layout
      navigation={props.navigation}
      LeftIcon={true}
      withoutScroll={true}
      pagetitle={"Our Departments"}
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
                  props.navigation.navigate("Courses", {
                    type: item.name,
                    typeImage: require("../../assets/images/shopping-mall.png"),
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
                      source={require("../../assets/images/shopping-mall.png")}
                      resizeMode="contain"
                      style={[styles().wh80px]}
                    />
                  </View>
                </View>
                <Text
                  numberOfLines={2}
                  style={[
                    styles().fs12,
                    styles().fontBold,
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
