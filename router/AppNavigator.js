import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../provider/AuthContext";

// Main


// Auth screens
// import Login from "../screens/auth/Login";
// import Register from "../screens/auth/Register";
// import ForgetPassword from "../screens/auth/ForgetPassword";

import { ActivityIndicator, View } from "react-native";
import { COLORS, icons, images } from "../constants";
import { ScreenHeaderBtn } from "../components";
import MainScreen from "../app/screen/mainScreen";

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      headerShown={false}
      screenOptions={{
        
        headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
        ),
        headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
        ), 
        headerTitle: ""
      }}
    >
    <MainStack.Screen   name="Home" component={MainScreen} />
      {/* <MainStack.Screen name="Home" component={Home} /> */}
    </MainStack.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer independent={true}>
      {user == null && <ActivityIndicator size="large" color={COLORS.primary} />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};

const Cp = () => {
  return (<View></View>)
}