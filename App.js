import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./navigation/TabNavigator";
import { ThemeProvider } from "react-native-elements";

export default function App() {
  return (
    <ThemeProvider>
      <TabNavigator />
    </ThemeProvider>
  );
}
