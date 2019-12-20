import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Form, Item, Button, Label, Input } from "native-base";

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "LCO Chat Room",
    headerStyle: {
      backgroundColor: "#fd0759"
    },
    headerTintColor: "#FFF"
  });

  state = {
    name: ""
  };
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>UserName</Label>
          </Item>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={name => this.setState({ name })}
          />
          <Button
            style={{ marginTop: 20 }}
            full
            rounded
            success
            onPress={() => {
              this.props.navigation.navigate("Chat", {
                name: this.state.name
              });
            }}
          >
            <Text>Start Chat</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
