import React from "react";
import { View, StyleSheet } from "react-native";
import App from "../components/app"; // App 컴포넌트를 불러오는 부분

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <App />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: "100%",
    padding: 20,
  },
});
