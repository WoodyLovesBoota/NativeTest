import { useEffect, useState } from "react";
import styled from "styled-components";
import { padInt } from "../utils";
import { useRecoilState } from "recoil";
import { isAmState } from "../atoms";
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from "react-native";

const Clock = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [isAm, setIsAm] = useRecoilState(isAmState);

  useEffect(() => {
    setHour(new Date().getHours() <= 12 ? new Date().getHours() : new Date().getHours() - 12);
    setMin(new Date().getMinutes());

    const interval = setInterval(() => {
      let now = new Date();
      setHour(now.getHours() <= 12 ? now.getHours() : now.getHours() - 12);
      setMin(now.getMinutes());
      setIsAm(now.getHours() <= 12 ? true : false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.ampm}>{isAm ? "AM" : "PM"}</Text>
      <View style={styles.timebox}>
        <Text style={styles.timeNumber}>{padInt(hour)}</Text>
        <Text style={styles.timeNumber}>{padInt(min)}</Text>
      </View>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: "auto",
    padding: 20,
  },

  ampm: {
    fontSize: 16,
    marginRight: 5,
    fontWeight: "300",
  },

  timebox: {
    justifyContent: "center",
    alignItems: "center",
  },

  timeNumber: {
    fontSize: 18,
    fontWeight: "400",
  },
});
