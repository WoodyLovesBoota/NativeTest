import SnowBall from "./SnowBall";
import Snow from "./SnowBall";
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from "react-native";

const SnowBg = () => {
  return (
    <View style={styles.wrapper}>
      {/* <Snow />
      <Snow />
      <Snow />
      <Snow />
      <Snow /> <Snow />
      <Snow />
      <Snow />
      <Snow />
      <Snow /> */}
      <SnowBall translateX={[10, 20]} duration={Math.floor(Math.random() * 11) + 10} starting={Math.random() * 100 - 50} />
    </View>
  );
};

export default SnowBg;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
});
