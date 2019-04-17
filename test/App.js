import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Login } from "./src/pages/Login";
import { Annonce } from "./src/pages/Annonce";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
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
