import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export class Annonce extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> ici annonces !! </Text>
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
