import React from "react";
import axios from "react-native-axios";
import { Navigation } from "react-native-navigation";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  Platform
} from "react-native";
import { Annonce } from "../pages/Annonce";
const config = {
  headers: { Cookie: "valeur de token" }
};

export class Form extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onButtonPress = () => {
    const url =
      "http://eniso.info/ws/core/login/" +
      this.state.username +
      "?password=" +
      this.state.password;
    axios
      .post(url, config)
      .then(function(response) {
        const obj = response["data"];
        if (obj["$1"] != undefined) {
          const user = obj["$1"];
          console.log(user["sessionId"]);
          return (
            <View>
              <text>Hi</text> />
            </View>
          );
        } else {
          const message = obj["$error"];
          console.log(message["message"]);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="username "
          placeholderTextColor="transport"
          onChangeText={text => this.setState({ username: text })}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="password"
          secureTextEntry={true}
          placeholderTextColor="transport"
          onChangeText={text => this.setState({ password: text })}
        />

        <Button
          style={styles.button}
          onPress={() => {
            this.onButtonPress();
          }}
          title="Login"
          color="#00B0FF"
        />
      </View>
    );
  }
}
export default Form;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox: {
    width: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#00008b",
    marginVertical: 10
  },
  button: {
    borderRadius: 25,
    paddingVertical: 16,
    marginVertical: 10
  }
});
