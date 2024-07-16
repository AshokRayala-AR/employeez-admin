import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { JobsGridData } from "../../components/jobgrid/JobGridData";
import Header from "../header/Header";

const GridItem = ({ text, imgpath }) => {
  return (
    <View style={styles.item}>
      <ImageBackground source={imgpath} style={styles.backgroundImage}>
        <Text style={styles.text}>{text}</Text>
      </ImageBackground>
    </View>
  );
};

const Grid = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.row}>
        <GridItem text={item.text} imgpath={item.imgpath} />
      </View>
    );
  };

  const keyExtractor = (item) => item.id;

  return (
    <View style={{ height: "100%", backgroundColor: "#000" }}>
      <Header />
      <FlatList
        data={JobsGridData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 16,
    height: "100%",
    borderRadius: 36,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 36,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    height: 170,
    borderColor:"red",
    borderWidth: 3
  },
});

export default Grid;
