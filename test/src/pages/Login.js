import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Logo } from "../components/Logo";
import { Form } from "../components/Form";
export class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
