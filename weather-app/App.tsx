import { RecoilRoot } from "recoil";
import { StyleSheet, StatusBar, View, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import Home from "./Home";
import SnowBg from "./components/SnowBg";

export default function App() {
  return (
    <RecoilRoot>
      <Home />
      <SnowBg />
      <StatusBar hidden={true} />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});
