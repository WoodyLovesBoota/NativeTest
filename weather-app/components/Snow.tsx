import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { StyleSheet, Animated, Text, View, ScrollView, Dimensions, ActivityIndicator } from "react-native";

const Snow = () => {
  const [translateX, setTranslateX] = useState(0);
  const [translateX1, setTranslateX1] = useState(20);
  const [translateX2, setTranslateX2] = useState(-20);
  const [translateX3, setTranslateX3] = useState(20);
  const [translateX4, setTranslateX4] = useState(-20);
  const [translateX5, setTranslateX5] = useState(20);
  const [starting, setStarting] = useState(50);
  const [duration, setDuration] = useState(15);

  useEffect(() => {
    const randomDuration = Math.floor(Math.random() * 11) + 10;
    const randomX = Math.random() * 100 - 50;
    const randomX1 = Math.random() * 100 - 50;
    const randomX2 = Math.random() * 100 - 50;
    const randomX3 = Math.random() * 100 - 50;
    const randomX4 = Math.random() * 100 - 50;
    const randomX5 = Math.random() * 100 - 50;
    const randomStart = Math.random() * 100;

    setTranslateX(randomX);
    setTranslateX1(randomX1);
    setTranslateX2(randomX2);
    setTranslateX3(randomX3);
    setTranslateX4(randomX4);
    setTranslateX5(randomX5);
    setStarting(randomStart);
    setDuration(randomDuration);
    const interval = setInterval(() => {
      const randomX = Math.random() * 100 - 50;
      const randomX1 = Math.random() * 100 - 50;
      const randomX2 = Math.random() * 100 - 50;
      const randomX3 = Math.random() * 100 - 50;
      const randomX4 = Math.random() * 100 - 50;
      const randomX5 = Math.random() * 100 - 50;
      const randomStart = Math.random() * 100;

      setTranslateX(randomX);
      setTranslateX1(randomX1);
      setTranslateX2(randomX2);
      setTranslateX3(randomX3);
      setTranslateX4(randomX4);
      setTranslateX5(randomX5);
      setStarting(randomStart);
    }, randomDuration * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SnowBall
      translateX={[translateX, translateX1, translateX2, translateX3, translateX4, translateX5]}
      starting={starting}
      duration={duration}
    ></SnowBall>
  );
};

export default Snow;

const falling = (translateX: number[]) => keyframes`
  0% {
    transform: translateX(${translateX[0]}px);
  }

  20% {
    transform: translateX(${translateX[1]}px);
    bottom: 90%;

  }

  40% {
    transform: translateX(${translateX[2]}px);
    bottom: 70%;

  }

  60% {
    transform: translateX(${translateX[3]}px);
    bottom: 50%;

  }

  80% {
    transform: translateX(${translateX[4]}px);
    bottom: 20%;

  }

  100% {
    transform: translateX(${translateX[5]}px);
    bottom: 0;
  }
`;

const SnowBall = styled.div<{ translateX: number[]; starting: number; duration: number }>`
  background-color: white;
  width: 6px;
  height: 6px;
  border-radius: 100px;
  bottom: 100%;
  animation: ${(props) => falling(props.translateX)} ${(props) => props.duration}s linear infinite;
  position: absolute;
  left: ${(props) => props.starting}%;
`;
