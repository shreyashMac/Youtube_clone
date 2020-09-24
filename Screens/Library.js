import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";
export default class Library extends React.Component {
  render() {
    return (
      <View style={styles.library}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  library: {
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
