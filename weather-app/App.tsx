import { RecoilRoot } from "recoil";
import { StyleSheet, StatusBar, View, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import Home from "./Home";

export default function App() {
  return (
    <RecoilRoot>
      <Home />
      <StatusBar hidden={true} />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});
