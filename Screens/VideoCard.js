import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class VideoCard extends React.Component {
  onPress = () => {
    console.log("Pressed");
  };

  render() {
    console.log(this.props.title);
    return (
      <View style={styles.card}>
        <View>
          <Image
            style={{ width: 420, height: 180 }}
            source={{ uri: this.props.image }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    height: 220,
    marginTop: 10,
    width: "100%",
    backgroundColor: "black",
    alignItems: "flex-start",
  },
});
