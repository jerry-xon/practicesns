import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
  } from "react-native";
  import React from "react";
  import { useFonts } from "expo-font";
  import { Formik } from "formik";
  import { object,number } from "yup";
  import { useRef } from "react";
  
  
  const Login = () => {
    const [loaded] = useFonts({
      "Karantina-Regular": require("./assets/fonts/Karantina-Regular.ttf"),
     "Outfit": require("./assets/fonts/Outfit.ttf"),
    });
    const formikRef = useRef();
    let initValues = {
      PhoneNumber: null,
    };
  
    let formValues = {
      PhoneNumber: {
        type: TextInput,
        label: "Phone Number",
        placeholder: "861xxxx949",
        returnKeyType: "done",
        keyboardType: "numric",
      },
    };
  
    let userSchema = object({
      phonenumber: number()
        .min(10, "Phone number must be at least 10 digits")
        .required("Please Enter a valid phone number"),
      // createdOn: date().default(() => new Date()),
    });
  
    return (
      <ImageBackground
        style={styles.BackgroundGradient}
        source={require("./assets/Gradient.png")}
      >
        <ScrollView>
  
       
        <ImageBackground
          style={styles.watermark}
          source={require("./assets/bgwatermark.png")}
        />
        <SafeAreaView>
          <View style={styles.NameAndWelcomeContainer}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.SNSText}>SPORTSNSTATS</Text>
          </View>
          <View style={styles.ParentContainerForCurve}>
            <View style={styles.CurveContainer}>
              <View style={styles.formikformContainer}>
                <Formik
                  myRef={formikRef}
                  initialValues={initValues}
                  fieldData={formValues}
                  onSubmit={(values) => console.log(values)}
                  validationSchema={userSchema}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                  }) => (
                    <View>
                      <View style={styles.ContainerforGetStarted}>
                        <Text style={styles.getstaredText}>Get Started !</Text>
                        <Text style={styles.EnterNUmberText}>
                          Enter your phone number to receive an OTP for proceeding
                          securely
                        </Text>
                      </View>
                      <View style={styles.Inputcontainer}>
                        <TextInput
                          placeholder="Enter Phone Number"
                          onChangeText={handleChange("phonenumber")}
                          onBlur={handleBlur("email")}
                          value={values.email}
                          style={styles.PhoneNumberInput}
                        />
                        {/* {errors.phonenumber && (
                          <Text style={{ color: "red" }}>
                            {errors.phonenumber}
                          </Text>
                        )} */}
                        <TouchableOpacity
                          style={styles.ProceedButton}
                          onPress={handleSubmit}
                        >
                          <Text style={styles.proceedbuttonText}>Proceed</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </Formik>
                  <View style={styles.otherLoginContainer}>
                    <View >
                      <Text style={styles.continueWithText}>Or continue with</Text>
                    </View>
                    <View style={styles.loginButtonsContainer}>
                       <TouchableOpacity style={styles.OtherLoginButton}>
                        <Image source={require("./assets/icons/icongoogle.png")}/>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.OtherLoginButton}>
                        <Image source={require("./assets/icons/iconFacebook.png")}/>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.OtherLoginButton}>
                        <Image source={require("./assets/icons/iconapple.png")}/>
                       </TouchableOpacity>
                    </View>
                  </View>
              </View>
            </View>
          </View>
  
          {/* <View style={styles.CurveContainer}></View> */}
        </SafeAreaView>
         </ScrollView>
      </ImageBackground>
    );
  };
  export default Login;
  
  const styles = StyleSheet.create({
    BackgroundGradient: {
      height: "100%",
      width: "100%",
    },
    watermark: { width: "100%", height: "80%", position: "absolute" },
    welcomeText: {
      fontFamily: "Outfit",
      color: "#FFFFFF",
      fontWeight: "500",
      fontSize: 26,
    },
    SNSText: {
      fontFamily: "Karantina-Regular",
      color: "#FFFFFF",
      fontWeight: "400",
      fontSize: 52,
      letterSpacing: 4,
    },
    NameAndWelcomeContainer: {
      justifyContent: "center",
      alignItems: "center",
      rowGap: 8,
      paddingTop: 120,
      paddingHorizontal: 72,
      paddingBottom: 92,
    },
    CurveContainer: {
      backgroundColor: "#F6FFFC",
      height: "800",
      width: "800",
      borderRadius: 400,
      paddingHorizontal: 222,
      paddingTop: 88,
    },
    formikformContainer: {
      backgroundColor: "#F6FFFC",
      width: "100%",
      height: "80%",
    },
    getstaredText: {
      fontSize: 24,
      color: "#34A0A4",
      fontWeight: "700",
      fontFamily: "Outfit",
    },
    EnterNUmberText: {
      fontSize: 14,
      fontWeight: "600",
      fontFamily: "Outfit",
      color: "#1B4B5E",
    },
    ParentContainerForCurve: { alignContent: "center", alignItems: "center" },
    ContainerforGetStarted: { rowGap: 8 },
    PhoneNumberInput: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: "#D6ECED",
      borderRadius: 8,
      color: "#3C5859",
    },
    Inputcontainer: {
      paddingTop: 40,
      rowGap: 24,
    },
    ProceedButton: {
      backgroundColor: "#52B69A",
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    proceedbuttonText: {
      fontSize: 16,
      color: "#FFFFFF",
      fontWeight: "500",
      fontFamily: "Outfit",
    },
    otherLoginContainer:{
      paddingTop:44,
      alignItems:"center",
      rowGap:12
    },
    continueWithText:{
      color:"#34A0A4",
      fontSize:10,
      fontWeight:"500",
    },
    loginButtonsContainer:{
      columnGap:12,
      flexDirection:"row"
    },
    OtherLoginButton:{
      backgroundColor:"#D6ECED",
      paddingVertical:12,
      paddingHorizontal:16,
      borderRadius:8
      
    }
  });
  