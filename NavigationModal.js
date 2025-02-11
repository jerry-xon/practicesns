import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Modal, Portal, Button, PaperProvider } from "react-native-paper";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

const App = () => {
  const [visible, setVisible] = React.useState(true);
  const [loaded] = useFonts({
    "Karantina-Regular": require("./assets/fonts/Karantina-Regular.ttf"),
    Outfit: require("./assets/fonts/Outfit.ttf"),
  });
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              style={{ marginHorizontal: 16 }}
            >
              <View style={styles.ModalContent}>
                <View style={styles.HeadingContainer}>
                  <Text style={styles.LocationText}>Need Location Access</Text>
                  <Text style={styles.DetailText}>
                    We need your location to connect you with the best sports
                    facilities nearby.
                  </Text>
                </View>
                <View style={styles.MapContainer}>
                  <Image style={styles.MapImage} source={require("./assets/map.png")}/>
                </View>
                <TouchableOpacity style={styles.AllowLocationButton}>
                  <Text style={styles.AllowLocationText}>Allow location access</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </Portal>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  LocationText: {
    fontSize: 24,
    color: "#43A0A4",
    fontWeight: "700",
    fontFamily: "Outfit",
  },
  ModalContent: {
    backgroundColor: "#F6FFFC",
    paddingHorizontal: 36,
    alignItems: "center",
    borderRadius: 24,
    paddingVertical: 20,
  },
  DetailText: {
    fontSize: 10,
  },
  HeadingContainer: {
    rowGap: 12,
    alignItems: "center",
  },
  MapContainer: {
    paddingTop: 48,
    paddingBottom:56
  },
  MapImage:{
    width: 280,
    height: 190,
  },
  AllowLocationText:{
    color:"#FFFFFF",
    fontSize:12,
    fontWeight:"500",
    fontFamily:"Outfit",
  },
  AllowLocationButton:{
    backgroundColor:"#52B69A",
    paddingVertical:12,
    paddingHorizontal:56,
    borderRadius:8
  }
});
