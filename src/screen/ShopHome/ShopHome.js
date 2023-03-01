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
  ScrollView,
} from "react-native";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";
import styles from "../styles";
import Layout from "../../Component/Layout/Layout";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import ThemeButton from "../../Component/ThemeButton/ThemeButton";
import FlashMessage from "../../Component/FlashMessage/FlashMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

export default function ShopHome(props) {
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

  let tabs = [
    { title: "No. of Courses :", count: 10 },
    { title: "No. of Books :", count: 43 },
    // { title: "", count: 10 },
  ];

  let arivals = [
    {
      type: "Artificial Intelligence",
      image: require("../../assets/images/artificial-intelligence.png"),
      books: [
        {
          title: "Artificial Intelligence For Dummies (2nd Edition)",
          Shelf: "Python: Beginner's Guide to Artificial Intelligence",
          Author: "Tom Taulli",
          available: true,
          count: 18,
          total: 25,
        },
        {
          title:
            "Fundamentals of Machine Learning for Predictive Data Analytics – Algorithms",
          Shelf: "Shelf no: 15",
          Author: "Denis Rothman, Matthew Lamons, Rahul Kumar",
          available: false,
          count: 4,
          total: 6,
        },
        {
          title: "Being Human in the Age of Artificial Intelligence",
          Shelf: "Shelf no: 15",
          Author: "John D. Kelleher, Brian Mac Namee, Aoife D’Arcy",
          available: true,
          count: 14,
          total: 20,
        },
      ],
    },
    {
      type: "Networking",
      image: require("../../assets/images/networking.png"),
      books: [
        {
          title: "CompTIA Network+ Certification All-in-One Exam Guide",
          Shelf: "Shelf no: 15",
          Author: "Mike Meyers",
          available: true,
          count: 13,
          total: 26,
        },
        {
          title: "Network Programmability and Automation",
          Shelf: "Shelf no: 15",
          Author: "Jason Edelman",
          available: false,
          count: 11,
          total: 14,
        },
        {
          title: "Computer Networking: A Top-Down Approach",
          Shelf: "Shelf no: 15",
          Author: "James Kurose",
          available: true,
          count: 10,
          total: 19,
        },
        {
          title: "Computer Networks",
          Shelf: "Shelf no: 15",
          Author: "Tanenbaum",
          available: true,
          count: 4,
          total: 6,
        },
      ],
    },
  ];

  let departments = [
    { name: "Departments of Administration." },
    { name: "Departments of Arts and Humanities." },
    { name: "Departments of Business, Economics and Administrative Sciences." },
    { name: "Departments of Commerce." },
    // { name: "Departments of Computing & Information Technology." },
    // { name: "Departments of Law." },
    // { name: "Departments of Computer Science." },
    // { name: "Departments of  Artificial Intelligence" },
  ];

  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];

  return (
    <Layout
      navigation={props.navigation}
      property={"Library"}
      NotiIcon={true}
      withoutScroll={false}
      ProfileImg={true}
      pagetitle={`Welcome To Your Shop`}
      style={styles().ph0}
    >
      <View
        style={[
          {
            flex: 1,
            paddingHorizontal: 15,
          },
        ]}
      >
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <FlatList
            numColumns={2}
            data={tabs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    paddingHorizontal: 10,
                    width: "45%",
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: currentTheme.themeBackground,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: currentTheme.white,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: currentTheme.white,
                    }}
                  >
                    {item.count}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginBottom: 10,
            marginTop: 15,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Departments
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {departments.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("Courses", {
                      type: item.name,
                      typeImage: require("../../assets/images/shopping-mall.png"),
                    })
                  }
                  activeOpacity={0.5}
                  key={index}
                  style={[
                    {
                      padding: 5,
                      width: 150,
                      borderRadius: 5,
                      marginLeft: index === 0 ? 5 : 10,
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
                        {
                          backgroundColor: currentTheme.bodyBg,
                        },
                      ]}
                    >
                      <Image
                        source={require("../../assets/images/shopping-mall.png")}
                        resizeMode="contain"
                        style={[styles().wh65px]}
                      />
                    </View>
                  </View>
                  <Text
                    numberOfLines={2}
                    style={[
                      styles().fs12,
                      styles().fontBold,
                      {
                        color: currentTheme.black,
                        marginLeft: 5,
                      },
                    ]}
                  >
                    {item?.name?.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Department")}
              activeOpacity={0.5}
              style={[
                {
                  padding: 5,
                  width: 150,
                  borderRadius: 5,
                  marginLeft: 10,
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
                  styles().alignCenter,
                  styles().justifyCenter,
                ]}
              >
                <Text
                  numberOfLines={2}
                  style={[
                    styles().fs12,
                    styles().fontBold,
                    {
                      color: currentTheme.black,
                      marginLeft: 5,
                    },
                  ]}
                >
                  {"View All"}
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          {arivals.map((item, index) => {
            return (
              <View>
                <Text
                  style={{
                    marginBottom: 20,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {item.type}
                </Text>
                {item.books.map((books, i) => {
                  return (
                    <View
                      style={[
                        styles().justifyBetween,
                        styles().flexRow,
                        styles().boxpeshadow,
                        styles().br10,
                        styles().ph15,
                        styles().pv15,
                        styles().mb20,
                        { width: width * 0.88 },
                        { marginHorizontal: 10 },
                      ]}
                    >
                      <TouchableOpacity
                        onPress={() =>
                          FlashMessage({
                            msg: books?.title + " Added To Cart",
                            type: "success",
                          })
                        }
                        style={{
                          position: "absolute",
                          backgroundColor: currentTheme.themeBackground,
                          right: 0,
                          margin: 8,
                          borderRadius: 5,
                          padding: 5,
                          zIndex: 100,
                        }}
                      >
                        <Ionicons
                          name="cart"
                          color={currentTheme.white}
                          size={18}
                        />
                      </TouchableOpacity>
                      <View
                        style={[
                          styles().wh80px,
                          styles().h110px,
                          styles().br10,
                          styles().overflowH,
                        ]}
                      >
                        <Image
                          source={item.image}
                          resizeMode="contain"
                          style={styles().wh100}
                        />
                      </View>
                      <View
                        style={[
                          styles().flex,
                          styles().justifyBetween,
                          styles().ml10,
                        ]}
                      >
                        <View
                          style={[
                            styles().flexRow,
                            styles().alignCenter,
                            styles().justifyStart,
                            { marginBottom: 3 },
                          ]}
                        >
                          <Text
                            numberOfLines={2}
                            style={[
                              styles().fs12,
                              styles().fontSemibold,
                              { color: currentTheme.black },
                            ]}
                          >
                            {books.title.toUpperCase()}
                          </Text>
                        </View>
                        <View
                          style={[
                            styles().flexRow,
                            styles().alignCenter,
                            styles().justifyStart,
                          ]}
                        >
                          <Ionicons
                            name="people"
                            size={15}
                            color={currentTheme.textColor}
                          />
                          <Text
                            numberOfLines={1}
                            style={[
                              styles().fs10,
                              styles().fontRegular,
                              {
                                color: currentTheme.textColor,
                                flex: 1,
                                marginLeft: 4,
                              },
                            ]}
                          >
                            {books.Author}
                          </Text>
                        </View>
                        <View style={[styles().flexRow, styles().alignCenter]}>
                          <View style={styles().mtminus5}>
                            <Ionicons
                              name="list-outline"
                              size={15}
                              color={currentTheme.textColor}
                              style={styles().mr5}
                            />
                          </View>
                          <Text
                            style={[
                              styles().fs10,
                              styles().fontRegular,
                              { color: currentTheme.textColor },
                            ]}
                          >
                            {books.count + "/" + books.total}
                          </Text>
                        </View>
                        <ThemeButton
                          onPress={() =>
                            props.navigation.navigate("DocumentView", {
                              book: books,
                              type: item.type,
                              typeImage: item.image,
                            })
                          }
                          Title={"View Details"}
                          Style={[styles().h40px, styles().mt10, styles().w80]}
                          StyleText={styles().fs12}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    </Layout>
  );
}
