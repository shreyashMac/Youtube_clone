import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "react-native-elements";

export default class Search extends React.Component {
  backAction = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.searchContainer}>
        <Ionicons
          name="md-arrow-back"
          size={30}
          color="white"
          onPress={this.backAction}
        />
        <View style={{ flex: 1 }}>
          <Input
            placeholder="Seach"
            style={{
              borderRadius: 3,
              borderWidth: 1,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "gray",
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
  },
});
