import React from "react";
import { View, Text } from "react-native";

const AboutScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Este é o app oficial da nossa loja. Aqui você encontra os melhores produtos!
      </Text>
    </View>
  );
};

export default AboutScreen;
