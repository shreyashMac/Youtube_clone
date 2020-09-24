import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View
          style={{
            justifyContent: "space-around",
            //paddingLeft: 1,
            backgroundColor: "red",
          }}
        >
          <Text style={styles.title}>YouTube</Text>
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <Icon
              style={styles.headerIcons}
              name="videocam"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.headerIcons}
              name="search"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.headerIcons}
              name="account-circle"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    //height: 50,
    //width: 400,
    backgroundColor: "red",
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    padding: 15,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 120,
  },
  headerIcons: {
    marginHorizontal: 10,
  },
});
