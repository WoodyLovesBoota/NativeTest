import { atom } from "recoil";

export const isAmState = atom({
  key: "IsAmNow",
  default: false,
});

export const tempState = atom({
  key: "TemperatureInfo",
  default: 15,
});

export const weatherState = atom({
  key: "WeatherInfo",
  default: [100],
});
