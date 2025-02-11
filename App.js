import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { useFonts } from "expo-font";
import { OtpInput } from "react-native-otp-entry";
const App = () => {
  const [loaded] = useFonts({
    "Karantina-Regular": require("./assets/fonts/Karantina-Regular.ttf"),
    Outfit: require("./assets/fonts/Outfit.ttf"),
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.ScreenBG}>
        <View style={styles.Modal}>
          <View style={styles.ModalContentContainer}>
          <Entypo name="chevron-thin-down" size={20} color="black" />
          </View>
          <View style={styles.VerifyTextContainer}>
            <Text style={styles.VerifyText}>Verify Your Account !</Text>
            <Text style={styles.DetailText}>
              Enter the verification code sent to your mobile number
            </Text>
          </View>
          <View style={styles.OtpInputContaienr}>
            <OtpInput
              numberOfDigits={5}
              focusColor="#52B69A"
              autoFocus={false}
              hideStick={true}
              type="numeric"
              focusStickBlinkingDuration={500}
              onFilled={(text) => console.log(`OTP is ${text}`)}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
              }}
              theme={{
                containerStyle: styles.container,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                placeholderTextStyle: styles.placeholderText,
                filledPinCodeContainerStyle: styles.filledPinCodeContainer,
              }}
            />
          </View>
          <View style={styles.ResentOtpContainer}>
            <Text style={styles.ResendOTPText}>Didn't recieve code? </Text>
            <TouchableOpacity>
              <Text style={styles.ResendButtonText}>Resend</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ProceedButtonContainer}>
            <TouchableOpacity style={styles.ProceedButton}>
              <Text style={styles.ProceedButtonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  ScreenBG: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  Modal: {
    backgroundColor: "#F6FFFC",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    bottom:0,
    position: "absolute",
  },
  ModalContentContainer: {
    alignItems: "center",
  },
  VerifyText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#34A0A4",
  },
  DetailText: {
    fontSize: 8,
    color: "#1B4B5E",
    fontFamily: "Outfit",
    fontWeight: "400",
  },
  VerifyTextContainer: {
    paddingTop: 24,
    rowGap: 8,
  },
  OtpInputContaienr: {
    paddingTop: 16,
  },
  pinCodeContainer: {
    borderWidth: 1,
    backgroundColor: "#F5FFFC",
    borderColor: "rgba(27, 75, 94, 0.2)",
  },
  activePinCodeContainer: {
    borderBlockColor: "#52B69A",
    backgroundColor: "#D6ECED",
  },
  filledPinCodeContainer: {
    backgroundColor: "#E6F2F2",
    borderColor: "rgba(27, 75, 94, 0.2)",
  },
  pinCodeText: {
    fontSize: 20,
    color: "#1B4B5E",
    fontWeight: "600",
    fontFamily: "Outfit",
  },
  ResendOTPText: {
    fontFamily: "Outfit",
    fontWeight: "500",
    fontSize: 10,
    color: "#1B4B5E",
  },
  ResentOtpContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 12,
  },
  ResendButtonText: {
    fontFamily: "Outfit",
    fontWeight: "500",
    fontSize: 10,
    color: "#34A0A4",
  },
  ProceedButtonContainer: {
    backgroundColor: "#F6FFFC",
    borderRadius: 12,
    paddingBottom:24,
  },
  ProceedButton: {
    backgroundColor: "#52B69A",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  ProceedButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    fontFamily: "Outfit",
  },
});
