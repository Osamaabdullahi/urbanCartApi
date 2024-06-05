import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, Link } from "expo-router";
import { ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import Onboard from "../components/Onboard";
import { router } from "expo-router";

const Page = () => {
  const [ActiveDot, setActiveDot] = useState(false);

  const handlePress = () => {
    router.push("/sighin");
  };
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#e3e6e5" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Onboard
          titleone={"All the Styles in One Place"}
          titletwo={` Best products in the market of 2024 ${"\n"} with the heighest quality you will find`}
          btnTitle={"Get started "}
          img={require("../assets/images/bgOne.png")}
          pos={3}
          handlePress={handlePress}
          otherstyle={200}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;

const ThreeDots = () => {
  return (
    <View style={styles.dotcontainer}>
      <View style={styles.dot} backgroundColor="black" />
      <View style={styles.dot} backgroundColor="grey" />
      <View style={styles.dot} backgroundColor="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
    marginLeft: 20,
  },
  dot: {
    width: 20, // Adjust the size of the dots
    height: 20, // Adjust the size of the dots
    borderRadius: 10, // Half of the width/height to make it round
    // Change the color of the dots
    margin: 3,
  },
  dotcontainer: {
    flexDirection: "row",
  },
  T1: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 0,
    padding: 0,
    lineHeight: 50,
  },
  T2: {
    fontSize: 18,
    margin: 0,
    padding: 0,
    lineHeight: 25,
  },
  imageone: {
    width: 300,
    height: 300,
    marginTop: 10,
    marginLeft: 10,
  },
  txt: {
    marginTop: 20,
  },
});
