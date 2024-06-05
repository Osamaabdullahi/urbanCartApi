import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, Link } from "expo-router";
import { ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";

const Onboard = ({
  titleone,
  titletwo,
  btnTitle,
  img,
  pos,
  handlePress,
  otherstyle,
}) => {
  const [ActiveDot, setActiveDot] = useState(false);

  return (
    <View style={styles.container}>
      <ThreeDots pos={pos} />
      <View style={styles.txt}>
        <Text style={styles.T1}>{titleone}</Text>
        <Text style={styles.T2}>{titletwo}</Text>
      </View>

      <CustomButton
        title={btnTitle}
        handlePress={handlePress}
        otherstyle={otherstyle}
      />
      <Image style={styles.imageone} resizeMode="container" source={img} />
    </View>
  );
};

export default Onboard;

const ThreeDots = ({ pos }) => {
  return (
    <View style={styles.dotcontainer}>
      <View
        style={styles.dot}
        backgroundColor={`${pos === 1 ? "black" : "grey"}`}
      />
      <View
        style={styles.dot}
        backgroundColor={`${pos === 2 ? "black" : "grey"}`}
      />
      <View
        style={styles.dot}
        backgroundColor={`${pos === 3 ? "black" : "grey"}`}
      />
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
