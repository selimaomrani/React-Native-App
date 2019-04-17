import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 110, height: 70 }}
          source={require("../images/logo.png")}
        />
        <Text style={styles.logoText}> Eniso.info</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    fontSize: 18,
    color: "rgba(255,255,255,0.7)"
  }
});
