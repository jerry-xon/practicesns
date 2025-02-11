import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    StatusBar,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { useFonts } from "expo-font";
  import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
  import { useState } from "react";
  import CustomCheckBox from "./Components/CustomCheckBox.js";
  
  const App = () => {
    const [loaded] = useFonts({
      "Karantina-Regular": require("./assets/fonts/Karantina-Regular.ttf"),
      Outfit: require("./assets/fonts/Outfit.ttf"),
    });
    const [ischecked, setisChecked] = useState({
      FootBall: false,
      BasketBall: false,
      Cricket: false,
      Swimming: false,
    });
  
    const handleCheck = (key) => {
      setisChecked((prev) => ({
        ...prev,
        [key]: !prev[key], // Toggle the specific checkbox
      }));
    };
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
          <StatusBar
            backgroundColor={"#FFFFFF"}
            barStyle="dark-content"
            translucent={false}
          />
          <View style={{ paddingVertical: 4 }}>
            <View style={styles.BackButtonAndHeadingContainer}>
              <TouchableOpacity>
                <Image source={require("./assets/icons/backbutton.png")} />
              </TouchableOpacity>
              <View style={styles.SearchbarContainer}>
                <Text style={styles.PickInterestText}>Pick your Interests</Text>
                <View>
                  <TextInput
                    style={styles.Searchbar}
                    placeholder="Type “Football”"
                    placeholderTextColor={"#9CA3A3"}
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          <ScrollView style={styles.SportsContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.SportsList}>
              <CustomCheckBox
                ischecked={ischecked.FootBall}
                onChange={() => handleCheck("FootBall")}
                CheckedImage={require("./assets/sportschecklist/footballtrue.png")}
                UnCheckedImage={require("./assets/sportschecklist/footballfalse.png")}
              />
  
              <CustomCheckBox
                ischecked={ischecked.BasketBall}
                onChange={() => handleCheck("BasketBall")}
                CheckedImage={require("./assets/sportschecklist/basketballtrue.png")}
                UnCheckedImage={require("./assets/sportschecklist/basketballfalse.png")}
              />
  
              <CustomCheckBox
                ischecked={ischecked.Cricket}
                onChange={() => handleCheck("Cricket")}
                CheckedImage={require("./assets/sportschecklist/crickettrue.png")}
                UnCheckedImage={require("./assets/sportschecklist/cricketfalse.png")}
              />
  
              <CustomCheckBox
                ischecked={ischecked.Swimming}
                onChange={() => handleCheck("Swimming")}
                CheckedImage={require("./assets/sportschecklist/swimmingtrue.png")}
                UnCheckedImage={require("./assets/sportschecklist/swimmingfalse.png")}
              />
            </View>
          </ScrollView>
          <View style={styles.ProceedButtonContainer}>
            <TouchableOpacity style={styles.ProceedButton}>
              <Text style={styles.ProceedButtonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
    BackButtonAndHeadingContainer: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      paddingBottom: 28,
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,
      backgroundColor: "#FFFFFF",
      shadowOpacity: 0.3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 7 },
      elevation: 5,
      position: "absolute",
      width: "100%",
      paddingTop: 4,
      zIndex: 1,
    },
    PickInterestText: {
      fontSize: 24,
      fontFamily: "Outfit",
      color: "#34A0A4",
      fontWeight: "700",
      paddingTop: 8,
    },
    Searchbar: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: "#C0D7D8",
      borderRadius: 12,
    },
    SearchbarContainer: {
      rowGap: 12,
    },
    SportsContainer: {
      backgroundColor: "#F6FFFC",
      paddingVertical: 4,
    },
    SportsList: {
      paddingVertical: 172,
      paddingHorizontal: 16,
      rowGap: 16,
    },
    ProceedButtonContainer: {
      backgroundColor: "#F6FFFC",
      position: "absolute",
      bottom: 0,
      width: "100%",
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderRadius: 12,
      paddingBottom:28,
      shadowColor:"#000",
      shadowOpacity:0.5
    },
    ProceedButton: {
      backgroundColor:"#C5C5C5",
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderRadius: 12,
      alignItems:"center"
  
    },
    ProceedButtonText:{
      fontSize:16,
      fontWeight:"500",
      color:"#6F6F6F",
      fontFamily:"Outfit"
    }
  });
  