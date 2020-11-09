import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Header from "../Header";
import VideoCard from "./VideoCard";
import { YOUTUBE_URL } from "../config";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      videoData: [],
    };
  }

  getData = () => {
    fetch(YOUTUBE_URL).then((result) => {
      result.json().then((data) => {
        // console.log(data.items);
        this.setState({ videoData: data.items });
      });
    });
  };

  videoPressed = (videoId) => {
    this.props.navigation.navigate("Player", videoId);
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.home}>
        <Header navigation={this.props.navigation} />
        <FlatList
          style={styles.list}
          data={this.state.videoData}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => this.videoPressed(item.id.videoId)}
              >
                <VideoCard
                  videoId={item.id.videoId}
                  title={item.snippet.title}
                  image={item.snippet.thumbnails.high.url}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "flex-start",
  },
});
