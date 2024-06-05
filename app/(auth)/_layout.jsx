import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthRootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="sighin" options={{ headerShown: false }} />
      <Stack.Screen name="sighup" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthRootLayout;

const styles = StyleSheet.create({});
