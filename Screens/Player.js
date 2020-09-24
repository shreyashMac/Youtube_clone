import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

export default class Player extends React.Component {
  render() {
    console.log(this.props.route.params);
    return (
      <View style={styles.container}>
        <YoutubePlayer
          height={"100%"}
          width={"100%"}
          play={true}
          videoId={this.props.route.params}
        />
        {/* {YouTubeStandaloneAndroid.playVideo({
      //   apiKey: API_KEY,
      //   videoId: "p-eS-_olx9M",
      //   autoplay: true,
      //   startTime: 15,
      // })
      //   .then(() => {
      //     console.log("player exited");
      //   })
      //   .catch((error) => console.error(error))} */}

        {/* <WebView
      //   source={{ uri: "https://www.youtube.com/watch?v=p-eS-_olx9M" }}
      // /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },
});
