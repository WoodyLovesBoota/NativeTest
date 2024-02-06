import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, View, StyleSheet } from "react-native";

const SnowBall = ({ translateX, starting, duration }: ISnowBallProps) => {
  const fallAnim = useRef(new Animated.Value(0)).current; // 애니메이션 값
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  useEffect(() => {
    Animated.loop(
      Animated.timing(fallAnim, {
        toValue: 1,
        duration: duration * 1000, // 밀리초 단위로 변환
        useNativeDriver: true,
      })
    ).start();
  }, [fallAnim, duration]);

  const translateY = fallAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, windowHeight],
  });

  const translateXInterpolated = fallAnim.interpolate({
    inputRange: [0, 1],
    outputRange: translateX.map((x) => x),
  });

  return (
    <Animated.View
      style={[
        styles.snowball,
        {
          transform: [
            { translateY: translateY }, // 여기서 Y축 이동을 처리
            { translateX: translateXInterpolated }, // X축 이동
          ],
          left: `${starting}%`,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  snowball: {
    backgroundColor: "white",
    width: 6,
    height: 6,
    borderRadius: 3,
    position: "absolute",
  },
});

export default SnowBall;

interface ISnowBallProps {
  translateX: number[];
  starting: number;
  duration: number;
}
