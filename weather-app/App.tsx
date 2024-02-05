import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { IWeatherData } from "./api";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const WEATHER_API_KEY = "f8c4be74703179b86960ad34cc953c76";

export default function App() {
  const [ok, setOk] = useState(true);
  const [city, setCity] = useState<string | null>("loading...");
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | undefined>();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<IWeatherData>();

  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) setOk(false);
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    setLocation({ latitude, longitude });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setCity(location[0].city);
  };

  const getWeather = async (loc: { latitude: number; longitude: number }) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${loc.latitude}&lon=${loc.longitude}&APPID=${WEATHER_API_KEY}`
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ask();
  }, []);

  useEffect(() => {
    location && getWeather(location);
  }, [location]);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.weatherName}>sunny</Text>
        </View>
        {data ? (
          <View style={styles.day}>
            <Text style={styles.temp}>{(data.main.temp - 273.15).toFixed(1)}</Text>
            <Text style={styles.weatherName}>{data.weather[0].main}</Text>
            <Text style={styles.weatherName}>{data.weather[0].description}</Text>
          </View>
        ) : (
          <View style={styles.day}>
            <ActivityIndicator color={"black"} size={20} />
          </View>
        )}

        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.weatherName}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.weatherName}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.weatherName}>sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "orange" },

  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cityName: {
    fontSize: 21,
    fontWeight: "500",
  },

  weather: {
    // flex: 3,
    paddingTop: 50,
  },
  day: {
    width: windowWidth,
    alignItems: "center",
  },
  temp: {
    fontSize: 200,
  },
  weatherName: { fontSize: 48 },
});
