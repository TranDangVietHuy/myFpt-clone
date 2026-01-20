import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function AppCategorySection({
  Icon,
  title,
  subtitle,
  total,
  index,
}) {
  const IconComponent = Icon;
  return (
    <View
      style={index == total - 1 ? styles.containerNoBorder : styles.container}
    >
      <View style={styles.iconContainer}>
        {typeof IconComponent === "function" && (
          <IconComponent width="100%" height="100%" />
        )}
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>{title}</Text>
        <Text style={styles.detailSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginRight: 18,
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
    borderBottomColor: "#eae7ea",
    borderStyle: "solid",
    borderBottomWidth: 2,
  },
  containerNoBorder: {
    marginLeft: 18,
    marginRight: 18,
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
  },
  iconContainer: {
    aspectRatio: 1,
    width: 50,
  },
  detailContainer: {
    flexShrink: 1,
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  detailTitle: {
    fontWeight: "bold",
  },
  detailSubtitle: {
    color: "#5a585b",
  },
});
