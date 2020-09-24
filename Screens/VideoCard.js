import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class VideoCard extends React.Component {
  onPress = () => {
    console.log("Pressed");
  };

  render() {
    return (
      <View style={styles.card}>
        <View>
          <Image
            style={{ width: 420, height: 180 }}
            source={{ uri: this.props.image }}
          />
        </View>
        <View
          style={{
            alignItems: "stretch",
            alignContent: "flex-start",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    height: 220,
    width: "100%",
    borderEndColor: "black",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
