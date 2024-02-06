import Clock from "./Clock";
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from "react-native";

export const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Clock />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
  },
});
