import React, { useContext, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationService from "./navigationService";
import * as Notifications from "expo-notifications";
import ThemeContext from "../context/ThemeContext/ThemeContext";
import { theme } from "../context/ThemeContext/ThemeColor";
import { Easing } from "react-native-reanimated";
import { AuthContext } from "../context/Auth/auth";
import { UserProvider } from "../context/User/User";
import Animated from "react-native-reanimated";

// Stacks Screen
import Home from "../screen/Home/Home";
import DocumentListing from "../screen/DocumentListing/DocumentListing";
import Profile from "../screen/Profile/Profile";
import EditProfile from "../screen/EditProfile/EditProfile";
import PersonalDetails from "../screen/PersonalDetails/PersonalDetails";
import ChangePassword from "../screen/ChangePassword/ChangePassword";
import Faq from "../screen/Faq/Faq";
import MyNotifications from "../screen/Notifications/Notifications";
import DocumentView from "../screen/DocumentView/DocumentView";

// Auth Stack
import LandingScreen from "../screen/Landing/Landing";
import Login from "../screen/Login/Login";
import Verification from "../screen/Verification/Verification";
import CreatePassword from "../screen/CreatePassword/CreatePassword";
import ForgotPassword from "../screen/ForgotPassword/ForgotPassword";
import SignUp from "../screen/SignUp/SignUp";
import ResetPassword from "../screen/ResetPassword/ResetPassword";
import SideBar from "../Component/SideBar/SideBar";

const NavigationStack = createStackNavigator();
const AuthenticationStack = createStackNavigator();
const LandingStack = createStackNavigator();
const MainStack = createStackNavigator();
const SideDrawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

function authenticationNavigator() {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      {/* <AuthenticationStack.Screen name="Landing" component={LandingScreen} /> */}
      <AuthenticationStack.Screen name="Login" component={Login} />

      <AuthenticationStack.Screen
        name="Verification"
        component={Verification}
      />
      <AuthenticationStack.Screen
        name="CreatePassword"
        component={CreatePassword}
      />

      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen
        name="ResetPassword"
        component={ResetPassword}
      />
      <AuthenticationStack.Screen name="Signup" component={SignUp} />
    </AuthenticationStack.Navigator>
  );
}
function LandingNavigator() {
  return (
    <LandingStack.Navigator headerMode="none">
      <LandingStack.Screen name="Landing" component={LandingScreen} />
      <LandingStack.Screen name="Auth" component={authenticationNavigator} />
    </LandingStack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />

      <HomeStack.Screen name="DocumentListing" component={DocumentListing} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="PersonalDetails" component={PersonalDetails} />
      <HomeStack.Screen name="ChangePassword" component={ChangePassword} />
      <HomeStack.Screen name="Faq" component={Faq} />
      <HomeStack.Screen name="EditProfile" component={EditProfile} />
      <HomeStack.Screen name="MyNotifications" component={MyNotifications} />
      <HomeStack.Screen name="DocumentView" component={DocumentView} />
    </HomeStack.Navigator>
  );
}

function Drawer() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <UserProvider>
      <View style={{ flex: 1 }}>
        <SideDrawer.Navigator
          drawerType="front"
          drawerStyle={{
            flex: 1,
            backgroundColor: "transparent",
            borderBottomRIghtRadius: 30,
            borderTopRightRadius: 30,
            overflow: "hidden",
            // width: "80%",
          }}
          drawerContent={(props) => {
            setProgress(props.progress);
            return <SideBar {...props} />;
          }}
        >
          <SideDrawer.Screen name="Home">
            {(props) => <HomeNavigator {...props} style={animatedStyle} />}
          </SideDrawer.Screen>
        </SideDrawer.Navigator>
      </View>
    </UserProvider>
  );
}

const closeConfig = {
  animation: "timing",
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const config = {
  animation: "spring", //spring
  config: {
    stiffness: 1000,
    damping: 500,
    duration: 900,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function noDrawer() {
  return (
    <NavigationStack.Navigator headerMode="none">
      <NavigationStack.Screen name="Drawer" component={Drawer} />
    </NavigationStack.Navigator>
  );
}

function AppContainer(props) {
  const { token } = useContext(AuthContext);
  function _handleNotification(notification) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer
        // theme={DarkTheme}
        ref={(ref) => {
          navigationService.setGlobalRef(ref);
          Notifications.addNotificationReceivedListener(_handleNotification);
        }}
      >
        <MainStack.Navigator
          headerMode="none"
          screenOptions={{ gestureEnabled: false }}
          initialRouteName={token ? "noDrawer" : "Landing"}
        >
          <MainStack.Screen name="Auth" component={authenticationNavigator} />
          <MainStack.Screen name="Landing" component={LandingNavigator} />
          <MainStack.Screen name="noDrawer" component={noDrawer} />
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppContainer;
