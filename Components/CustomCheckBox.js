import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CustomCheckBox = ({
  ischecked,
  onChange,
  CheckedImage,
  UnCheckedImage,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onChange(!ischecked);
      }}
    >
      <View style={{}}>
        <Image
          source={ischecked ? CheckedImage : UnCheckedImage}
          style={{ width: "100%" }}
        />
      </View>

      {/* <Text>Label</Text> */}
    </TouchableOpacity>
  );
};

export default CustomCheckBox;
