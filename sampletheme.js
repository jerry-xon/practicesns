import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import {
  MD3LightTheme,
  MD3DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6200ea",
    background: "#ffffff",
    text: "#000000",
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#bb86fc",
    background: "#121212",
    text: "#ffffff",
  },
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <PaperProvider style={{flex:1}} theme={isDarkMode ? darkTheme : lightTheme}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode
              ? darkTheme.colors.background
              : lightTheme.colors.background,
          },
        ]}
      >
        <Text
          style={{
            color: isDarkMode ? darkTheme.colors.text : lightTheme.colors.text,
          }}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>
      <View
        style={{
          backgroundColor: "green",
          width: 2000,
          height: 2000,
          borderTopLeftRadius: 300,
          borderTopRightRadius: 300,
          marginTop:-100,
          flex:1

          // borderRadius:5
        }}
      >

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
