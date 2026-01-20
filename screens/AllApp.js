import React, { useState } from "react";
import { ScrollView, FlatList, TouchableOpacity } from "react-native";
import { Button, Text, View, StyleSheet } from "react-native";
import { APP_CATEGORIES } from "../data/data";
import AppCategory from "../components/AppCategory";
import { GridViewIcon } from "../components/index";
import SearchBar from "../components/SearchBar";

export default function AllApp() {
  const [search, setSearch] = useState("");
  return (
    <View style={{ flex: 1, marginBottom: 0 }}>
      <View style={styles.navigationBar}>
        <View style={styles.searchBar}>
        <SearchBar value={search} onChangeText={(text) => setSearch(text)} />
        </View>
        <TouchableOpacity
          onPress={() => alert("Ongoing")}
          style={styles.appView}
        >
          <GridViewIcon width="100%" height="100%" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={APP_CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AppCategory categoryTitle={item.title} sections={item.sections} />
        )}
        ListHeaderComponent={<Text style={styles.title}>All Apps</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    display: "flex",
    flexDirection: "row",
    rowGap: 5,
    backgroundColor: "#fffeff",
    marginBottom: 0,
    paddingTop:20,
  },
  searchBar: {
    marginHorizontal: 12,
    marginTop: 10,
    flexGrow: 1,
    flexShrink: 1,
    height: 40,
  },
  appView: {
    aspectRatio: 1,
    height: 25,
    flexShrink: 1,
    backgroundColor: "#fffeff",
    marginTop: 12,
    marginRight: 12,
  },
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 30,
    backgroundColor: "#fffeff",
  },
});
