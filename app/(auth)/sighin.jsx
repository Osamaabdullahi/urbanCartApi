import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormButton";

const sighin = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#e3e6e5" }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.container}>
          <View>
            <Text>sighup</Text>
            <Text>
              create your account so that you can order your products easily and
              quickly
            </Text>
          </View>

          <FormField
            handleChangeText={(e) => setForm({ ...Form, email: e })}
            title="email"
            value={Form.email}
            keyboardType="email"
            placeholder="email"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sighin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
