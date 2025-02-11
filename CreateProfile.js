import React from "react";
import { useFonts } from "expo-font";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import { Formik } from "formik";
import { object, number } from "yup";
import { useRef } from "react";
import { RadioButton } from "react-native-paper";

const CreateProfile = () => {
  const [loaded] = useFonts({
    "Karantina-Regular": require("./assets/fonts/Karantina-Regular.ttf"),
    Outfit: require("./assets/fonts/Outfit.ttf"),
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
  const [value, setValue] = React.useState("Male");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6FFFC" }}>
      <ScrollView>
        <View style={styles.BackButtonAndHeadingContainer}>
          <View>
            <TouchableOpacity>
              <Image source={require("./assets/icons/backbutton.png")} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.CreateProfileText}>Create Profile</Text>
          </View>
        </View>
        <View style={styles.AvatarContainer}>
          <View>
            <Avatar.Image size={160} source={require("./assets/avatar.png")} />
            <TouchableOpacity style={styles.ProfileEditButton}>
              <Feather name="camera" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formikformContainer}>
          <Formik
            myRef={formikRef}
            initialValues={initValues}
            fieldData={formValues}
            onSubmit={(values) => console.log(values)}
            validationSchema={userSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View>
                <View style={styles.NameInputContainer}>
                  <Text style={styles.FieldHeading}>Full Name</Text>
                  <TextInput
                    placeholder="Enter your name"
                    onChangeText={handleChange("phonenumber")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    style={styles.NameInput}
                  />
                </View>
                <View style={styles.GenderContainer}>
                  <Text style={styles.FieldHeading}>Gender</Text>
                  <RadioButton.Group
                    onValueChange={(value) => setValue(value)}
                    value={value}
                  >
                    <View style={styles.GenderButtonsContainer}>
                      <RadioButton.Item
                        rippleColor="transparent"
                        label="Male"
                        value="Male"
                        style={styles.GenderButton}
                      />
                      <RadioButton.Item
                        rippleColor="transparent"
                        label="Female"
                        value="Female"
                        style={styles.GenderButton}
                      />
                    </View>
                  </RadioButton.Group>
                </View>
                <View style={styles.PhoneNumberInputContainer}>
                  <Text style={styles.FieldHeading}>Phone Number</Text>
                  <TextInput
                    placeholder="8619XXXXXX"
                    onChangeText={handleChange("phonenumber")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    style={styles.PhoneNumberInput}
                  />
                </View>
                <View style={styles.EmailInputContainer}>
                  <Text style={styles.FieldHeading}>Email</Text>
                  <TextInput
                    placeholder="Zaemon69@yahoo.com"
                    onChangeText={handleChange("phonenumber")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    style={styles.EmailInput}
                  />
                </View>
                <View style={styles.DOBInputContainer}>
                  <Text style={styles.FieldHeading}>Date of Birth</Text>
                  <TextInput
                    placeholder="18-11-2004"
                    onChangeText={handleChange("phonenumber")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    style={styles.DOBInput}
                  />
                </View>
                <View style={styles.ProceedButtonContainer}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  BackButtonAndHeadingContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    columnGap: 104,
  },
  CreateProfileText: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Outfit",
  },
  AvatarContainer: {
    paddingHorizontal: 116,
    paddingTop: 28,
    paddingBottom: 20,
  },
  ProfileEditButton: {
    position: "absolute",
    backgroundColor: "#52B69A",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    right: 12,
    bottom: -4,
  },
  formikformContainer: {
    paddingHorizontal: 16,
  },
  FieldHeading: {
    color: "#1B4B5E",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Outfit",
  },
  NameInputContainer: {
    rowGap: 12,
  },
  NameInput: {
    paddingHorizontal: 16,
    backgroundColor: "#F6FFFC",
    borderWidth: 1,
    borderColor: "#C9DBDD",
    paddingVertical: 16,
    borderRadius: 12,
  },
  GenderContainer: {
    paddingTop: 24,
  },
  GenderButtonsContainer: {
    flexDirection: "row",
  },
  GenderButton: {
    flexDirection: "row-reverse",
    columnGap: 8,
  },
  PhoneNumberInputContainer: {
    rowGap: 12,
    paddingTop: 24,
  },
  PhoneNumberInput: {
    backgroundColor: "#E6F2F2",
    borderWidth: 1,
    borderColor: "#52B69A",
    paddingVertical: 16,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  EmailInputContainer: {
    rowGap: 12,
    paddingTop: 24,
  },
  EmailInput: {
    paddingHorizontal: 16,
    backgroundColor: "#F6FFFC",
    borderWidth: 1,
    borderColor: "#C9DBDD",
    paddingVertical: 16,
    borderRadius: 12,
  },
  DOBInputContainer: {
    rowGap: 12,
    paddingTop: 24,
  },
  DOBInput: {
    paddingHorizontal: 16,
    backgroundColor: "#F6FFFC",
    borderWidth: 1,
    borderColor: "#C9DBDD",
    paddingVertical: 16,
    borderRadius: 12,
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
  ProceedButtonContainer: {
    paddingTop: 24,
  },
});
