import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Firebase from "../firebase";

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "LCO Chat Room",
    headerStyle: {
      backgroundColor: "#fd0759"
    },
    headerTintColor: "#FFF"
  });
  state = {
    messages: []
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Firebase.shared.uid
    };
  }

  componentDidMount() {
    Firebase.shared.on(message =>
      this.setState(prevState => ({
        messages: GiftedChat.append(prevState.message, message)
      }))
    );
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        user={this.user}
        onSend={Firebase.shared.send}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
