import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { icons } from "../../constants";
import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.tabicon}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={styles.tabimage}
      />
      <Text style={{ color: "white" }}>{name}</Text>
    </View>
  );
};

const TabsRootLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ea9f5a",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 65,
            margin: 10,
            borderRadius: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="category"
          options={{
            title: "Category",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.category}
                color={color}
                name="Category"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.cart}
                color={color}
                name="cart"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsRootLayout;

const styles = StyleSheet.create({
  tabicon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  tabimage: {
    width: 24,
    height: 24,
  },
});
